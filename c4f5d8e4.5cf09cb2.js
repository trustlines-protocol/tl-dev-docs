(window.webpackJsonp=window.webpackJsonp||[]).push([[518,83,255],{589:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(0),r=t.n(l),i=t(736),c=t(753),s=t(739),o=t(21),m=t(743),b=t(590),u=t.n(b),d=[{title:"Trustlines Blockchain",description:r.a.createElement(r.a.Fragment,null,"The Trustlines Blockchain is a minimal viable Proof-of-Stake (mPoS) Ethereum sidechain.")},{title:"Client library",description:r.a.createElement(r.a.Fragment,null,"The clientlib is a JS-library which makes it easy to build applications on top of the Trustlines Protocol. It provides a high level API to enable applications to interact with the smart contract system on the blockchain via the relay servers.")},{title:"Relay Servers",description:r.a.createElement(r.a.Fragment,null,"The Relay Servers are an optional bridge between client apps and the Trustlines blockchain. They offer services which are not feasible to be implemented on-chain or within the client apps. Importantly, Relay servers calculate optimal paths and relay transactions.")}];function h(e){e.imageUrl;var a=e.title,t=e.description;return r.a.createElement("div",{className:Object(i.a)("col col--4",u.a.feature)},r.a.createElement("h3",null,a),r.a.createElement("p",null,t))}a.default=function(){var e=Object(o.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(c.a,{title:""+a.title,description:"Here you can find all kind of technical documentation about Trustlines as well as code related documentation."},r.a.createElement("header",{className:Object(i.a)("hero hero--primary",u.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},a.title),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement("div",{className:u.a.buttons},r.a.createElement(s.a,{className:Object(i.a)("button button--outline button--secondary button--lg",u.a.getStarted),to:Object(m.a)("blockchain/tlbc")},"Get Started")))),r.a.createElement("main",null,d&&d.length>0&&r.a.createElement("section",{className:u.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},d.map((function(e,a){return r.a.createElement(h,Object(n.a)({key:a},e))})))))))}},758:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(759),i=t(738),c=t(21);a.default=function(e){var a,t=Object(i.useLocation)().pathname,n=null===(a=Object(c.default)().siteConfig.customFields.customNavbarConfig[e.docsPluginId||"docs"])||void 0===a?void 0:a.displayOnlyWhenPathIncludes;return n&&!t.includes(n)?null:l.a.createElement(r.a,e)}},762:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),i=t(736),c=t(739),s=t(21),o=t(761),m=t(754),b=t(747),u=t(755),d=t(751),h=t(752),v=t(763),g=t(56),f=t.n(g),p=t(756),E=t(738),k=function(e){var a=Object(E.useLocation)().pathname,t=Object(s.default)().siteConfig.customFields.githubBadge,n=t.default,l=Object.keys(t).find((function(e){return a.includes(e)}));return t[l]&&(n=t[l]),r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"navbar__item navbar__link header-github-link","aria-label":"GitHub repository"})},_="right";a.a=function(){var e,a,t=Object(s.default)().isClient,g=Object(s.default)().siteConfig.themeConfig,E=g.navbar,O=E.title,N=E.items,j=E.hideOnScroll,y=E.style,w=g.colorMode.disableSwitch,C=Object(l.useState)(!1),T=C[0],S=C[1],I=Object(l.useState)(!1),L=I[0],B=I[1],P=Object(b.a)(),x=P.isDarkTheme,M=P.setLightTheme,D=P.setDarkTheme,F=Object(u.a)(j),H=F.navbarRef,R=F.isNavbarVisible,J=Object(v.a)(),A=J.logoLink,G=J.logoLinkProps,U=J.logoImageUrl,V=J.logoAlt;Object(d.a)(T);var W=Object(l.useCallback)((function(){S(!0)}),[S]),K=Object(l.useCallback)((function(){S(!1)}),[S]),q=Object(l.useCallback)((function(e){return e.target.checked?D():M()}),[M,D]),z=Object(h.a)();Object(l.useEffect)((function(){z===h.b.desktop&&S(!1)}),[z]);var Q=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:_)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:_)}))}}(N),X=Q.leftItems,Y=Q.rightItems;return r.a.createElement("nav",{ref:H,className:Object(i.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===y,"navbar--primary":"primary"===y,"navbar-sidebar--show":T},e[f.a.navbarHideable]=j,e[f.a.navbarHidden]=!R,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=N&&0!==N.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(c.a,Object(n.a)({className:"navbar__brand",to:A},G),null!=U&&r.a.createElement("img",{key:t,className:"navbar__logo",src:U,alt:V}),null!=O&&r.a.createElement("strong",{className:Object(i.a)("navbar__title",(a={},a[f.a.hideLogoText]=L,a))},O)),X.map((function(e,a){return r.a.createElement(p.a,Object(n.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},Y.map((function(e,a){return r.a.createElement(p.a,Object(n.a)({},e,{key:a}))})),r.a.createElement(k,null),!w&&r.a.createElement(m.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:x,onChange:q}),r.a.createElement(o.a,{handleSearchBarToggle:B,isSearchBarExpanded:L}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:K}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(c.a,Object(n.a)({className:"navbar__brand",onClick:K,to:A},G),null!=U&&r.a.createElement("img",{key:t,className:"navbar__logo",src:U,alt:V}),null!=O&&r.a.createElement("strong",{className:"navbar__title"},O)),!w&&T&&r.a.createElement(m.a,{"aria-label":"Dark mode toggle in sidebar",checked:x,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},N.map((function(e,a){return r.a.createElement(p.a,Object(n.a)({mobile:!0},e,{onClick:K,key:a}))})))))))}}}]);