---
title: State
---

The Trustlines app uses redux in combination with redux-saga to store data locally. Once data is pulled in our
state, it's automatically persisted in AsyncStorage with redux-persist. 

Every state entity has ist own directory in 'state' that usually containing these files:

E.g. 'state/contacts'
````
./actions.js    // redux actions
./types.js  // flow types for redux-state and entities
./reducers.js   // redux reducers
./sagas.js      // redux sagas. Pretty much all of the state calculation happens in here
./schema.js     // schema for normalizr (normalization / denormalization of state data)
./select.js     // redux state selectors
````

### Entities

A state entity that has an external resource as source, e.g. 'contact' which is stored in an internal db, follows a pattern:

#### state object
```js
{
    
  data: { // a 'data' object, that holds all normalized data, keyed by a unique id / string
    '0xa1499ad3a013a80701d77e1124b766e4074065fd': {
        ...
      }
  },
  timestamp: '2017-08-11T06:59:45.412Z' // js timestamp,
  fetching: false // boolean flag if a data retrieval is on the go
}
```  

#### actions (actions.js)
Small functions creating actions to enable a streamlined code flow. 


#### sagas (sagas.js)
Sagas take care of the data **retrieval management**, data **normalization** and enable side effects in redux.

see [github.com/redux-saga/redux-saga](https://github.com/redux-saga/redux-saga) or [redux-saga.js.org](https://redux-saga.js.org/) to get a feeling of what redux-saga is capable of.

 
```javascript title="state/contacts/sagas.js"
// A saga responds to a request action ...
yield takeEvery(
  contactsRestActions.get.multi.requested().type,
  getCachedSaga({ fetchSaga: getContacts, selector: getState, lifespan: 10000 })
)

// ... starts the data retrival ...
const getContacts = function * fetchContacts(action): * {
  try {
    const contacts = yield call(contactsDb.getContacts)
    const normalized = normalize(contacts, [contactSchema])
    
    // ... and triggers as redux action with payload
    yield put(contactsRestActions.get.multi.succeeded({ 
      data: normalized.entities.contacts,  
    })) 
  } catch (e) {
    yield put({ 
      ...restActions.get.multi.failed({ message: e.message}), 
      error: true 
    })
  }
}

```

In the example above the saga takes care of the async call. Therefor in response to a *\*.requested* action ( *takeEvery()* ) the actual data retrieval method is called ( *call()* ), the result is normalized and a *\*.succeeded* action is dispatched that will trigger the reducer to save the result to the state.     

As a bonus the dispatch call itself can return a promise, that is resolved once the *\*.succeeded* action is dispatched. 
To enable this *redux-saga-thunk* is used.

```javascript
const getContacts = function * fetchContacts(action): * {
  try {
    const contacts = yield call(contactsDb.getContacts)
    const normalized = normalize(contacts, [contactSchema])
    const thunk = _.get(action, 'meta.thunk')
    
    // ... and triggers as redux action with payload
    yield put(contactsRestActions.get.multi.succeeded({ 
      data: normalized.entities.contacts,
      thunk
    }))
    
    return normalized.entities.contacts
  } catch (e) {
    yield put({ 
      ...restActions.get.multi.failed({ message: e.message,thunk }), 
      error: true 
    })
  }
}

```

#### normalization

The states data is normalized with 'normalizr' https://github.com/paularmstrong/normalizr to reduce redundancy.
 
#### reducer (reducer.js)

The reducer transfer new data into the state
```js title="state/contacts/actions.js"
export const reducer = handleActions({
  [combineActions(...Object.values(restActions.get.multi))](state, { payload, meta }) {
    return {
      ...state,
      timestamp: payload.data ? new Date() : state.timestamp,
      data: payload.data ? payload.data : state.data,
      fetching: meta.fetching
    }
  }
})
```

#### select (select.js)

To get ( and denormalize ) data from state, use the methods from the corresponding *select.js*

#### Persistence

Parts of the state are persistet via *redux-persist* to enable a better startup performance of the app.

There is also a locally running instance of *Pouch DB* which takes care of data saved only locally e.g. `contacts` and `account` data . The connection to this local database is treated like am async remote connection to enable other data adapters later.



  
