(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ccdaac"],{2017:function(t,n,e){"use strict";var o=e("cafe"),s=e.n(o);s.a},"49d8":function(t,n,e){"use strict";var o=e("f1a2"),s=e.n(o);s.a},"9ed6":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[t._v("Đăng nhập hệ thống")])]),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"}),e("el-input",{ref:"username",attrs:{placeholder:"Tài khoản",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),e("el-tooltip",{attrs:{content:"Bạn đang mở Caps lock",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(n){t.capsTooltip=n},expression:"capsTooltip"}},[e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"}),e("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Mật khẩu",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(n){t.capsTooltip=!1}},nativeOn:{keyup:[function(n){return t.checkCapslock(n)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleLogin(n)}]},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),e("span",{staticClass:"show-pwd",on:{click:t.showPwd}})],1)],1),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v("Đăng nhập")])],1),e("el-dialog",{attrs:{title:"Or connect with",visible:t.showDialog},on:{"update:visible":function(n){t.showDialog=n}}},[t._v(" Can not be simulated on local, so please combine you own business simulation! ! ! "),e("br"),e("br"),e("br"),e("social-sign")],1)],1)},s=[],i=(e("13d5"),e("b64b"),e("61f7"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(n){return t.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" WeChat ")]),e("div",{staticClass:"sign-btn",on:{click:function(n){return t.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])}),a=[],r={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},c=r,l=(e("edc1"),e("2877")),u=Object(l["a"])(c,i,a,!1,null,"c817cede",null),p=u.exports,d={name:"Login",components:{SocialSign:p},data:function(){var t=function(t,n,e){0===n.length?e(new Error("Vui lòng nhập tài khoản!")):e()},n=function(t,n,e){n.length<6?e(new Error("Mật khẩu phải có độ dài ít nhất 6 kí tự!")):e()};return{loginForm:{username:"",password:""},loginRules:{username:[{trigger:"blur"},t],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(t){var n=t.query;n&&(this.redirect=n.redirect,this.otherQuery=this.getOtherQuery(n))},immediate:!0}},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{checkCapslock:function(t){var n=t.key;this.capsTooltip=n&&1===n.length&&n>="A"&&n<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("auth/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(){t.loading=!1}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(n,e){return"redirect"!==e&&(n[e]=t[e]),n}),{})}}},h=d,f=(e("2017"),e("49d8"),Object(l["a"])(h,o,s,!1,null,"95e6ee4e",null));n["default"]=f.exports},cafe:function(t,n,e){},edc1:function(t,n,e){"use strict";var o=e("eea3"),s=e.n(o);s.a},eea3:function(t,n,e){},f1a2:function(t,n,e){}}]);