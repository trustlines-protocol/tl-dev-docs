(window.webpackJsonp=window.webpackJsonp||[]).push([[83,255],{758:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(759),i=t(738),c=t(21);a.default=function(e){var a,t=Object(i.useLocation)().pathname,n=null===(a=Object(c.default)().siteConfig.customFields.customNavbarConfig[e.docsPluginId||"docs"])||void 0===a?void 0:a.displayOnlyWhenPathIncludes;return n&&!t.includes(n)?null:r.a.createElement(l.a,e)}},762:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),i=t(736),c=t(739),s=t(21),o=t(761),b=t(754),m=t(747),u=t(755),d=t(751),v=t(752),g=t(763),f=t(56),h=t.n(f),k=t(756),_=t(738),E=function(e){var a=Object(_.useLocation)().pathname,t=Object(s.default)().siteConfig.customFields.githubBadge,n=t.default,r=Object.keys(t).find((function(e){return a.includes(e)}));return t[r]&&(n=t[r]),l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"navbar__item navbar__link header-github-link","aria-label":"GitHub repository"})},p="right";a.a=function(){var e,a,t=Object(s.default)().isClient,f=Object(s.default)().siteConfig.themeConfig,_=f.navbar,O=_.title,j=_.items,N=_.hideOnScroll,w=_.style,C=f.colorMode.disableSwitch,y=Object(r.useState)(!1),I=y[0],L=y[1],x=Object(r.useState)(!1),M=x[0],S=x[1],D=Object(m.a)(),T=D.isDarkTheme,B=D.setLightTheme,H=D.setDarkTheme,P=Object(u.a)(N),F=P.navbarRef,J=P.isNavbarVisible,V=Object(g.a)(),W=V.logoLink,A=V.logoLinkProps,G=V.logoImageUrl,K=V.logoAlt;Object(d.a)(I);var R=Object(r.useCallback)((function(){L(!0)}),[L]),U=Object(r.useCallback)((function(){L(!1)}),[L]),q=Object(r.useCallback)((function(e){return e.target.checked?H():B()}),[B,H]),z=Object(v.a)();Object(r.useEffect)((function(){z===v.b.desktop&&L(!1)}),[z]);var Q=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:p)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:p)}))}}(j),X=Q.leftItems,Y=Q.rightItems;return l.a.createElement("nav",{ref:F,className:Object(i.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===w,"navbar--primary":"primary"===w,"navbar-sidebar--show":I},e[h.a.navbarHideable]=N,e[h.a.navbarHidden]=!J,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=j&&0!==j.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:R,onKeyDown:R},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(c.a,Object(n.a)({className:"navbar__brand",to:W},A),null!=G&&l.a.createElement("img",{key:t,className:"navbar__logo",src:G,alt:K}),null!=O&&l.a.createElement("strong",{className:Object(i.a)("navbar__title",(a={},a[h.a.hideLogoText]=M,a))},O)),X.map((function(e,a){return l.a.createElement(k.a,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},Y.map((function(e,a){return l.a.createElement(k.a,Object(n.a)({},e,{key:a}))})),l.a.createElement(E,null),!C&&l.a.createElement(b.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:q}),l.a.createElement(o.a,{handleSearchBarToggle:S,isSearchBarExpanded:M}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:U}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(c.a,Object(n.a)({className:"navbar__brand",onClick:U,to:W},A),null!=G&&l.a.createElement("img",{key:t,className:"navbar__logo",src:G,alt:K}),null!=O&&l.a.createElement("strong",{className:"navbar__title"},O)),!C&&I&&l.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:q})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},j.map((function(e,a){return l.a.createElement(k.a,Object(n.a)({mobile:!0},e,{onClick:U,key:a}))})))))))}}}]);