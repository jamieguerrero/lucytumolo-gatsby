webpackJsonp([35783957827783,0xc54bca469627],{310:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),r=l(i),n=a(34),s=l(n),d=a(112),c=(l(d),a(130)),u=l(c),o=function(){return r.default.createElement("nav",null,r.default.createElement("div",{className:"container mobile"},r.default.createElement("div",null,r.default.createElement(s.default,{to:"/"},r.default.createElement("img",{src:u.default,alt:"Lucy Logo",style:{width:"346px"}}))),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement(s.default,{to:"/about"},"About")),r.default.createElement("li",null,r.default.createElement(s.default,{to:"/testimonials"},"Testimonials")),r.default.createElement("li",null,r.default.createElement(s.default,{to:"/modalities"},"Modalities")),r.default.createElement("li",null,r.default.createElement(s.default,{to:"/gift"},"Gift Certificates")),r.default.createElement("li",null,r.default.createElement(s.default,{to:"/faq"},"FAQ")),r.default.createElement("li",null,r.default.createElement(s.default,{to:"/contact"},"Contact")))),r.default.createElement("div",{className:"container desktop"},r.default.createElement("div",null,r.default.createElement(s.default,{to:"/"},r.default.createElement("img",{src:u.default,alt:"Lucy Logo",style:{width:"346px"}}))),r.default.createElement("div",{className:"navbar-start"},r.default.createElement(s.default,{to:"/about"},"About"),r.default.createElement(s.default,{to:"/testimonials"},"Testimonials"),r.default.createElement(s.default,{to:"/modalities"},"Modalities"),r.default.createElement(s.default,{to:"/gift"},"Gift Certificates"),r.default.createElement(s.default,{to:"/faq"},"FAQ"),r.default.createElement(s.default,{to:"/contact"},"Contact"))))};t.default=o,e.exports=t.default},527:function(e,t,a){e.exports=a.p+"static/hero-background.ca164463.jpg"},313:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),d=l(s),c=a(2),u=l(c),o=a(34),m=(l(o),a(527)),f=(l(m),a(80)),p=(l(f),a(310)),g=l(p),E=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,a=t[0].node.frontmatter;a.parallaxImage;return d.default.createElement("div",null,d.default.createElement("div",{className:"sections-wrapper"},d.default.createElement("section",{className:"hero-wrapper",style:{backgroundImage:"url("+a.homeImage+")"}},d.default.createElement(g.default,null),d.default.createElement("div",{className:"hero-locations"},d.default.createElement("div",{className:"location-box"},d.default.createElement("a",{href:a.ossingtonLink},"Ossington")),d.default.createElement("div",{className:"location-box"},d.default.createElement("a",{href:a.dundasLink},"Dundas/Dufferin")))),d.default.createElement("section",{className:"services-wrapper columns"},d.default.createElement("div",{className:"text-on-image service-image column is-5 is-offset-1"},d.default.createElement("img",{src:a.servicesImage,alt:""}),d.default.createElement("h2",{className:"image-title"},a.servicesTitle)),d.default.createElement("div",{className:"service-description column is-4 is-offset-1 has-text-weight-semibold"},a.servicesDescription,"// TODO: make services description last sentence its own accent sentence field")),d.default.createElement("section",{className:"modalities-wrapper"},d.default.createElement("div",{className:"modality"},d.default.createElement("div",{className:"text-on-image"},d.default.createElement("img",{src:a.modality1.image,alt:""}),d.default.createElement("h3",{className:"image-title"},a.modality1.title)),d.default.createElement("div",{className:"modality-description"},a.modality1.description)),d.default.createElement("div",{className:"modality"},d.default.createElement("div",{className:"text-on-image"},d.default.createElement("img",{src:a.modality2.image,alt:""}),d.default.createElement("h3",{className:"image-title"},a.modality2.title)),d.default.createElement("div",{className:"modality-description"},a.modality2.description)),d.default.createElement("div",{className:"modality"},d.default.createElement("div",{className:"text-on-image"},d.default.createElement("img",{src:a.modality3.image,alt:""}),d.default.createElement("h3",{className:"image-title"},a.modality3.title)),d.default.createElement("div",{className:"modality-description"},a.modality3.description)))),d.default.createElement("section",{className:"parallax-wrapper"}),d.default.createElement("div",{className:"sections-wrapper"},d.default.createElement("section",{className:"rates-wrapper"},d.default.createElement("div",{className:"rates-description"},a.ratesDescription,"// TODO: make rates into repeatable fields"),d.default.createElement("div",{className:"text-on-image rates-image"},d.default.createElement("img",{src:a.ratesImage,alt:""}),d.default.createElement("h2",{className:"image-title"},a.ratesTitle)),d.default.createElement("div",{className:"rates-description mobile"},a.ratesDescription,"// TODO: make rates into repeatable fields"))),d.default.createElement("div",{className:"parallax-image",style:{backgroundImage:"url("+a.parallaxImage+")"}}))},t}(d.default.Component);t.default=E,E.propTypes={data:u.default.shape({allMarkdownRemark:u.default.shape({edges:u.default.array})})};t.pageQuery="** extracted graphql fragment **"},80:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.aboutPageQuery=t.HomePageTemplate=void 0;var i=a(1),r=l(i),n=a(2),s=l(n),d=a(9),c=(l(d),t.HomePageTemplate=function(e){e.title,e.templateKey,e.homeImage,e.ossingtonLink,e.dundasLink,e.servicesTitle,e.servicesImage,e.servicesDescription,e.modality1,e.modality2,e.modality3,e.parallaxImage,e.ratesTitle,e.ratesImage,e.ratesDescription;return r.default.createElement("div",null)});c.propTypes={title:s.default.string.isRequired,templateKey:s.default.string,homeImage:s.default.string,ossingtonLink:s.default.string,dundasLink:s.default.string,servicesTitle:s.default.string,servicesImage:s.default.string,servicesDescription:s.default.string,modality1:s.default.shape({description:s.default.string,image:s.default.string,title:s.default.string}),modality2:s.default.shape({description:s.default.string,image:s.default.string,title:s.default.string}),modality3:s.default.shape({description:s.default.string,image:s.default.string,title:s.default.string}),parallaxImage:s.default.string,ratesTitle:s.default.string,ratesImage:s.default.string,ratesDescription:s.default.string};var u=function(e){var t=e.data;t.markdownRemark;return r.default.createElement(c,null)};u.propTypes={data:s.default.object.isRequired},t.default=u;t.aboutPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-bb0f2b0482c2b92e4511.js.map