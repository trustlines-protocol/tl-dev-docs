/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const GithubBadge = (props) => {
    const {pathname} = useLocation();
    const {siteConfig: {customFields: {githubBadge}}} = useDocusaurusContext()
    let link = githubBadge['default']

    const keys = Object.keys(githubBadge)

    const key = keys.find(badgeKey => {
        return pathname.includes(badgeKey)
    })

    if(githubBadge[key]) {
        link = githubBadge[key]
    }
    return <a href={link} target="_blank" rel="noopener noreferrer"
              className="navbar__item navbar__link header-github-link" aria-label="GitHub repository"></a>
}
