(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a98091f"],{"0d73":function(t,e,n){},1105:function(t,e,n){"use strict";var i=n("b0be"),s=n.n(i);s.a},"156c":function(t,e,n){},"17ff":function(t,e,n){},"315d":function(t,e,n){},3917:function(t,e,n){"use strict";var i=n("e404"),s=n.n(i);s.a},"3a81":function(t,e,n){},"486a":function(t,e,n){"use strict";var i=n("17ff"),s=n.n(i);s.a},"4d19":function(t,e,n){},"59a1":function(t,e,n){"use strict";var i=n("0d73"),s=n.n(i);s.a},"59ed":function(t,e,n){"use strict";var i=n("315d"),s=n.n(i);s.a},"78b9":function(t,e,n){"use strict";var i=n("3a81"),s=n.n(i);s.a},"8cef":function(t,e,n){"use strict";var i=n("156c"),s=n.n(i);s.a},ab53:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"page-left"},[n("about-box",{staticClass:"mb-15"}),n("reason-box",{staticClass:"mb-15"}),n("brand-setting")],1),n("div",{staticClass:"page-right"},[n("common-setting",{staticClass:"mb-15"}),n("contact-setting",{staticClass:"mb-15"}),n("contact-phone")],1)])},s=[],r=(n("96cf"),n("1da1")),a=n("5530"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bhs-card"},[n("BHSCard",{attrs:{title:t.generateTitleView("brandTitle","setting")},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"bhs-card__title"},[t.loading?n("div",{staticClass:"repeat-wrap"},[n("vue-repeater",{model:{value:t.fields,callback:function(e){t.fields=e},expression:"fields"}})],1):t._e()]),n("div",{staticClass:"bhs-card__actions"},[n("button",{staticClass:"btn btn-primary",on:{click:t.saveBrandSlider}},[t._v(" "+t._s(t.generateTitleView("save","common"))+" ")])])]},proxy:!0}])})],1)},c=[],u=n("2f62"),l=n("b35e"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bhs-card"},[n("div",{staticClass:"bhs-card__title"},[t._v(t._s(t.title))]),t._t("body")],2)},d=[],m={name:"BHSCard",props:{title:{type:String,default:function(){return""}}}},f=m,g=(n("3917"),n("2877")),h=Object(g["a"])(f,p,d,!1,null,"1d75ab45",null),b=h.exports,v={name:"BrandSetting",components:{BHSCard:b},mixins:[l["a"]],data:function(){return{}},computed:Object(a["a"])(Object(a["a"])({},Object(u["c"])({loading:"settingSystem/loading",formCreate:"settingSystem/formCreate"})),{},{fields:{get:function(){return this.$store.getters["settingSystem/brandSlider"]},set:function(t){this.$store.commit("settingSystem/updateBrandSlider",t)}}}),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actGetSetting:"settingSystem/getSetting",actEditSetting:"settingSystem/editSetting"})),{},{saveBrandSlider:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.stringify(t.fields),i=JSON.parse(JSON.stringify(t.formCreate)),i.brandSlider=n,e.next=5,t.actEditSetting(i);case 5:s=e.sent,t.handleShowNotification(s),t.actGetSetting();case 8:case"end":return e.stop()}}),e)})))()}})},S=v,C=(n("486a"),Object(g["a"])(S,o,c,!1,null,"23877834",null)),y=C.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bhs-card"},[n("BHSCard",{attrs:{title:t.generateTitleView("reasonSetting","setting")},scopedSlots:t._u([{key:"body",fn:function(){return[t.loading?n("div",{staticClass:"reason-box"},[n("vue-repeater",{model:{value:t.fields,callback:function(e){t.fields=e},expression:"fields"}})],1):t._e(),n("div",{staticClass:"bhs-card__actions"},[n("button",{staticClass:"btn btn-primary",on:{click:t.saveSetting}},[t._v(" "+t._s(t.generateTitleView("save","common"))+" ")])])]},proxy:!0}])})],1)},w=[],x={name:"ReasonBox",components:{BHSCard:b},mixins:[l["a"]],computed:Object(a["a"])(Object(a["a"])({},Object(u["c"])({reasonBox:"settingSystem/reasonBox",formCreate:"settingSystem/formCreate",loading:"settingSystem/loading"})),{},{fields:{get:function(){return this.$store.getters["settingSystem/reasonBox"]},set:function(t){this.$store.commit("settingSystem/updateReasonBox",t)}}}),fields:{get:function(){return this.$store.getters["settingSystem/reasonBox"]},set:function(t){this.$store.commit("settingSystem/updateReasonBox",t)}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actGetSetting:"settingSystem/getSetting",actEditSetting:"settingSystem/editSetting"})),{},{saveSetting:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.parse(JSON.stringify(t.formCreate)),i=JSON.stringify(t.fields),n.reasonBox=i,e.next=5,t.actEditSetting(n);case 5:s=e.sent,t.handleShowNotification(s);case 7:case"end":return e.stop()}}),e)})))()}})},j=x,O=(n("59ed"),Object(g["a"])(j,_,w,!1,null,"0e47f214",null)),V=O.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BHSCard",{attrs:{title:t.generateTitleView("contactTitle","setting")},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"inner"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[n("form",{on:{submit:function(e){return e.preventDefault(),i(t.saveSetting)}}},[n("ValidationProvider",{attrs:{rules:{required:!0,regex:"(09|03|01[2|6|3|8|9])([0-9]{8})\\b"},name:t.generateTitleView("phone","recruiter")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("div",{staticClass:"form-row"},[n("label",{staticClass:"required-text"},[t._v(t._s(t.generateTitleView("phone","setting")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.objCreate.contactPhone,expression:"objCreate.contactPhone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.objCreate.contactPhone},on:{input:function(e){e.target.composing||t.$set(t.objCreate,"contactPhone",e.target.value)}}}),n("span",{staticClass:"vee-errors"},[t._v(t._s(i[0]))])])]}}],null,!0)}),n("ValidationProvider",{attrs:{rules:"required|email",name:t.generateTitleView("email","setting")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("div",{staticClass:"form-row"},[n("label",{staticClass:"required-text"},[t._v(t._s(t.generateTitleView("email","setting")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.objCreate.contactEmail,expression:"objCreate.contactEmail"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.objCreate.contactEmail},on:{input:function(e){e.target.composing||t.$set(t.objCreate,"contactEmail",e.target.value)}}}),n("span",{staticClass:"vee-errors"},[t._v(t._s(i[0]))])])]}}],null,!0)}),n("div",{staticClass:"form-row"},[n("label",{staticClass:"required"},[t._v(t._s(t.generateTitleView("contactAddress","setting")))]),n("Tinymce",{ref:"editor",attrs:{height:150},model:{value:t.objCreate.contactAddress,callback:function(e){t.$set(t.objCreate,"contactAddress",e)},expression:"objCreate.contactAddress"}})],1),n("div",{staticClass:"bhs-card__actions"},[n("button",{staticClass:"btn btn-primary"},[t._v(" "+t._s(t.generateTitleView("save","common"))+" ")])])],1)]}}])})],1)]},proxy:!0}])})},k=[],T=n("8256"),$={name:"ContactSetting",components:{BHSCard:b,Tinymce:T["a"]},mixins:[l["a"]],data:function(){return{formCreate:{contactPhone:"",contactEmail:""}}},computed:Object(a["a"])({},Object(u["c"])({objCreate:"settingSystem/formCreate"})),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actEditSetting:"settingSystem/editSetting"})),{},{saveSetting:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.parse(JSON.stringify(t.objCreate)),e.next=3,t.actEditSetting(n);case 3:i=e.sent,t.handleShowNotification(i);case 5:case"end":return e.stop()}}),e)})))()}})},B=$,P=(n("78b9"),Object(g["a"])(B,R,k,!1,null,"f0f2cd3c",null)),N=P.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BHSCard",{attrs:{title:t.generateTitleView("commonTitle","setting")},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"inner"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[n("form",{on:{submit:function(e){return e.preventDefault(),i(t.saveSetting)}}},[n("ValidationProvider",{attrs:{rules:{required:!0},name:t.generateTitleView("quote1","recruiter")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("div",{staticClass:"form-row"},[n("label",{staticClass:"required-text"},[t._v(t._s(t.generateTitleView("quote1","setting")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.objCreate.primaryQuote,expression:"objCreate.primaryQuote"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.objCreate.primaryQuote},on:{input:function(e){e.target.composing||t.$set(t.objCreate,"primaryQuote",e.target.value)}}}),n("span",{staticClass:"vee-errors"},[t._v(t._s(i[0]))])])]}}],null,!0)}),n("ValidationProvider",{attrs:{rules:"required",name:t.generateTitleView("quote2","setting")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("div",{staticClass:"form-row"},[n("label",{staticClass:"required-text"},[t._v(t._s(t.generateTitleView("quote2","setting")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.objCreate.secondaryQuote,expression:"objCreate.secondaryQuote"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.objCreate.secondaryQuote},on:{input:function(e){e.target.composing||t.$set(t.objCreate,"secondaryQuote",e.target.value)}}}),n("span",{staticClass:"vee-errors"},[t._v(t._s(i[0]))])])]}}],null,!0)}),n("div",{staticClass:"bhs-card__actions"},[n("button",{staticClass:"btn btn-primary"},[t._v(" "+t._s(t.generateTitleView("save","common"))+" ")])])],1)]}}])})],1)]},proxy:!0}])})},J=[],q={name:"CommonSetting",components:{BHSCard:b},mixins:[l["a"]],data:function(){return{formCreate:{primaryQuote:"",secondaryQuote:""}}},computed:Object(a["a"])({},Object(u["c"])({objCreate:"settingSystem/formCreate"})),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actEditSetting:"settingSystem/editSetting"})),{},{saveSetting:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.parse(JSON.stringify(t.objCreate)),e.next=3,t.actEditSetting(n);case 3:i=e.sent,t.handleShowNotification(i);case 5:case"end":return e.stop()}}),e)})))()}})},H=q,I=(n("8cef"),Object(g["a"])(H,E,J,!1,null,"33f1cabb",null)),Q=I.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BHSCard",{attrs:{title:t.generateTitleView("aboutBox","setting")},scopedSlots:t._u([{key:"body",fn:function(){return[t.loading?n("div",[n("vue-repeater",{model:{value:t.fields,callback:function(e){t.fields=e},expression:"fields"}}),n("div",{staticClass:"bhs-card__actions"},[n("button",{staticClass:"btn btn-primary",on:{click:t.saveSetting}},[t._v(" "+t._s(t.generateTitleView("save","common"))+" ")])])],1):t._e()]},proxy:!0}])})},A=[],D={name:"AboutBox",components:{BHSCard:b},mixins:[l["a"]],computed:Object(a["a"])(Object(a["a"])({},Object(u["c"])({loading:"settingSystem/loading",formCreate:"settingSystem/formCreate"})),{},{fields:{get:function(){return this.$store.getters["settingSystem/aboutForm"]},set:function(t){this.$store.commit("settingSystem/updateAboutForm",t)}}}),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actGetSetting:"settingSystem/getSetting",actEditSetting:"settingSystem/editSetting"})),{},{saveSetting:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.stringify(t.fields),i=JSON.parse(JSON.stringify(t.formCreate)),i.aboutBox=n,e.next=5,t.actEditSetting(i);case 5:s=e.sent,t.handleShowNotification(s),t.actGetSetting();case 8:case"end":return e.stop()}}),e)})))()}})},z=D,F=(n("ef43"),Object(g["a"])(z,G,A,!1,null,"43c1f886",null)),K=F.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BHSCard",{attrs:{title:t.generateTitleView("contactPhone","setting")},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"inner contact-phone"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[n("form",{on:{submit:function(e){return e.preventDefault(),i(t.saveSetting)}}},[n("div",{staticClass:"row-wrap"},[n("div",{staticClass:"row-title required-text"},[t._v(" "+t._s(t.generateTitleView("phoneClient","setting"))+" ")]),n("ValidationProvider",{attrs:{rules:"required|Phone",name:t.generateTitleView("phoneClient","setting")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[!1===t.inputVisibleClient?n("input",{directives:[{name:"model",rawName:"v-model",value:t.formSupport.phoneClient,expression:"formSupport.phoneClient"}],staticStyle:{display:"none"},attrs:{type:"text"},domProps:{value:t.formSupport.phoneClient},on:{input:function(e){e.target.composing||t.$set(t.formSupport,"phoneClient",e.target.value)}}}):t._e(),t._l(t.formSupport.phoneClient,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleCloseClient(e)}}},[t._v(" "+t._s(e)+" ")])})),!0===t.inputVisibleClient?n("el-input",{ref:"saveTagInputClient",staticClass:"input-new-tag",attrs:{size:"mini",placeholder:t.generateTitleView("enterPhone","jobs")},on:{blur:function(e){t.inputVisibleClient=!1}},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.handleInputConfirmClient(e))}},model:{value:t.inputValueClient,callback:function(e){t.inputValueClient=e},expression:"inputValueClient"}}):t._e(),n("div",{staticClass:"row-desc"},[t._v(t._s(t.generateTitleView("limitPhone","common")))]),!1===t.inputVisibleClient?n("div",{staticClass:"btn btn-primary btn-create--phone",on:{click:t.showInputClient}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"plus"}}),n("span",[t._v(t._s(t.generateTitleView("createPhone","common")))])],1):t._e(),n("span",{staticClass:"vee-errors"},[t._v(t._s(i[0]))])]}}],null,!0)})],1),n("div",{staticClass:"row-wrap"},[n("div",{staticClass:"row-title required-text"},[t._v(" "+t._s(t.generateTitleView("phoneRecruitment","setting"))+" ")]),n("ValidationProvider",{attrs:{rules:"required|Phone",name:t.generateTitleView("phoneRecruitment","setting")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[!1===t.inputVisibleRhs?n("input",{directives:[{name:"model",rawName:"v-model",value:t.formSupport.phoneRhs,expression:"formSupport.phoneRhs"}],staticStyle:{display:"none"},attrs:{type:"text"},domProps:{value:t.formSupport.phoneRhs},on:{input:function(e){e.target.composing||t.$set(t.formSupport,"phoneRhs",e.target.value)}}}):t._e(),t._l(t.formSupport.phoneRhs,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleCloseRhs(e)}}},[t._v(" "+t._s(e)+" ")])})),!0===t.inputVisibleRhs?n("el-input",{ref:"saveTagInputRhs",staticClass:"input-new-tag",attrs:{size:"mini",placeholder:t.generateTitleView("enterPhone","jobs")},on:{blur:function(e){t.inputVisibleRhs=!1}},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.handleInputConfirmRhs(e))}},model:{value:t.inputValueRhs,callback:function(e){t.inputValueRhs=e},expression:"inputValueRhs"}}):t._e(),n("div",{staticClass:"row-desc"},[t._v(t._s(t.generateTitleView("limitPhone","common")))]),!1===t.inputVisibleRhs?n("div",{staticClass:"btn btn-primary btn-create--phone",on:{click:t.showInputRhs}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"plus"}}),n("span",[t._v(t._s(t.generateTitleView("createPhone","common")))])],1):t._e(),n("span",{staticClass:"vee-errors"},[t._v(t._s(i[0]))])]}}],null,!0)})],1),n("div",{staticClass:"bhs-card__actions"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" "+t._s(t.generateTitleView("save","common"))+" ")])])])]}}])})],1)]},proxy:!0}])})},M=[],U=(n("c975"),n("a434"),{name:"ContactPhone",components:{BHSCard:b},mixins:[l["a"]],data:function(){return{inputVisibleClient:!1,inputVisibleRhs:!1,inputValueClient:"",inputValueRhs:"",formSupport:{phoneClient:[],phoneRhs:[]}}},computed:Object(a["a"])(Object(a["a"])({},Object(u["c"])({phoneSupport:"settingSystem/phoneSupport",objCreate:"settingSystem/formCreate",loading:"settingSystem/loading"})),{},{fromCreate:function(){return this.$store.getters["settingSystem/formCreate"]}}),watch:{fromCreate:function(){var t=JSON.parse(this.objCreate.phoneSupport);this.formSupport.phoneRhs=t[0].phoneRhs,this.formSupport.phoneClient=t[0].phoneClient}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actGetSetting:"settingSystem/getSetting",actEditSetting:"settingSystem/editSetting"})),{},{getData:function(){console.log(this.objCreate)},saveSetting:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.stringify(t.phoneSupport),i=JSON.parse(JSON.stringify(t.objCreate)),i.phoneSupport=n,e.next=5,t.actEditSetting(i);case 5:s=e.sent,t.handleShowNotification(s);case 7:case"end":return e.stop()}}),e)})))()},handleCloseClient:function(t){this.formSupport.phoneClient.splice(this.formSupport.phoneClient.indexOf(t),1)},handleCloseRhs:function(t){this.formSupport.phoneRhs.splice(this.formSupport.phoneRhs.indexOf(t),1)},showInputClient:function(){var t=this;this.inputVisibleClient=!0,this.$nextTick((function(e){t.$refs.saveTagInputClient.$refs.input.focus()}))},showInputRhs:function(){var t=this;this.inputVisibleRhs=!0,this.$nextTick((function(e){t.$refs.saveTagInputRhs.$refs.input.focus()}))},handleInputConfirmClient:function(){var t=this.inputValueClient,e=this.formSupport.phoneClient,n=/(03|09|[2|6|8|9])([0-9]{8})\b/;e.length<=5&&-1===e.indexOf(t)&&n.test(t)&&(t&&(this.formSupport.phoneClient.push(t),this.$store.commit("settingSystem/updatePhoneSupport",this.formSupport)),this.inputVisibleClient=!1,this.inputValueClient="")},handleInputConfirmRhs:function(){var t=this.inputValueRhs,e=this.formSupport.phoneRhs,n=/(03|09|[2|6|8|9])([0-9]{8})\b/;e.length<=5&&-1===e.indexOf(t)&&n.test(t)&&(t&&(this.formSupport.phoneRhs.push(t),this.$store.commit("settingSystem/updatePhoneSupport",this.formSupport)),this.inputVisibleRhs=!1,this.inputValueRhs="")}})}),W=U,X=(n("1105"),Object(g["a"])(W,L,M,!1,null,"5901fa46",null)),Y=X.exports,Z={name:"SettingIndex",components:{ContactPhone:Y,AboutBox:K,CommonSetting:Q,ContactSetting:N,ReasonBox:V,BrandSetting:y},mounted:function(){this.getSetting()},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])({actGetSetting:"settingSystem/getSetting"})),{},{getSetting:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actGetSetting();case 2:case"end":return e.stop()}}),e)})))()}})},tt=Z,et=(n("59a1"),Object(g["a"])(tt,i,s,!1,null,"0e484784",null));e["default"]=et.exports},b0be:function(t,e,n){},e404:function(t,e,n){},ef43:function(t,e,n){"use strict";var i=n("4d19"),s=n.n(i);s.a}}]);