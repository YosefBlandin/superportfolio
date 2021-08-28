/*! For license information please see component---src-pages-index-js-2abb9c130d207d5fe942.js.LICENSE.txt */
"use strict";(self.webpackChunksuperportfolio=self.webpackChunksuperportfolio||[]).push([[678],{7462:function(e,t){var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,a=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,i=/\\([\u000b\u0020-\u00ff])/g,o=/([\\"])/g,s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function l(e){var t=String(e);if(a.test(t))return t;if(t.length>0&&!n.test(t))throw new TypeError("invalid parameter value");return'"'+t.replace(o,"\\$1")+'"'}function c(e){this.parameters=Object.create(null),this.type=e}t.Q=function(e){if(!e)throw new TypeError("argument string is required");var t="object"==typeof e?function(e){var t;"function"==typeof e.getHeader?t=e.getHeader("content-type"):"object"==typeof e.headers&&(t=e.headers&&e.headers["content-type"]);if("string"!=typeof t)throw new TypeError("content-type header is missing from object");return t}(e):e;if("string"!=typeof t)throw new TypeError("argument string is required to be a string");var n=t.indexOf(";"),a=-1!==n?t.substr(0,n).trim():t.trim();if(!s.test(a))throw new TypeError("invalid media type");var o=new c(a.toLowerCase());if(-1!==n){var l,u,p;for(r.lastIndex=n;u=r.exec(t);){if(u.index!==n)throw new TypeError("invalid parameter format");n+=u[0].length,l=u[1].toLowerCase(),'"'===(p=u[2])[0]&&(p=p.substr(1,p.length-2).replace(i,"$1")),o.parameters[l]=p}if(n!==t.length)throw new TypeError("invalid parameter format")}return o}},3922:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(7294),a=r(6199),i=r.p+"static/preview-ad9e5395e7a282544042a799982979e2.jpg",o="styles-module--technologies__span--20wT_",s=function(e){var t=e.showDescription,r=e.setShowDescription;return n.createElement("article",{className:"styles-module--container--1_wjl"},n.createElement(a.Lp2,{onClick:function(){return r(!t)},className:"styles-module--container__close--OrWSQ",size:"2rem"}),n.createElement("header",{className:"styles-module--header--spE0L"},n.createElement("img",{className:"styles-module--img--3N8Mi",src:i}),n.createElement("h2",{className:"styles-module--title--27dMv"},"Weather App"),n.createElement("div",{className:"styles-module--technologies--2ebXN"},n.createElement("span",{className:o},n.createElement(a.K3J,{size:"2.7rem"}),n.createElement("strong",null,"React JS")),n.createElement("span",{className:o},n.createElement(a.VKJ,{size:"2.7rem"}),n.createElement("strong",null,"Node JS")),n.createElement("span",{className:o},n.createElement(a.rQi,{size:"2.7rem"}),n.createElement("strong",null,"Sass")))),n.createElement("section",{className:"styles-module--descriptionContainer--fANOQ"},n.createElement("p",null,"JavaScript (/ˈdʒɑːvəˌskrɪpt/),[9] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[10] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] Over 97% of websites use it client-side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O. JavaScript engines were originally used only in web browsers, but they are now core components of other software systems, most notably servers and a variety of applications. Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.")))},l=r(2775),c=function(e){var t=e.title,r=e.subtitle,a=e.setShowDescription,i=e.showDescription;return n.createElement("section",{className:"styles-module--cardTextContainer--2tdUU"},n.createElement("h2",null,t),n.createElement("p",null,r),n.createElement(l.I5p,{onClick:function(){return a(!i)}}))},u=function(e){e.imgSrc,e.imgAlt;var t=e.title,r=void 0===t?"Weather App":t,a=e.subtitle,i=void 0===a?"React js":a,o=n.useState(!1),l=o[0],u=o[1],p={showDescription:l,setShowDescription:u,title:r,subtitle:i};return n.createElement(n.Fragment,null,n.createElement("article",{className:"styles-module--card--TLWA9"},n.createElement(c,p)),l&&n.createElement(s,{showDescription:l,setShowDescription:u}))},p=function(e){var t=e.title;return n.createElement("button",{className:"styles-module--button--3M8IT"},t)},m=function(e){var t=e.title;return n.createElement("h1",{className:"styles-module--titleh1--8e2kR"},t)},d=function(e){var t=e.content;return n.createElement("p",{className:"styles-module--subtitle--2csN1"},t)},f=r(7154),h=r.n(f),v=r(7316),g=r.n(v),E=r(5354),w=r.n(E);Object.create;function b(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;var y=r(7462),S=new Map,A=function(e){return e.cloneNode(!0)},x=function(){return"file:"===window.location.protocol},k=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&2===n.readyState){var t=n.getResponseHeader("Content-Type");if(!t)throw new Error("Content type not found");var a=(0,y.Q)(t).type;if("image/svg+xml"!==a&&"text/plain"!==a)throw new Error("Invalid content type: "+a)}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(x()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(!(200===n.status||x()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);r(null,n)}}catch(i){n.abort(),r(i,n)}},n.open("GET",e),n.withCredentials=t,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},N={},I=function(e,t){N[e]=N[e]||[],N[e].push(t)},j=function(e,t,r){if(S.has(e)){var n=S.get(e);if(void 0===n)return void I(e,r);if(n instanceof SVGSVGElement)return void r(null,A(n))}S.set(e,void 0),I(e,r),k(e,t,(function(t,r){t?S.set(e,t):r.responseXML instanceof Document&&r.responseXML.documentElement&&r.responseXML.documentElement instanceof SVGSVGElement&&S.set(e,r.responseXML.documentElement),function(e){for(var t=function(t,r){setTimeout((function(){if(Array.isArray(N[e])){var r=S.get(e),n=N[e][t];r instanceof SVGSVGElement&&n(null,A(r)),r instanceof Error&&n(r),t===N[e].length-1&&delete N[e]}}),0)},r=0,n=N[e].length;r<n;r++)t(r)}(e)}))},M=function(e,t,r){k(e,t,(function(e,t){e?r(e):t.responseXML instanceof Document&&t.responseXML.documentElement&&t.responseXML.documentElement instanceof SVGSVGElement&&r(null,t.responseXML.documentElement)}))},C=0,R=[],G={},T="http://www.w3.org/1999/xlink",L=function(e,t,r,n,a,i,o){var s=e.getAttribute("data-src")||e.getAttribute("src");if(s){if(-1!==R.indexOf(e))return R.splice(R.indexOf(e),1),void(e=null);R.push(e),e.setAttribute("src",""),(n?j:M)(s,a,(function(n,a){if(!a)return R.splice(R.indexOf(e),1),e=null,void o(n);var l=e.getAttribute("id");l&&a.setAttribute("id",l);var c=e.getAttribute("title");c&&a.setAttribute("title",c);var u=e.getAttribute("width");u&&a.setAttribute("width",u);var p=e.getAttribute("height");p&&a.setAttribute("height",p);var m=Array.from(new Set(b(b(b([],(a.getAttribute("class")||"").split(" ")),["injected-svg"]),(e.getAttribute("class")||"").split(" ")))).join(" ").trim();a.setAttribute("class",m);var d=e.getAttribute("style");d&&a.setAttribute("style",d),a.setAttribute("data-src",s);var f=[].filter.call(e.attributes,(function(e){return/^data-\w[\w-]*$/.test(e.name)}));if(Array.prototype.forEach.call(f,(function(e){e.name&&e.value&&a.setAttribute(e.name,e.value)})),r){var h,v,g,E,w,y={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(y).forEach((function(e){h=e,g=y[e];for(var t=function(e,t){var r;E=v[e].id,w=E+"-"+ ++C,Array.prototype.forEach.call(g,(function(e){for(var t=0,n=(r=a.querySelectorAll("["+e+'*="'+E+'"]')).length;t<n;t++){var i=r[t].getAttribute(e);i&&!i.match(new RegExp('url\\("?#'+E+'"?\\)'))||r[t].setAttribute(e,"url(#"+w+")")}}));for(var n=a.querySelectorAll("[*|href]"),i=[],o=0,s=n.length;o<s;o++){var l=n[o].getAttributeNS(T,"href");l&&l.toString()==="#"+v[e].id&&i.push(n[o])}for(var c=0,u=i.length;c<u;c++)i[c].setAttributeNS(T,"href","#"+w);v[e].id=w},r=0,n=(v=a.querySelectorAll(h+"[id]")).length;r<n;r++)t(r)}))}a.removeAttribute("xmlns:a");for(var S,A,x=a.querySelectorAll("script"),k=[],N=0,I=x.length;N<I;N++)(A=x[N].getAttribute("type"))&&"application/ecmascript"!==A&&"application/javascript"!==A&&"text/javascript"!==A||((S=x[N].innerText||x[N].textContent)&&k.push(S),a.removeChild(x[N]));if(k.length>0&&("always"===t||"once"===t&&!G[s])){for(var j=0,M=k.length;j<M;j++)new Function(k[j])(window);G[s]=!0}var L=a.querySelectorAll("style");if(Array.prototype.forEach.call(L,(function(e){e.textContent+=""})),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("xmlns:xlink",T),i(a),!e.parentNode)return R.splice(R.indexOf(e),1),e=null,void o(new Error("Parent node is null"));e.parentNode.replaceChild(a,e),R.splice(R.indexOf(e),1),e=null,o(null,a)}))}else o(new Error("Invalid data-src or src attribute"))},W=["afterInjection","beforeInjection","evalScripts","fallback","loading","renumerateIRIElements","src","useRequestCache","wrapper"],O="http://www.w3.org/2000/svg",V="http://www.w3.org/1999/xlink";(function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.reactWrapper=void 0,t.nonReactWrapper=void 0,t.refCallback=function(e){t.reactWrapper=e},t}w()(t,e);var r=t.prototype;return r.renderSVG=function(){var e=this;if(this.reactWrapper instanceof Node){var t,r,n=this.props,a=n.beforeInjection,i=n.evalScripts,o=n.renumerateIRIElements,s=n.src,l=n.useRequestCache,c=this.props.afterInjection,u=this.props.wrapper;"svg"===u?((t=document.createElementNS(O,u)).setAttribute("xmlns",O),t.setAttribute("xmlns:xlink",V),r=document.createElementNS(O,u)):(t=document.createElement(u),r=document.createElement(u)),t.appendChild(r),r.dataset.src=s,this.nonReactWrapper=this.reactWrapper.appendChild(t);!function(e,t){var r=void 0===t?{}:t,n=r.afterAll,a=void 0===n?function(){}:n,i=r.afterEach,o=void 0===i?function(){}:i,s=r.beforeEach,l=void 0===s?function(){}:s,c=r.cacheRequests,u=void 0===c||c,p=r.evalScripts,m=void 0===p?"never":p,d=r.httpRequestWithCredentials,f=void 0!==d&&d,h=r.renumerateIRIElements,v=void 0===h||h;if(e&&"length"in e)for(var g=0,E=0,w=e.length;E<w;E++)L(e[E],m,v,u,f,l,(function(t,r){o(t,r),e&&"length"in e&&e.length===++g&&a(g)}));else e?L(e,m,v,u,f,l,(function(t,r){o(t,r),a(1),e=null})):a(0)}(r,{afterEach:function(t,r){!t||(e.removeSVG(),e._isMounted)?e._isMounted&&e.setState((function(){return{hasError:!!t,isLoading:!1}}),(function(){c(t,r)})):c(t)},beforeEach:a,cacheRequests:l,evalScripts:i,renumerateIRIElements:o})}},r.removeSVG=function(){var e;null!=(e=this.nonReactWrapper)&&e.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},r.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},r.componentDidUpdate=function(e){var t=this;(function(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1})(e,this.props)&&this.setState((function(){return t.initialState}),(function(){t.removeSVG(),t.renderSVG()}))},r.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},r.render=function(){var e=this.props;e.afterInjection,e.beforeInjection,e.evalScripts;var t=e.fallback,r=e.loading;e.renumerateIRIElements,e.src,e.useRequestCache;var a=e.wrapper,i=g()(e,W),o=a;return n.createElement(o,h()({},i,{ref:this.refCallback},"svg"===a?{xmlns:O,xmlnsXlink:V}:{}),this.state.isLoading&&r&&n.createElement(r,null),this.state.hasError&&t&&n.createElement(t,null))},t}(n.Component)).defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,loading:null,renumerateIRIElements:!0,useRequestCache:!0,wrapper:"div"};var q=function(e){var t=e.children;return n.createElement("section",{className:"styles-module--grid--1Jrws"},t)};var _=function(e){return n.createElement("svg",Object.assign({width:1004,height:1004,viewBox:"0 0 1004 1004",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M502.28 590.404c49.318-.191 89.142-40.326 88.951-89.643-.191-49.317-40.326-89.141-89.643-88.95-49.317.191-89.141 40.325-88.95 89.642.191 49.318 40.325 89.142 89.642 88.951z",className:"styles-module--dot--1gZx-"}),n.createElement("g",{clipRule:"evenodd",stroke:"#00D1FF",strokeWidth:5},n.createElement("path",{d:"M501.232 319.549c119.893-.465 231.337 16.307 315.427 44.892 101.317 34.442 163.732 87.001 163.917 134.811.193 49.822-65.52 106.17-174.036 142.592-82.041 27.534-190.085 42.161-303.893 42.602-116.686.452-227.232-12.455-310.414-40.521-105.24-35.516-168.764-92.09-168.953-140.963-.184-47.422 59.011-100.044 158.636-135.212 84.177-29.714 198.236-47.732 319.3-48.201h.016z"}),n.createElement("path",{d:"M343.534 411.464c59.494-104.091 129.695-192.253 196.467-250.818 80.45-70.562 157.163-98.37 198.67-74.65 43.258 24.723 59.241 109.801 36.58 221.998-17.115 84.827-58.437 185.725-114.911 284.535-57.903 101.308-124.308 190.623-190.169 248.643-83.341 73.425-164.085 100.192-206.517 75.94-41.174-23.515-57.185-101.097-37.879-204.969 16.312-87.765 57.684-195.572 117.74-300.681l.019.002z"}),n.createElement("path",{d:"M344.391 594.019c-60.467-103.509-101.77-208.378-119.178-295.475-20.955-104.939-6.738-185.291 34.547-209.403 43.022-25.13 124.713 3.511 210.598 79.178 64.936 57.207 131.721 143.381 189.125 241.657 58.853 100.757 103.065 202.896 120.444 288.931 21.991 108.875 4.857 192.194-37.346 216.844-40.949 23.918-116.15-.946-196.498-69.549-67.888-57.961-140.627-147.647-201.692-252.185v.002z"})))},D=function(){return n.createElement(n.Fragment,null,n.createElement("main",{className:"styles-module--container--2Lsql"},n.createElement("section",{className:"styles-module--grid--3b4us"},n.createElement("figure",{className:"styles-module--reactImage--2CBKn"},n.createElement(_,null)),n.createElement("section",{className:"styles-module--hero--35xBM"},n.createElement(m,{title:"A webpage must be a piece of art, in order to dominate the market"}),n.createElement(d,{content:"I make sure to develop an astonishing business presentation"}),n.createElement(p,{title:"See projects"})))),n.createElement(q,null,n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2abb9c130d207d5fe942.js.map