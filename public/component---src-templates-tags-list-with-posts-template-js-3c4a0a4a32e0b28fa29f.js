(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{vgYw:function(t,e,n){"use strict";n.r(e);var l=n("nKUr"),u=n("xweI"),a=n.n(u),o=n("UfWW"),r=n.n(o),i=n("k4Da"),c=n.n(i),s=(n("q1tI"),n("Wbzz")),f=n("N1om"),d=n.n(f),j=n("Zttt"),b=n("/d1K"),w=n("RXmK"),C=n("gGy4");e.default=function(){var t=Object(C.e)(),e=t.title,n=t.subtitle,u=Object(C.f)(),o=Object(C.d)(),i=[];u&&u.map((function(t){var e=c()(i,(function(e){return null!=e&&null!=t&&e.fieldValue.toLowerCase()==t.fieldValue.toLowerCase()})),n=r()(i,(function(e){return null!=e&&null!=t&&e.fieldValue.toLowerCase()==t.fieldValue.toLowerCase()}));e.length>0?i[n]={fieldValue:e[0].fieldValue,totalCount:e[0].totalCount+t.totalCount}:i.push({fieldValue:t.fieldValue.toLowerCase(),totalCount:t.totalCount})}));var f=a()(i,(function(t){return t.fieldValue})),V=function(t){return c()(o,(function(e){var n=e.node;return n.frontmatter.tags&&r()(n.frontmatter.tags,(function(e){return null!=e&&e.toLowerCase()==t.toLowerCase()}))>=0}))};return Object(l.jsxs)(j.a,{title:"Tags - "+e,description:n,children:[Object(l.jsx)(b.a,{}),Object(l.jsx)(w.a,{title:"Tags",children:Object(l.jsx)("ul",{children:f&&f.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)(s.Link,{to:"/tag/"+d()(t.fieldValue)+"/",children:[t.fieldValue," (",t.totalCount,")"]}),Object(l.jsx)("ul",{children:V(t.fieldValue).map((function(t){var e=t.node;return Object(l.jsx)(s.Link,{to:e.fields.slug,children:Object(l.jsx)("li",{children:e.frontmatter.title})},e.fields.slug)}))})]},t.fieldValue)}))})})]})}}}]);
//# sourceMappingURL=component---src-templates-tags-list-with-posts-template-js-3c4a0a4a32e0b28fa29f.js.map