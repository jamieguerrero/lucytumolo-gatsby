webpackJsonp([0xae010192da9c],{135:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.contactPageQuery=t.ContactPageTemplate=void 0;var s=a(1),d=n(s),l=a(2),r=n(l),i=a(18),u=n(i),c=t.ContactPageTemplate=function(e){var t=e.title,a=e.ossingtonMap,n=e.dundasMap,s=e.contactSection;return d.default.createElement("div",null,d.default.createElement(u.default,null),d.default.createElement("section",{className:"section section--gradient"},d.default.createElement("div",{className:"container"},t,a.address,a.mapLink,a.schedule,a.notes,n.address,n.mapLink,n.schedule,n.notes,s.title,d.default.createElement("img",{src:s.image,alt:""}),s.description)))};c.propTypes={title:r.default.string,ossingtonMap:r.default.shape({mapLink:r.default.string,address:r.default.string,schedule:r.default.string,notes:r.default.string}),dundasMap:r.default.shape({mapLink:r.default.string,address:r.default.string,schedule:r.default.string,notes:r.default.string}),contactSection:r.default.shape({title:r.default.string,image:r.default.string,description:r.default.string})};var o=function(e){var t=e.data,a=t.markdownRemark.frontmatter;return d.default.createElement(c,{title:a.title,ossingtonMap:a.ossingtonMap,dundasMap:a.dundasMap,contactSection:a.contactSection})};o.propTypes={data:r.default.shape({markdownRemark:r.default.shape({frontmatter:r.default.object})})},t.default=o;t.contactPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-contact-page-js-053ac8a96e8f178d285c.js.map