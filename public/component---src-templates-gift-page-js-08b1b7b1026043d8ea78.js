webpackJsonp([0x63d14ba3d9bf],{137:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.giftPageQuery=t.GiftPageTemplate=void 0;var r=a(1),l=n(r),o=a(2),u=n(o),d=a(9),f=n(d),c=a(18),m=n(c),i=t.GiftPageTemplate=function(e){var t=e.title,a=e.heroImage,n=e.content,r=e.contentComponent,o=r||f.default;return l.default.createElement("div",null,l.default.createElement(m.default,null),l.default.createElement("section",{className:"section section--gradient"},l.default.createElement("div",{className:"container"},t,l.default.createElement("img",{src:a,alt:""}),l.default.createElement(o,{content:n}))))};i.propTypes={title:u.default.string,heroImage:u.default.string,contentComponent:u.default.func};var s=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,r=a.html;return l.default.createElement(i,{title:n.title,heroImage:n.heroImage,content:r,contentComponent:d.HTMLContent})};s.propTypes={data:u.default.shape({markdownRemark:u.default.shape({frontmatter:u.default.object})})},t.default=s;t.giftPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-gift-page-js-08b1b7b1026043d8ea78.js.map