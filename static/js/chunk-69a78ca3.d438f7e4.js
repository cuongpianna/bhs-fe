(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a78ca3"],{"12d9":function(e,t,r){"use strict";r("b58f")},"76c5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.handleSubmitUser)}}},[r("sticky",{attrs:{"z-index":10}},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"left"},[e.idUser?r("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("editUser","user")))]):r("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("createUser","user")))])]),r("div",{staticClass:"right"},[r("vs-checkbox",{model:{value:e.formCreate.isActive,callback:function(t){e.$set(e.formCreate,"isActive",t)},expression:"formCreate.isActive"}},[e._v(e._s(e.generateTitleView("active","common")))]),e.idUser?r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("editUser","user")))]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("createUser","user")))]),r("button",{staticClass:"btn btn-danger",attrs:{type:"reset"},on:{click:e.redirectClient}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)])]),r("div",{staticClass:"page-content"},[r("div",{staticClass:"inner_content bhs-card"},[r("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("infoUser","user")))]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("name","user"))+" ")]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("name","user")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.fullname,expression:"formCreate.fullname"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterName","user")},domProps:{value:e.formCreate.fullname},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"fullname",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(" Lựa chọn loại tài khoản ")]),r("ValidationProvider",{attrs:{rules:"required",name:"Loại tài khoản"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("el-select",{attrs:{clearable:"",placeholder:"Lựa chọn loại tài khoản","value-key":"id"},model:{value:e.roleSelect,callback:function(t){e.roleSelect=t},expression:"roleSelect"}},e._l(e.listRole,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("gender","common")))]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("gender","common")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"radio-wrap"},[r("el-radio-group",{model:{value:e.formCreate.gender,callback:function(t){e.$set(e.formCreate,"gender",t)},expression:"formCreate.gender"}},[r("el-radio",{attrs:{label:0}},[e._v("Khác")]),r("el-radio",{attrs:{label:1}},[e._v(e._s(e.generateTitleView("man","common")))]),r("el-radio",{attrs:{label:2}},[e._v(e._s(e.generateTitleView("woman","common")))])],1)],1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("address","common"))+" ")]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("address","common")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.contact,expression:"formCreate.contact"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterAddress","common")},domProps:{value:e.formCreate.contact},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"contact",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("phone","common")))]),r("ValidationProvider",{attrs:{rules:"required|Phone",name:e.generateTitleView("phone","common")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.phone,expression:"formCreate.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterPhone","common")},domProps:{value:e.formCreate.phone},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"phone",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"inner_info bhs-card"},[r("h4",{staticClass:"heading-create"},[e._v("Thông tin đăng nhập")]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("UserName","user"))+" ")]),r("ValidationProvider",{attrs:{rules:"required|email",name:e.generateTitleView("email","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.userName,expression:"formCreate.userName"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterEmail","recruiter"),disabled:e.idUser},domProps:{value:e.formCreate.userName},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"userName",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),e.idUser?r("div",{staticClass:"row-wrap"},[r("el-switch",{attrs:{"active-text":"Thay đổi mật khẩu","inactive-text":"Giữ nguyên mật khẩu"},model:{value:e.changePassword,callback:function(t){e.changePassword=t},expression:"changePassword"}})],1):e._e(),e.changePassword?r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("password","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"verify_password",name:"Mật khẩu",placeholder:e.generateTitleView("password","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"password-wrap"},[r("span",{staticClass:"svg-container"}),r("el-input",{ref:"password",attrs:{type:e.passwordType1,placeholder:e.generateTitleView("enterPassword","recruiter")},model:{value:e.formCreate.password,callback:function(t){e.$set(e.formCreate,"password",t)},expression:"formCreate.password"}}),r("i",{staticClass:"bx bx-show-alt",on:{click:e.showPassword}})],1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1):e._e(),e.changePassword?r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("rePassword","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required|password:@Mật khẩu",name:e.generateTitleView("rePassword","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"password-wrap"},[r("span",{staticClass:"svg-container"}),r("el-input",{attrs:{type:e.passwordType2,placeholder:e.generateTitleView("enterRePassword","recruiter")},model:{value:e.rePassword,callback:function(t){e.rePassword=t},expression:"rePassword"}}),r("i",{staticClass:"bx bx-show-alt",on:{click:e.showRePassword}})],1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1):e._e(),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("avatar","recruiter")))]),r("BHSAvatar",{staticClass:"avatar-upload",attrs:{image:e.formCreate.pictureUrl},model:{value:e.formCreate.pictureUrl,callback:function(t){e.$set(e.formCreate,"pictureUrl",t)},expression:"formCreate.pictureUrl"}})],1)])])],1)]}}])})],1)},s=[],i=r("1da1"),o=r("5530"),n=(r("96cf"),r("b35e")),l=r("2f62"),c=r("a896"),d=r("b804"),u={name:"UserCreate",components:{BHSAvatar:c["a"],Sticky:d["a"]},mixins:[n["a"]],data:function(){return{idUser:this.$route.params.id,changePassword:!1,rePassword:"",passwordType1:"password",passwordType2:"password",listRole:[],roleSelect:{},formCreate:{phone:"",gender:0,contact:"",email:"",userName:"",fullname:"",password:"",pictureUrl:"",isActive:!0,userType:1,roleType:null,roleUser:[]}}},computed:{},mounted:function(){var e=this;this.idUser?this.actGetUserInfo(this.idUser).then((function(t){e.formCreate=JSON.parse(JSON.stringify(t.data.payload.records[0])),e.roleSelect=e.formCreate.roleUser[0]})):this.changePassword=!0,this.getAllRole()},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])({actGetUserInfo:"account/getUserInfo",actCreateUser:"user/createUserAdmin",actEditUser:"user/editUserAdmin",actRoleAll:"role/getAll"})),{},{getAllRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actRoleAll();case 2:r=t.sent,r.isSuccess&&(e.listRole=r.payload);case 4:case"end":return t.stop()}}),t)})))()},showPassword:function(){"password"===this.passwordType1?this.passwordType1="text":this.passwordType1="password"},showRePassword:function(){"password"===this.passwordType2?this.passwordType2="text":this.passwordType2="password"},handleSubmitUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=null,e.formCreate.roleUser[0]=e.roleSelect,e.formCreate.roleType=e.roleSelect.roleType,void 0===e.idUser||null===e.idUser){t.next=9;break}return t.next=6,e.actEditUser(e.formCreate);case 6:r=t.sent,t.next=12;break;case 9:return t.next=11,e.actCreateUser(e.formCreate);case 11:r=t.sent;case 12:e.handleShowNotification(r.data),r.data.isSuccess&&e.redirectClient();case 14:case"end":return t.stop()}}),t)})))()},redirectClient:function(){this.$router.push("/user")}})},p=u,m=(r("12d9"),r("2877")),v=Object(m["a"])(p,a,s,!1,null,"4a95811f",null);t["default"]=v.exports},b58f:function(e,t,r){}}]);