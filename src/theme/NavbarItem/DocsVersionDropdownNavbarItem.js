/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import OriginalDocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const DocsVersionDropDown = (props) => {
  const {pathname} = useLocation();
  const {siteConfig: {customFields: {customNavbarConfig}}} = useDocusaurusContext()

  const displayOnlyWhenPathIncludes = customNavbarConfig[props.docsPluginId || "docs"]?.displayOnlyWhenPathIncludes

  if(displayOnlyWhenPathIncludes && !pathname.includes(displayOnlyWhenPathIncludes)) {
    return null
  }

  return <OriginalDocsVersionDropdownNavbarItem {...props} />
}


export default DocsVersionDropDown
