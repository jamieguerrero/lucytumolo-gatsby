webpackJsonp([0xed4042af80e8],{139:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.modalitiesPageQuery=t.ResourcePageTemplate=void 0;var r=a(1),o=n(r),l=a(2),c=n(l),u=a(9),d=n(u),m=t.ResourcePageTemplate=function(e){var t=e.title,a=e.heroImage,n=e.content,r=e.contentComponent,l=r||d.default;return o.default.createElement("section",{className:"section section--gradient"},o.default.createElement("div",{className:"container"},t,o.default.createElement("img",{src:a}),o.default.createElement(l,{content:n})))};m.propTypes={title:c.default.string,heroImage:c.default.string};var i=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,r=a.html;return o.default.createElement(m,{title:n.title,heroImage:n.heroImage,content:r,contentComponent:u.HTMLContent})};i.propTypes={data:c.default.shape({markdownRemark:c.default.shape({frontmatter:c.default.object})})},t.default=i;t.modalitiesPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-resources-page-js-7223f6c1012524b0fd6f.js.map