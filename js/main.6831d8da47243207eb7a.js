!function(e){function t(t){for(var n,i,c=t[0],o=t[1],u=t[2],m=0,p=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(s&&s(t);p.length;)p.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={0:0},l=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=o;l.push([145,1]),a()}({145:function(e,t,a){a(146),e.exports=a(345)},340:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),i=a(22),c=a(9),o=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"container"},r.a.createElement("ul",{className:"navbar"},r.a.createElement(i.b,{exact:"true",to:"/Training/"},r.a.createElement("h1",null,"My Website")),r.a.createElement("div",{className:"navlink"},r.a.createElement("li",null,r.a.createElement(i.b,{exact:"true",to:"/Training/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Training/about/"},"About")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Training/services/"},"Services")),r.a.createElement("li",{className:"drop-menu"},r.a.createElement("p",{className:"arrow"},"Pages ",r.a.createElement("span",null,"▼")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/Training/news/"},"News"),r.a.createElement(i.b,{to:"/Training/blog/"},"Messages"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Training/contact/"},"Contact"))))))},u=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://vk.com/id210596232",target:"_blank"},r.a.createElement("span",{className:"icon-facebook"})),r.a.createElement("a",{href:"https://vk.com/id210596232",target:"_blank"},r.a.createElement("span",{className:"icon-twitter"})),r.a.createElement("a",{href:"https://vk.com/id210596232",target:"_blank"},r.a.createElement("span",{className:"icon-instagram"})),r.a.createElement("a",{href:"https://vk.com/id210596232",target:"_blank"},r.a.createElement("span",{className:"icon-google-plus"})),r.a.createElement("a",{href:"https://vk.com/id210596232",target:"_blank"},r.a.createElement("span",{className:"icon-linkedin"}))),r.a.createElement("hr",null),r.a.createElement("p",null,"© 2020 My Website. All rights reserved | Designed by W3layouts")))},s=function(){function e(){window.pageYOffset>100&&document.querySelector(".upstairs").classList.add("upstairs-show"),window.pageYOffset<100&&document.querySelector(".upstairs").classList.remove("upstairs-show")}return Object(n.useEffect)((function(){window.addEventListener("scroll",e)}),[]),r.a.createElement("div",{onClick:function e(){window.pageYOffset>0&&(window.scrollBy(0,-50),setTimeout(e,0))},className:"upstairs"},r.a.createElement("span",{className:"icon-angle-up"}))},m=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),t,r.a.createElement(s,null),r.a.createElement(u,null))},p=(a(340),a(75)),d=a(38),f=a(74);function E(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var b=Object(f.load)({namespace:"message-storage"});b&&b.messages&&b.messages.length||(b={messages:[]});var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.messages,t=arguments.length>1?arguments[1]:void 0,a=t.id,n=t.name,r=t.message,l=t.type;switch(l){case"LEAVE_MESSAGE":return[].concat(E(e),[{id:a,name:n,message:r}]);case"REMOVE_MESSAGE":return E(e).filter((function(e){return e.id!==a}));default:return e}},h=Object(d.c)({messages:v}),y=Object(d.e)(h,{},Object(d.d)(Object(d.a)(Object(f.save)({namespace:"message-storage"})))),N=function(){return r.a.createElement("div",{className:"main-banner"},r.a.createElement("div",{className:"banner-info container"},r.a.createElement("img",{src:"img/circle-photo.jpg",alt:""}),r.a.createElement("h1",null,"Hello, I'm Zhmyshenko"),r.a.createElement("h3",null,"Photographer")))},j=function(){return r.a.createElement("div",{className:"skills"},["Design","Marketing","Photography","Branding","Development","SEO"].map((function(e,t){return r.a.createElement("div",{key:t+1},r.a.createElement("p",null,e),r.a.createElement("span",null," "))})))},q=function(){return r.a.createElement("div",{className:"welcome container"},r.a.createElement("h1",null,"Welcome To My Site"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc"),r.a.createElement(j,null))},w=function(){return r.a.createElement("div",{className:"job-banner"},r.a.createElement("div",{className:"job container"},r.a.createElement("h1",null,"I'm Available For Hire"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam."),r.a.createElement("div",{className:"abilities"},r.a.createElement("div",{className:"ability"},r.a.createElement("div",{className:"ability-title"},r.a.createElement("span",{className:"icon-paint-brush"}),r.a.createElement("h2",null,"Design")),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc")),r.a.createElement("div",{className:"ability"},r.a.createElement("div",{className:"ability-title"},r.a.createElement("span",{className:"icon-ils"}),r.a.createElement("h2",null,"Marketing")),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc")),r.a.createElement("div",{className:"ability"},r.a.createElement("div",{className:"ability-title"},r.a.createElement("span",{className:"icon-camera"}),r.a.createElement("h2",null,"Photography")),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc")))))},S={all:[{id:1,imgURL:"/src/img/project-1.jpg"},{id:2,imgURL:"/src/img/project-2.jpg"},{id:3,imgURL:"/src/img/project-3.jpg"},{id:4,imgURL:"/src/img/project-4.jpg"},{id:5,imgURL:"/src/img/project-5.jpg"},{id:6,imgURL:"/src/img/project-6.jpg"}],illustrations:[{id:1,imgURL:"/src/img/project-7.jpg"},{id:2,imgURL:"/src/img/project-8.jpg"},{id:3,imgURL:"/src/img/project-4.jpg"},{id:4,imgURL:"/src/img/project-3.jpg"},{id:5,imgURL:"/src/img/project-2.jpg"},{id:6,imgURL:"/src/img/project-1.jpg"}],photography:[{id:1,imgURL:"/src/img/project-5.jpg"},{id:2,imgURL:"/src/img/project-6.jpg"},{id:3,imgURL:"/src/img/project-1.jpg"}],website:[{id:1,imgURL:"/src/img/project-2.jpg"},{id:2,imgURL:"/src/img/project-3.jpg"},{id:3,imgURL:"/src/img/project-8.jpg"}]};function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var k=function(){var e=C(Object(n.useState)(S.all.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.imgURL,alt:""}))}))),2),t=e[0],a=e[1];function l(e,t){for(var n in document.getElementsByClassName("filter-active")[0].classList.toggle("filter-active"),S)t===n&&a(S[n].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.imgURL,alt:""}))})));e.target.className="filter-active"}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projects-buttons"},r.a.createElement("p",{className:"filter-active",onClick:function(e){return l(e,"all")}},"All Projects"),r.a.createElement("p",{onClick:function(e){return l(e,"illustrations")}},"Illustration"),r.a.createElement("p",{onClick:function(e){return l(e,"photography")}},"Photography"),r.a.createElement("p",{onClick:function(e){return l(e,"website")}},"Website")),r.a.createElement("div",{className:"all-projects"},t))},A=function(){return r.a.createElement("div",{className:"whatido container"},r.a.createElement("h1",null,"I Love What I Do"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam."),r.a.createElement(k,null))},L=function(){return r.a.createElement("div",{className:"practice"},r.a.createElement("div",{className:"practice-wrap container"},r.a.createElement("div",{className:"experience"},r.a.createElement("h1",null,"Experiences"),r.a.createElement("div",null,r.a.createElement("span",null,"2018 - now"),r.a.createElement("h2",null,"Fulltime Freelancer"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.")),r.a.createElement("div",null,r.a.createElement("span",null,"2014 - 2017"),r.a.createElement("h2",null,"Creative Director at Pixar Studio"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.")),r.a.createElement("div",null,r.a.createElement("span",null,"2010 - 2014"),r.a.createElement("h2",null,"Fulltime Freelancer"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."))),r.a.createElement("div",{className:"experience"},r.a.createElement("h1",null,"Education"),r.a.createElement("div",null,r.a.createElement("span",null,"2010"),r.a.createElement("h2",null,"Master of Design, University of California"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.")),r.a.createElement("div",null,r.a.createElement("span",null,"2007"),r.a.createElement("h2",null,"Bachelor of Arts, Standford University"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.")),r.a.createElement("div",null,r.a.createElement("span",null,"2004"),r.a.createElement("h2",null,"Specialize App Design, Harvard University"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.")))))},M=[{id:0,photo:"../img/photo-1.jpg",name:"Henry Nicholas",profession:"Photographer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:1,photo:"../img/photo-2.jpg",name:"Mark Waugh",profession:"Web Designer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:2,photo:"../img/photo-3.jpg",name:"Sarina Willams",profession:"Graphic Designer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:3,photo:"../img/photo-2.jpg",name:"Mark Waugh",profession:"Engineer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:4,photo:"../img/photo-3.jpg",name:"Sarina Willams",profession:"Engineer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:5,photo:"../img/photo-1.jpg",name:"Henry Nicholas",profession:"Engineer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:6,photo:"../img/photo-1.jpg",name:"Henry Nicholas",profession:"Engineer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"},{id:7,photo:"../img/photo-1.jpg",name:"Henry Nicholas",profession:"Engineer",comment:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"}];function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var x=function(e){var t=e.currentCard,a=e.children,l=T(Object(n.useState)([]),2),i=l[0],c=l[1];return Object(n.useEffect)((function(){c(function(e){for(var t=[],a=e;a<e+3&&!(a>=M.length);a++)t.push(r.a.createElement("div",{key:M[a].id,className:"comment"},r.a.createElement("img",{src:M[a].photo,alt:""}),r.a.createElement("h3",null,M[a].name),r.a.createElement("p",{className:"profession"},M[a].profession),r.a.createElement("p",null,M[a].comment)));return t}(t))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"comment-card"},i),a)};function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var P=function(){for(var e=U(Object(n.useState)(0),2),t=e[0],a=e[1],l=[],i=function(e){0===e?l.push(r.a.createElement("span",{key:M[e].id,onClick:function(t){return o(t,e)},className:"dot dot-active"})):l.push(r.a.createElement("span",{key:M[e].id,onClick:function(t){return o(t,e)},className:"dot"}))},c=0;c<Math.ceil(M.length/3);c++)i(c);function o(e,t){document.querySelector(".dot-active").classList.toggle("dot-active"),a(3*t),e.target.classList.toggle("dot-active")}return r.a.createElement(x,{currentCard:t},r.a.createElement("div",{className:"dots"},l))},V=function(){return r.a.createElement("div",{className:"review container"},r.a.createElement("h1",null,"What They Says"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam."),r.a.createElement(P,null))},_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(q,null),r.a.createElement(w,null),r.a.createElement(A,null),r.a.createElement(L,null),r.a.createElement(V,null))},D=function(){return r.a.createElement("div",{className:"about-me container"},r.a.createElement("figure",null,r.a.createElement("img",{src:"../img/about.jpg",alt:"about me"}),r.a.createElement("figcaption",null,r.a.createElement("h1",null,"Failure Is The Condiment That Gives Sucess It'S Flavour"),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum fugiat quod ullam earum dignissimos corporis, nemo provident nostrum, nihil culpa. Et corrupti sit hic amet, animi unde cumque consequuntur omnis ad nihil optio id eum qui, impedit deleniti? Veniam eum aspernatur incidunt? Doloremque, cum? Repellendus consectetur, cupiditate tenetur provident neque, quas, totam eveniet nisi eius veritatis ea maiores ducimus a reprehenderit minima magnam dicta! Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem! Culpa nam et accusamus beatae!"),r.a.createElement(i.b,{to:"/services"},r.a.createElement("button",null,"About me")))))},W=function(e){var t=e.imgURL,a=e.path;return r.a.createElement("div",{className:"recent-pages-banner",style:{backgroundImage:"(".concat(t,")")}},r.a.createElement("div",{className:"path container"},r.a.createElement("span",null,"Home / ",a)))},F=function(){return r.a.createElement("div",{className:"about-welcome-wrap"},r.a.createElement("div",{className:"about-welcome container"},r.a.createElement("h1",null,"Welcome To My Site"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc"),r.a.createElement("div",{className:"about-cards"},r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"icon-suitcase"}),r.a.createElement("h2",null,"Want An Expert"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.")),r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"icon-shield"}),r.a.createElement("h2",null,"Want An Expert"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.")),r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"icon-dollar"}),r.a.createElement("h2",null,"Want An Expert"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.")))))},G=function(){return r.a.createElement("div",{className:"about-stats-wrap"},r.a.createElement("div",{className:"about-stats container"},r.a.createElement("span",null,r.a.createElement("h1",null,"7242"),r.a.createElement("p",null,"Hours of Works")),r.a.createElement("span",null,r.a.createElement("h1",null,"380"),r.a.createElement("p",null,"Projects Done")),r.a.createElement("span",null,r.a.createElement("h1",null,"220"),r.a.createElement("p",null,"Satisfied Customers")),r.a.createElement("span",null,r.a.createElement("h1",null,"24"),r.a.createElement("p",null,"Awards Winning"))))},H=function(){return r.a.createElement("div",{className:"about-subscribe container"},r.a.createElement("h1",null,"Stay Up To Date, Subscribe To The Free Newsletter !"),r.a.createElement("form",null,r.a.createElement("textarea",{cols:"30",rows:"1",placeholder:"Enter your email"}),r.a.createElement("button",null,"Subscribe")))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{imgURL:"url(../img/practice.jpg)",path:"About"}),r.a.createElement(D,null),r.a.createElement(F,null),r.a.createElement(G,null),r.a.createElement(H,null))},Y=[{id:1,iconClass:"icon-code",serviceTitle:"Website Design"},{id:2,iconClass:"icon-cogs",serviceTitle:"Web Development"},{id:3,iconClass:"icon-mobile",serviceTitle:"App Development"},{id:4,iconClass:"icon-lock",serviceTitle:"Cyber Security"},{id:5,iconClass:"icon-bar-chart",serviceTitle:"Digital Marketing"},{id:6,iconClass:"icon-info",serviceTitle:"Other Category"}],Q=function(){return r.a.createElement("div",{className:"my-services-wrap"},r.a.createElement("div",{className:"my-services container"},r.a.createElement("h1",null,"My Services"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam."),r.a.createElement("div",{className:"all-services"},Y.map((function(e){return r.a.createElement("div",{key:e.id,className:"service"},r.a.createElement("span",{className:e.iconClass}),r.a.createElement("div",null,r.a.createElement("h2",null,e.serviceTitle),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt"),r.a.createElement("h3",null,"Read more ›")))})))))},$=function(e){var t=e.title,a=e.price;return r.a.createElement("div",{className:"package-card"},r.a.createElement("h1",null,t),r.a.createElement("p",null,"Lifetime Usage"),r.a.createElement("p",null,"3 Months Support & Updates"),r.a.createElement("p",null,"1 Website License"),r.a.createElement("p",null,"Quickstart Included"),r.a.createElement("p",null,"Access to Templates & Extensions"),r.a.createElement("p",null,"Branding/Copyright Removal"),r.a.createElement("p",{className:"price"},"$ ",a),r.a.createElement("button",null,"Get Started"))},J=function(){return r.a.createElement("div",{className:"packages container"},r.a.createElement("h1",null,"See Our Packages"),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam."),r.a.createElement("div",{className:"our-packages"},r.a.createElement($,{title:"Personal",price:"199.00"}),r.a.createElement($,{title:"Advance",price:"299.00"}),r.a.createElement($,{title:"Platinum",price:"399.00"})))},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{imgURL:"url(../img/services-banner.jpg)",path:"Services"}),r.a.createElement(Q,null),r.a.createElement(J,null))},z=function(){return r.a.createElement("div",{className:"callback container"},r.a.createElement("form",null,r.a.createElement("textarea",{cols:"30",rows:"1",placeholder:"Name"}),r.a.createElement("textarea",{cols:"30",rows:"1",placeholder:"Email"}),r.a.createElement("textarea",{className:"last-textarea",cols:"30",rows:"5",placeholder:"Message"}),r.a.createElement("button",null,"Submit Now")),r.a.createElement("div",{className:"coords"},r.a.createElement("div",null,r.a.createElement("span",{className:"icon-location"}),r.a.createElement("p",null,"PO Box 1212, London, UK")),r.a.createElement("div",null,r.a.createElement("span",{className:"icon-envelope-open"}),r.a.createElement("p",null,"info@example.com")),r.a.createElement("div",null,r.a.createElement("span",{className:"icon-volume-control-phone"}),r.a.createElement("p",null,"+7-800-999-800")),r.a.createElement("div",null,r.a.createElement("span",{className:"icon-file-pdf-o"}),r.a.createElement("p",null,"Download Resume"))))},Z=function(){return r.a.createElement("div",{className:"map"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339402363!2d-0.24167976173417796!3d51.52855824336958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1590057711811!5m2!1sru!2sru",width:"1366",height:"768",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0"}))},X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{imgURL:"url(../img/contact.jpg)",path:"Contact"}),r.a.createElement(z,null),r.a.createElement(Z,null))},ee=function(e){var t=e.keyWord,a=e.handleInputChange,l=e.startSearch;function i(){window.pageYOffset>265&&document.querySelector("#searchFixed").classList.add("search-fixed"),window.pageYOffset<265&&document.querySelector("#searchFixed").classList.remove("search-fixed")}return Object(n.useEffect)((function(){window.addEventListener("scroll",i)}),[]),r.a.createElement("div",{className:"search"},r.a.createElement("h2",null,"Search"),r.a.createElement("input",{type:"text",placeholder:"Write a keyword",value:t,onChange:a,onKeyPress:l}))},te=function(e){var t=e.changeUrl;return r.a.createElement("nav",{className:"news-filter"},r.a.createElement("h2",{onClick:function(e){return t(e,"usa")}},"All Categories"),r.a.createElement("p",{onClick:function(e){return t(e,"covid")}},"›",r.a.createElement("span",null,"Covid-19")),r.a.createElement("p",{onClick:function(e){return t(e,"nasa")}},"›",r.a.createElement("span",null,"NASA")),r.a.createElement("p",{onClick:function(e){return t(e,"policy")}},"›",r.a.createElement("span",null,"Policy")),r.a.createElement("p",{onClick:function(e){return t(e,"trump")}},"›",r.a.createElement("span",null,"Trump")),r.a.createElement("p",{onClick:function(e){return t(e,"games")}},"›",r.a.createElement("span",null,"Games")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://newsapi.org/",target:"_blank"},"Powered by NewsApi.org")))},ae=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"Loading..."))},ne=function(e){var t=e.title,a=e.urlToImage,n=e.description,l=e.url;return r.a.createElement("div",{className:"article"},r.a.createElement("img",{src:a,alt:""}),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement("a",{href:l,target:"_blank"},"Read in source")))};function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return le(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ie=function(e){var t=e.currentPage,a=e.setCurrentPage,l=e.articles,i=re(Object(n.useState)([]),2),c=i[0],o=i[1];Object(n.useEffect)((function(){o(function(e){for(var t=[],a=e;a<e+4&&!(a>=l.length);a++)t.push(r.a.createElement(ne,{key:l[a].title,title:l[a].title,description:l[a].description,urlToImage:l[a].urlToImage,url:l[a].url}));return t}(t))}),[t]);for(var u=[],s=function(e){0===e?u.push(r.a.createElement("p",{key:l[e].title,onClick:function(t){return p(t,e)},className:"page-number page-number-active"},e+1)):u.push(r.a.createElement("p",{key:l[e].title,onClick:function(t){return p(t,e)},className:"page-number"},e+1))},m=0;m<Math.ceil(l.length/4);m++)s(m);function p(e,t){document.querySelector(".page-number-active").classList.toggle("page-number-active"),a(4*t),e.target.classList.toggle("page-number-active"),d()}function d(){pageYOffset>250&&(window.scrollBy(0,-15),setTimeout(d,0))}return r.a.createElement(r.a.Fragment,null,c,r.a.createElement("div",{className:"pagination"},u))};function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return oe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ue="apiKey=8c633bf56a644d0c96bbdee21772ae72",se="".concat("https://cors-anywhere.herokuapp.com/").concat("https://newsapi.org/v2/").concat("top-headlines?","country=us&").concat(ue),me=function(){var e=ce(Object(n.useState)(""),2),t=e[0],a=e[1],l=ce(Object(n.useState)(se),2),i=l[0],c=l[1],o=ce(Object(n.useState)(""),2),u=o[0],s=o[1],m=ce(Object(n.useState)(0),2),p=m[0],d=m[1];function f(e,t){if(t){a("");var n=encodeURI(t);c("".concat("https://cors-anywhere.herokuapp.com/").concat("https://newsapi.org/v2/").concat("everything?","q=").concat(n,"&").concat(ue))}else c(se)}return Object(n.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){return a(e.articles)}))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{imgURL:"url(../img/news.jpg)",path:"News"}),r.a.createElement("div",{className:"news-wrap container"},r.a.createElement("div",{className:"news"},t?r.a.createElement(ie,{articles:t,currentPage:p,setCurrentPage:d}):r.a.createElement(ae,null)),r.a.createElement("div",null,r.a.createElement("div",{id:"searchFixed"},r.a.createElement(ee,{keyWord:u,handleInputChange:function(e){var t=e.target.value;s(t)},startSearch:function(e){"Enter"===e.key&&""!==u&&(f(event,u),s(""),d(0))}}),r.a.createElement(te,{changeUrl:f})))))},pe=a(348),de=a(347),fe=function(e){var t=e.messages,a=e.removeMessage;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return t%2==0?r.a.createElement("div",{key:e.id,className:"message",style:{alignSelf:"flex-end"}},r.a.createElement("span",{onClick:function(){return a(e.id)},className:"icon-times-circle"}),r.a.createElement("h2",null,r.a.createElement("span",{className:"icon-envelope-open"})," ",e.name),r.a.createElement("p",null,e.message)):r.a.createElement("div",{key:e.id,className:"message",style:{alignSelf:"flex-start"}},r.a.createElement("span",{onClick:function(){return a(e.id)},className:"icon-times-circle"}),r.a.createElement("h2",null,r.a.createElement("span",{className:"icon-suitcase"})," ",e.name),r.a.createElement("p",null,e.message))})))},Ee=function(e){var t=e.name,a=e.message,n=e.handleInputChange,l=e.addMessage;return r.a.createElement("div",{className:"leave-message"},r.a.createElement("h2",null,"Leave A Message"),r.a.createElement("form",{onSubmit:l},r.a.createElement("textarea",{rows:"1",cols:"15",placeholder:"Your Name",value:t,onChange:function(e){return n(e,"name")},required:!0}),r.a.createElement("textarea",{rows:"3",cols:"15",placeholder:"Your Message",value:a,onChange:function(e){return n(e,"message")},required:!0}),r.a.createElement("button",{type:"submit"},"Post Message")))},ge=function(e){var t=e.toggleModalVisibility,a=e.modalVisible;return r.a.createElement("div",{onClick:t,className:"message-bar"},a?r.a.createElement("span",null,"∨"):r.a.createElement("span",null,"∧"),r.a.createElement("h1",null,"Leave A Message"),a?r.a.createElement("span",null,"∨"):r.a.createElement("span",null,"∧"))};function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function he(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=we(e);if(t){var r=we(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return je(this,a)}}function je(e,t){return!t||"object"!==be(t)&&"function"!=typeof t?qe(e):t}function qe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(i,e);var t,a,n,l=Ne(i);function i(){var e;ve(this,i);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return Se(qe(e=l.call.apply(l,[this].concat(a))),"state",{name:"",message:"",modalVisible:!1}),Se(qe(e),"handleInputChange",(function(t,a){var n=t.target.value;e.setState(Se({},a,n))})),Se(qe(e),"addMessage",(function(t){t.preventDefault();var a=e.state,n=a.name,r=a.message;(0,e.props.leaveMessage)((new Date).getTime(),n,r),e.setState({name:"",message:""})})),Se(qe(e),"toggleModalVisibility",(function(){e.setState({modalVisible:!e.state.modalVisible})})),e}return t=i,(a=[{key:"render",value:function(){var e=this.state,t=e.name,a=e.message,n=e.modalVisible,l=this.props,i=l.messages,c=l.removeMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{imgURL:"url(../img/blog.jpg)",path:"Messages"}),r.a.createElement("div",{className:"blog container"},r.a.createElement(fe,{messages:i,removeMessage:c}),r.a.createElement(pe.a,null,n&&r.a.createElement(de.a,{classNames:"options",timeout:300},r.a.createElement(Ee,{addMessage:this.addMessage,handleInputChange:this.handleInputChange,name:t,message:a}))),r.a.createElement(ge,{toggleModalVisibility:this.toggleModalVisibility,modalVisible:n})))}}])&&he(t.prototype,a),n&&he(t,n),i}(r.a.Component),Oe=Object(p.b)((function(e){return{messages:e.messages}}),{leaveMessage:function(e,t,a){return{type:"LEAVE_MESSAGE",id:e,name:t,message:a}},removeMessage:function(e){return{type:"REMOVE_MESSAGE",id:e}}})(Ce);Object(l.render)(r.a.createElement(p.a,{store:y},r.a.createElement(i.a,null,r.a.createElement(m,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/Training/",component:_}),r.a.createElement(c.a,{path:"/Training/about/",component:B}),r.a.createElement(c.a,{path:"/Training/services/",component:K}),r.a.createElement(c.a,{path:"/Training/news/",component:me}),r.a.createElement(c.a,{path:"/Training/blog/",component:Oe}),r.a.createElement(c.a,{path:"/Training/contact/",component:X}),r.a.createElement(c.a,{path:"*",component:_}))))),document.getElementById("root"))}});