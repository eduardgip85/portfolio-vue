(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={app:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1100:function(t,e,a){t.exports=a.p+"img/background.00d1f077.jpg"},"1a12":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"app"}},[a("NavBar"),a("router-view")],1),a("v-card-text",{staticStyle:{padding:"0!important"}},[a("v-fab-transition",[a("v-btn",{attrs:{color:"red",dark:"",bottom:"",right:"",fab:"",fixed:"",href:"#"}},[a("v-icon",[t._v("mdi-arrow-up")])],1)],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"bgnavbar",staticStyle:{position:"fixed",width:"100%","z-index":"5"},attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Edu G.")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto text-center"},[a("b-nav-item-dropdown",{attrs:{right:""}},[a("template",{slot:"button-content"},[t._v(t._s(t.$t("MenuLang")))]),a("b-dropdown-item",{staticClass:"text-center",attrs:{id:"es"},on:{click:function(e){return t.changeLocale("es")}}},[a("a",[t._v(t._s(t.$t("EsLanguage")))])]),a("b-dropdown-item",{staticClass:"text-center",attrs:{id:"en"},on:{click:function(e){return t.changeLocale("en")}}},[a("a",[t._v(t._s(t.$t("EnLanguage")))])]),a("b-dropdown-item",{staticClass:"text-center",attrs:{id:"cat"},on:{click:function(e){return t.changeLocale("cat")}}},[a("a",[t._v(t._s(t.$t("CatLanguage")))])])],2),a("b-nav-item",{attrs:{href:"#about"}},[a("a",[t._v(t._s(t.$t("MenuAbout")))])]),a("b-nav-item",{attrs:{href:"#portfolio"}},[a("a",[t._v(t._s(t.$t("MenuPortfolio")))])]),a("b-nav-item",{attrs:{href:"#experience"}},[a("a",[t._v(t._s(t.$t("MenuExperience")))])]),a("b-nav-item",{attrs:{href:"#skills"}},[a("a",[t._v(t._s(t.$t("MenuSkills")))])]),a("b-nav-item",{attrs:{href:"#contacta"}},[a("a",[t._v(t._s(t.$t("MenuContact")))])])],1)],1)],1)},s=[],l={data(){return{languages:[{language:"en"},{language:"es"},{language:"cat"}]}},methods:{changeLocale(t){this.$i18n.locale=t;for(const e of this.languages)t===e.language?document.getElementById(e.language).classList.add("active"):document.getElementById(e.language).classList.remove("active")}},mounted(){const t=window.navigator.language;t.includes("es")?this.$i18n.locale="es":t.includes("cat")?this.$i18n.locale="cat":this.$i18n.locale="en";for(const e of this.languages)this.$i18n.locale===e.language?document.getElementById(e.language).classList.add("active"):document.getElementById(e.language).classList.remove("active")}},c=l,u=(a("5dfc"),a("2877")),d=Object(u["a"])(c,i,s,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},v=[],g={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},b=g,f=a("6544"),h=a.n(f),x=a("62ad"),_=a("a523"),y=a("adda"),C=a("0fd9"),w=Object(u["a"])(b,m,v,!1,null,null,null),k=w.exports;h()(w,{VCol:x["a"],VContainer:_["a"],VImg:y["a"],VRow:C["a"]});var E={name:"App",components:{NavBar:p,HelloWorld:k},data:()=>({})},S=E,P=a("7496"),A=a("8336"),T=a("99d9"),j=a("0789"),L=a("132d"),M=Object(u["a"])(S,r,n,!1,null,null,null),D=M.exports;h()(M,{VApp:P["a"],VBtn:A["a"],VCardText:T["c"],VFabTransition:j["b"],VIcon:L["a"]});var V=a("8c4f"),$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{staticStyle:{width:"100%",height:"auto","max-height":"500px"},attrs:{src:a("1100"),alt:""}}),o("div",{staticClass:"text-white textIntro",attrs:{id:"intro"}},[o("b-row",{staticClass:"text-center m-0",staticStyle:{"text-align":"center"}},[o("b-col",{attrs:{cols:"12"}},[o("div",[t._v(" "+t._s(t.$t("Welcome1"))+" ")]),o("div",[t._v(" "+t._s(t.$t("Welcome2"))+" ")])])],1)],1),o("svg",{staticClass:"bi bi-caret-down-square-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"red",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"}})]),o("About",{attrs:{id:"about"}}),o("Portfolio",{attrs:{id:"portfolio"}}),o("Experience",{attrs:{id:"experience"}}),o("Skills",{attrs:{id:"skills"}}),o("Contact",{attrs:{id:"contacta"}}),o("Footer",{attrs:{id:"footer"}})],1)},I=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about-section pt-10"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",[t._v(" "+t._s(t.$t("AboutSection"))+" ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",[t._v(" "+t._s(t.$t("AboutTxt1"))+" ")]),a("p",[t._v(" "+t._s(t.$t("AboutTxt2"))+" ")]),a("p",[t._v(" "+t._s(t.$t("AboutTxt3"))+" ")]),a("p",[t._v(" "+t._s(t.$t("AboutTxt4"))+" ")])])])])])},H=[],B={},F=Object(u["a"])(B,O,H,!1,null,null,null),W=F.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"portfolio-section pt-10"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",[t._v(" "+t._s(t.$t("PortfolioSection"))+" ")])])]),a("v-bottom-navigation",{attrs:{"background-color":t.color,color:"white",grow:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-btn",{on:{click:function(e){t.mostrar="all"}}},[a("span",[t._v(t._s(t.$t("btnNavigationAll")))]),a("v-icon",[t._v("mdi-history")])],1),a("v-btn",{on:{click:function(e){t.mostrar="laravel"}}},[a("span",[t._v("Laravel")]),a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{on:{click:function(e){t.mostrar="html"}}},[a("span",[t._v("HTML / CSS")]),a("v-icon",[t._v("mdi-map-marker")])],1)],1),a("v-row",{staticClass:"pt-5"},t._l(t.portfolio,(function(e,o){return a("v-card",{directives:[{name:"show",rawName:"v-show",value:"all"==t.mostrar||t.mostrar==e.menutec,expression:"mostrar =='all' || mostrar == n.menutec "}],key:o,staticClass:"mx-auto p-2"},[a("v-img",{staticClass:"black--text",attrs:{height:"150px",src:e.img}}),a("v-card-text",{staticClass:"text--primary"},[a("v-card-title",[t._v(t._s(e.titulo))]),0==o?a("div",[t._v(" "+t._s(t.$t("Project1Desc"))+" ")]):t._e(),1==o?a("div",[t._v(" "+t._s(t.$t("Project2Desc"))+" ")]):t._e()],1),a("v-card-subtitle",{staticClass:"pt-0"},[t._v(" "+t._s(t.$t("ProjectSubtitle"))+" "),a("v-card-actions",t._l(e.tecnologias,(function(e,o){return a("v-chip",{key:o,staticClass:"white--text ml-0 mr-1",attrs:{label:"",small:"",color:e.color}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("v-footer",{attrs:{padless:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-btn",{attrs:{color:"orange",text:"",href:e.link,target:"_blank"}},[t._v(" "+t._s(t.$t("ProjectBtnGo"))+" ")])],1)],1)],1)})),1)],1)])},z=[],N={data(){return{mostrar:"all",value:0,portfolio:[{img:"https://i.imgur.com/NHf58pb.jpg",titulo:"AMARTEC",desc:this.$i18n.t("Project1Desc").toString(),menutec:"laravel",tecnologias:[{name:"Laravel",color:"purple"},{name:"Html",color:"blue"},{name:"CSS",color:"orange"}],link:"https://www.amartec.es"},{img:"https://i.imgur.com/obPJKzY.png",titulo:"PORTFOLIO DAW",desc:this.$i18n.t("Project2Desc").toString(),menutec:"html",tecnologias:[{name:"Html",color:"blue"},{name:"CSS",color:"orange"},{name:"JavaScript",color:"yellow"}],link:"https://eduardgip85.github.io/portfolio1/"}]}},computed:{color(){switch(this.value){case 0:return"blue-grey";case 1:return"purple";case 2:return"blue";default:return"blue-grey"}}}},R=N,q=(a("5a4d"),a("b81c")),J=a("b0af"),U=a("cc20"),X=a("553a"),Q=Object(u["a"])(R,G,z,!1,null,"5fd7c2e3",null),K=Q.exports;h()(Q,{VBottomNavigation:q["a"],VBtn:A["a"],VCard:J["a"],VCardActions:T["a"],VCardSubtitle:T["b"],VCardText:T["c"],VCardTitle:T["d"],VChip:U["a"],VCol:x["a"],VFooter:X["a"],VIcon:L["a"],VImg:y["a"],VRow:C["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"pt-10"},[a("v-col",[a("h1",[t._v(" "+t._s(t.$t("ExperienceSection"))+" ")])])],1),a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},[a("v-timeline-item",{attrs:{color:"cyan",small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{class:"headline font-weight-bold cyan--text",domProps:{textContent:t._s("Feb 2021 - Mar 2021")}})]},proxy:!0}])},[a("v-card",{attrs:{color:"cyan",dark:""}},[a("v-card-title",{staticClass:"title"},[t._v(" "+t._s(t.$t("Exp1Titulo"))+" ")]),a("v-card-text",{staticClass:"white text--primary pt-1"},[a("p",[t._v(t._s(t.$t("Exp1Desc")))])])],1)],1),a("v-timeline-item",{attrs:{color:"green",small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{class:"headline font-weight-bold green--text",domProps:{textContent:t._s("Sep 2019 - Jun 2020")}})]},proxy:!0}])},[a("v-card",{attrs:{color:"green",dark:""}},[a("v-card-title",{staticClass:"title"},[t._v(" "+t._s(t.$t("Exp2Titulo"))+" ")]),a("v-card-text",{staticClass:"white text--primary pt-1"},[a("p",[t._v(t._s(t.$t("Exp2Desc")))])])],1)],1),a("v-timeline-item",{attrs:{color:"pink",small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{class:"headline font-weight-bold pink--text",domProps:{textContent:t._s("Sep 2017 - Jun 2019")}})]},proxy:!0}])},[a("v-card",{attrs:{color:"pink",dark:""}},[a("v-card-title",{staticClass:"title"},[t._v(" "+t._s(t.$t("Exp3Titulo"))+" ")]),a("v-card-text",{staticClass:"white text--primary pt-1"},[a("p",[t._v(t._s(t.$t("Exp3Desc")))])])],1)],1)],1)],1)},Z=[],tt={data:()=>({years:[{color:"cyan",year:"Feb 2021 - Mar 2021",titulo:"Programador Front-end en La Llucana",desc:"Creación de nuevo código y mantenimiento del mismo. Utilizando el framework Vue.js y también utilizando Firebase como BD."},{color:"green",year:"Sep 2019 - Jun 2020",titulo:"Grado Superior de DAW en el CEP",desc:"Curso de desarrollo de aplicaciones web donde utilizamos todo tipo de frameworks y programamos tanto front-end como back-end. CEP es el centre d'estudis Politecnics"},{color:"pink",year:"Sep 2017 - Jun 2019",titulo:"Grado Superior de DAM en el CEP",desc:"Curso de desarrollo de aplicaciones multiplataforma donde usamos principalmente Android Studio para crear APPs. También la utilización de MySQL Workbench."}]})},et=tt,at=a("8414"),ot=a("1e06"),rt=Object(u["a"])(et,Y,Z,!1,null,null,null),nt=rt.exports;h()(rt,{VCard:J["a"],VCardText:T["c"],VCardTitle:T["d"],VCol:x["a"],VContainer:_["a"],VRow:C["a"],VTimeline:at["a"],VTimelineItem:ot["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"portfolio-section pt-10 pb-10"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row pb-3"},[a("div",{staticClass:"col"},[a("h1",[t._v(" "+t._s(t.$t("SkillsSection"))+" ")])])]),a("div",[a("div",{staticStyle:{background:"#c9def1"}},[a("h5",[t._v(" HTML ")]),a("v-progress-linear",{attrs:{color:"light-blue",height:"10",value:"100",striped:""}})],1),a("br"),a("div",{staticStyle:{background:"rgb(240 243 203)"}},[a("h5",[t._v(" CSS ")]),a("v-progress-linear",{attrs:{color:"lime",height:"10",value:"80",striped:""}})],1),a("br"),a("div",{staticStyle:{background:"#cbeacb"}},[a("h5",[t._v(" VUE ")]),a("v-progress-linear",{attrs:{color:"light-green darken-4",height:"10",value:"60",striped:""}})],1),a("br"),a("div",{staticStyle:{background:"rgb(249 196 196)"}},[a("h5",[t._v(" Angular ")]),a("v-progress-linear",{attrs:{color:"red darken-2",height:"10",value:"60",striped:""}})],1),a("br"),a("div",{staticStyle:{background:"rgb(255 194 142)"}},[a("h5",[t._v(" JavaScript ")]),a("v-progress-linear",{attrs:{color:"deep-orange darken-2",height:"10",value:"70",striped:""}})],1),a("br"),a("div",{staticStyle:{background:"rgb(233 206 245)"}},[a("h5",[t._v(" PHP ")]),a("v-progress-linear",{attrs:{color:"deep-purple accent-4",height:"10",value:"70",striped:""}})],1),a("br"),a("div",{staticStyle:{background:"#cdcdcd"}},[a("h5",[t._v(" GIT ")]),a("v-progress-linear",{attrs:{color:"black accent-4",height:"10",value:"85",striped:""}})],1)])])])},st=[],lt=a("8e36"),ct={},ut=Object(u["a"])(ct,it,st,!1,null,null,null),dt=ut.exports;h()(ut,{VProgressLinear:lt["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:""}},[a("v-card",{staticClass:"indigo lighten-1 white--text text-center w-100",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e,o){return a("v-btn",{key:o,staticClass:"mx-4 white--text",attrs:{icon:"",href:e.link,target:"_blank"}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.name)+" ")])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" "+t._s(t.$t("FooterText"))+" ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Eduard Gomà Pulido")])])],1)],1)},mt=[],vt={data:()=>({icons:[{name:"mdi-linkedin",link:"https://www.linkedin.com/in/eduardgomapulido/"},{name:"mdi-mail",link:"mailto:eduardgip85@gmail.com"},{name:"mdi-github",link:"https://github.com/eduardgip85"}]})},gt=vt,bt=a("ce7e"),ft=Object(u["a"])(gt,pt,mt,!1,null,null,null),ht=ft.exports;h()(ft,{VBtn:A["a"],VCard:J["a"],VCardText:T["c"],VDivider:bt["a"],VFooter:X["a"],VIcon:L["a"]});var xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"portfolio-section pt-10 pb-10"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row pb-3"},[a("div",{staticClass:"col"},[a("h1",[t._v(" CONTACT FORM ")])])])]),a("div",{staticClass:"container"},[a("form",{attrs:{name:"contact",method:"post","data-netlify":"true"}},[a("p",[a("label",[t._v("Name "),a("input",{attrs:{type:"text",name:"form-name"}})])]),a("p",[a("label",[t._v("Email "),a("input",{attrs:{type:"email",name:"form-email"}})])]),a("p",[a("button",{attrs:{type:"submit"}},[t._v("Send")])])])])])}],yt={},Ct=Object(u["a"])(yt,xt,_t,!1,null,null,null),wt=Ct.exports,kt={name:"Home",components:{About:W,Portfolio:K,Experience:nt,Skills:dt,Footer:ht,Contact:wt}},Et=kt,St=(a("cccb"),Object(u["a"])(Et,$,I,!1,null,null,null)),Pt=St.exports;o["default"].use(V["a"]);const At=[{path:"/",name:"Home",component:Pt},{path:"/:id",name:"Other",component:Pt,redirect:"/"}],Tt=new V["a"]({routes:At});var jt=Tt,Lt=a("2f62");o["default"].use(Lt["a"]);var Mt=new Lt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Dt=a("a925");o["default"].use(Dt["a"]);const Vt={en:{EnLanguage:"English",EsLanguage:"Spanish",CatLanguage:"Catalan",Welcome1:"Welcome to my page",Welcome2:"I'm web developer",MenuAbout:"About",MenuPortfolio:"Portfolio",MenuExperience:"Experience",MenuSkills:"Skills",MenuContact:"Contact",MenuLang:"Lang",AboutSection:"ABOUT",AboutTxt1:"Hello everyone, I am Edu and I am a web programmer in Barcelona, ​​Spain.",AboutTxt2:"I like the whole process of creating a website, either from the beginning with a sketch using Adobe XD, going on to program everything with the methodologies that I know and that I keep learning, and more important, when I see the final result and see what what you think you can do.",AboutTxt3:"I would like to work as a web programmer as a Front End developer.",AboutTxt4:'In my free time I like to do sports, such as "Calisthenia" or climbing, and I also like to spend time on the computer, either watching a series / movie, or even playing a video game with my friends.',PortfolioSection:"PORTFOLIO",ProjectSubtitle:"Technologies used",ProjectBtnGo:"GO",Project1Desc:"Development of a corporate website from scratch for the space management company Amartec",Project2Desc:"Development of my portfolio in the degree, made with pure CSS and HTML and hosted in GITHUB",ExperienceSection:"EXPERIENCE",Exp1Titulo:"Front-end developer in La Llucana",Exp1Desc:"Creation of new code and maintenance of it. Using the Vue.js framework and also using Firebase as a BD.",Exp2Titulo:"DAW Superior Grade at CEP",Exp2Desc:"Higher degree of web application development where we use all kinds of frameworks and program both front-end and back-end. CEP is the Center d'Estudis Politecnics.",Exp3Titulo:"Higher Degree of DAM at CEP",Exp3Desc:"Higher degree of cross-platform application development where we mainly use Android Studio to create APPs. Also using MySQL Workbench.",SkillsSection:"SKILLS",FooterText:'This portfolio is made with Vue, using Vuetify for "timeline", using HackMD for cloud images and GitHub.',btnNavigationAll:"All"},es:{EnLanguage:"Inglés",EsLanguage:"Castellano",CatLanguage:"Catalán",Welcome1:"Bienvenidos a mi pagina",Welcome2:"Soy programador web",MenuAbout:"Sobre mi",MenuPortfolio:"Portfolio",MenuExperience:"Experiencia",MenuSkills:"Habilidades",MenuContact:"Contacta",MenuLang:"Idioma",AboutSection:"SOBRE MI",AboutTxt1:"Hola a tod@s, yo soy Edu y soy programador web en Barcelona, España.",AboutTxt2:"Me gusta todo el proceso de crear una web, ya sea desde el principio con un croquis usando Adobe XD, pasando a programarlo todo con las metodologias que conozco y que aprendo nuevamente , y sobretodo y mas importante, cuando veo el resultado final y ver que lo que piensas, puedes hacerlo.",AboutTxt3:"Me gustaría llegar a trabajar de programador de páginas web cómo desarrollador de Front End.",AboutTxt4:'En mi tiempo libre me gusta hacer deporte, como la "calistenia" o la escalada, y también me gusta pasar rato en el ordenador, ya sea viendo una serie / pelicula, o incluso jugando a algun videojuego con mis amigos.',PortfolioSection:"PORTFOLIO",ProjectSubtitle:"Tecnologías usadas",ProjectBtnGo:"IR",Project1Desc:"Desarrollo de pagina web corporativa desde 0 para la empresa de gestion de espacios amartec",Project2Desc:"Desarrollo de mi portfolio en el grado, hecho con CSS puro y HTML y alojado en GITHUB",ExperienceSection:"EXPERIENCIA",Exp1Titulo:"Programador Front-end en La Llucana",Exp1Desc:"Creación de nuevo código y mantenimiento del mismo. Utilizando el framework Vue.js y también utilizando Firebase como BD.",Exp2Titulo:"Grado Superior de DAW en el CEP",Exp2Desc:"Curso de desarrollo de aplicaciones web donde utilizamos todo tipo de frameworks y programamos tanto front-end como back-end. CEP es el Centre d'Estudis Politecnics",Exp3Titulo:"Grado Superior de DAM en el CEP",Exp3Desc:"Curso de desarrollo de aplicaciones multiplataforma donde usamos principalmente Android Studio para crear APPs. También la utilización de MySQL Workbench.",SkillsSection:"HABILIDADES",FooterText:'Este porfolio esta hecho con Vue, usando Vuetify para "timeline", usando HackMD para imagenes en nube y GitHub.',btnNavigationAll:"Todos"},cat:{EnLanguage:"Anglès",EsLanguage:"Castellà",CatLanguage:"Català",Welcome1:"Benvinguts a la meva pàgina",Welcome2:"Sóc programador web",MenuAbout:"Sobre mi",MenuPortfolio:"Portfoli",MenuExperience:"Experiència",MenuSkills:"Habilitats",MenuContact:"Contacta",MenuLang:"Idioma",AboutSection:"SOBRE MI",AboutTxt1:"Hola a tots i totes, jo sóc Edu i sóc programador web a Barcelona, ​​Espanya.",AboutTxt2:"M'agrada tot el procés de crear un web, ja sigui des del principi amb un croquis usant Adobe XD, passant a programar-ho tot amb les metodologies que conec i que aprenc novament, i sobretot i més important, quan veig el resultat final i veure que el que penses, pots fer-ho.",AboutTxt3:"M'agradaria arribar a treballar com a programador de pàgines web desenvolupant de la part de Front End.",AboutTxt4:"En el meu temps lliure m'agrada fer esport, com la \"cal·listènia\" o l'escalada, i també m'agrada passar estona a l'ordinador, ja sigui veient una sèrie / pel·lícula, o fins i tot jugant a algun videojoc amb els meus amics.",PortfolioSection:"PORTFOLI",ProjectSubtitle:"Tecnologíes usades",ProjectBtnGo:"ANAR",Project1Desc:"Desenvolupament de la pàgina web corporativa des de 0 per a l'empresa de gestió d'espais AMARTEC",Project2Desc:"Desenvolupament del meu portfoli en el grau, fet amb CSS pur i HTML i allotjat en GitHub",ExperienceSection:"EXPERIÈNCIA",Exp1Titulo:"Programador Front-end en La Llucana",Exp1Desc:"Creació de nou codi i manteniment del mateix. Utilitzant el framework Vue.js i també utilitzant Firebase com BD.",Exp2Titulo:"Grau Superior de DAW en el CEP",Exp2Desc:"Curs de desenvolupament d'aplicacions web on utilitzem tot tipus de frameworks i programem tant front-end com back-end. CEP és el Centre d'Estudis Politècnics",Exp3Titulo:"Grau Superior de DAW en el CEP",Exp3Desc:"Curs de desenvolupament d'aplicacions multiplataforma on fem servir principalment Android Studio per a crear APPs. També la utilització de MySQL Workbench.",SkillsSection:"HABILITATS",FooterText:'Aquest portfoli esta fet amb Vue, fent servi Vuefity per el "timeline", fent servi HackMD per las imatges al núvol i GitHub.',btnNavigationAll:"Tots"}},$t=new Dt["a"]({locale:"es",fallbackLocale:"en",messages:Vt});var It=$t,Ot=a("5f5b"),Ht=(a("f9e3"),a("2dd8"),a("f309"));o["default"].use(Ht["a"]);var Bt=new Ht["a"]({});o["default"].use(Ot["a"]),o["default"].config.productionTip=!1,new o["default"]({router:jt,store:Mt,i18n:It,vuetify:Bt,render:function(t){return t(D)}}).$mount("#app")},"5a4d":function(t,e,a){"use strict";a("81cb")},"5ced":function(t,e,a){},"5dfc":function(t,e,a){"use strict";a("1a12")},"81cb":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.11860dca.js.map