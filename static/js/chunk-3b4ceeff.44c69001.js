(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b4ceeff"],{"164c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.handleSubmitRecruiter)}}},[r("sticky",{attrs:{"z-index":10}},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"left"},[e.ReCruiterId?r("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("editRecruiter","recruiter")))]):r("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("createRecruiter","recruiter")))])]),r("div",{staticClass:"right"},[r("vs-checkbox",{model:{value:e.formCreate.isActive,callback:function(t){e.$set(e.formCreate,"isActive",t)},expression:"formCreate.isActive"}},[e._v(e._s(e.generateTitleView("public","course")))]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","recruiter")))]),r("button",{staticClass:"btn btn-danger",attrs:{type:"reset"},on:{click:e.redirectRecruiter}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)])]),r("div",{staticClass:"page-content"},[r("div",{staticClass:"inner_content "},[r("div",{staticClass:" bhs-card inner_content--top"},[r("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("recruiterInfo","recruiter")))]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("companyName","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("companyName","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.name,expression:"formCreate.companyProfile.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterCompanyName","recruiter")},domProps:{value:e.formCreate.companyProfile.name},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"name",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap "},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("companyDesc","recruiter"))+" ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.description,expression:"formCreate.companyProfile.description"}],staticClass:"form-control",attrs:{col:"8",placeholder:e.generateTitleView("enterCompanyDesc","recruiter")},domProps:{value:e.formCreate.companyProfile.description},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"description",t.target.value)}}})]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title "},[e._v(e._s(e.generateTitleView("detailCompany","recruiter"))+" ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.detail,expression:"formCreate.companyProfile.detail"}],staticClass:"form-control",attrs:{col:"8",placeholder:e.generateTitleView("enterDetail","recruiter")},domProps:{value:e.formCreate.companyProfile.detail},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"detail",t.target.value)}}})]),r("div",{staticClass:"row-wrap__2"},[r("div",{staticClass:"listCategory row-left"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("jobCategory","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:{required:!0},name:e.generateTitleView("jobCategory","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("el-select",{staticClass:"fullWidth",attrs:{multiple:"",filterable:"","multiple-limit":3,placeholder:e.generateTitleView("selectJobCategory","recruiter")},model:{value:e.idCareer,callback:function(t){e.idCareer=t},expression:"idCareer"}},e._l(e.jobCategories,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"employeeNumber row-right"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("employeeNumber","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("employeeNumber","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("el-select",{staticClass:"fullWidth",attrs:{placeholder:e.generateTitleView("selectEmployeeNumber","recruiter")},model:{value:e.employeeNumber,callback:function(t){e.employeeNumber=t},expression:"employeeNumber"}},e._l(e.allCategory.companySize,(function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.id}})})),1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"row-wrap__2"},[r("div",{staticClass:"row-left"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("phone","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:{required:!0,regex:"(09|03|01[2|6|3|8|9])([0-9]{8})\\b"},name:e.generateTitleView("phone","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.phoneNumber,expression:"formCreate.companyProfile.phoneNumber"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterPhone","recruiter")},domProps:{value:e.formCreate.companyProfile.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"phoneNumber",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-right"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("emailCompany","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required|email",name:e.generateTitleView("emailCompany","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.email,expression:"formCreate.companyProfile.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterEmail","recruiter")},domProps:{value:e.formCreate.companyProfile.email},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"email",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"row-wrap__2"},[r("div",{staticClass:"row-left"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("address","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("address","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.address,expression:"formCreate.companyProfile.address"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterAddress","recruiter")},domProps:{value:e.formCreate.companyProfile.address},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"address",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-right"},[r("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("website","recruiter"))+" ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.website,expression:"formCreate.companyProfile.website"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterWebsite","recruiter")},domProps:{value:e.formCreate.companyProfile.website},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"website",t.target.value)}}})])])]),r("div",{staticClass:"bhs-card inner_content--bottom"},[r("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("contactInformation","recruiter")))]),r("div",{staticClass:"row-wrap__2"},[r("div",{staticClass:"row-left"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("contactName","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:{required:!0},name:e.generateTitleView("contactName","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.contactName,expression:"formCreate.companyProfile.contactName"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterContactName","recruiter")},domProps:{value:e.formCreate.companyProfile.contactName},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"contactName",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-right"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("contactEmail","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required|email",name:e.generateTitleView("contactEmail","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.contactEmail,expression:"formCreate.companyProfile.contactEmail"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterContactEmail","recruiter")},domProps:{value:e.formCreate.companyProfile.contactEmail},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"contactEmail",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"row-wrap__2"},[r("div",{staticClass:"row-left"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("contactPhone","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:{required:!0,regex:"(09|03|01[2|6|3|8|9])([0-9]{8})\\b"},name:e.generateTitleView("contactPhone","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.contactPhone,expression:"formCreate.companyProfile.contactPhone"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterContactPhone","recruiter")},domProps:{value:e.formCreate.companyProfile.contactPhone},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"contactPhone",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-right"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("contactPosition","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("contactPosition","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.companyProfile.contactPosition,expression:"formCreate.companyProfile.contactPosition"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterContactPosition","recruiter")},domProps:{value:e.formCreate.companyProfile.contactPosition},on:{input:function(t){t.target.composing||e.$set(e.formCreate.companyProfile,"contactPosition",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)])])]),e.ReCruiterId?e._e():r("div",{staticClass:"inner_info bhs-card"},[r("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("accountInfo","recruiter")))]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("email","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required|email",name:e.generateTitleView("email","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.userName,expression:"formCreate.userName"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("enterEmail","recruiter")},domProps:{value:e.formCreate.userName},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"userName",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),e.ReCruiterId?e._e():r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("password","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"verify_password",name:"Mật khẩu",placeholder:e.generateTitleView("password","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"password-wrap"},[r("span",{staticClass:"svg-container"}),r("el-input",{ref:"password",attrs:{type:e.passwordType1,placeholder:e.generateTitleView("enterPassword","recruiter")},model:{value:e.formCreate.password,callback:function(t){e.$set(e.formCreate,"password",t)},expression:"formCreate.password"}}),r("i",{staticClass:"bx bx-show-alt",on:{click:e.showPassword}})],1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),e.ReCruiterId?e._e():r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("rePassword","recruiter"))+" ")]),r("ValidationProvider",{attrs:{rules:"required|password:@Mật khẩu",name:e.generateTitleView("rePassword","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("div",{staticClass:"password-wrap"},[r("span",{staticClass:"svg-container"}),r("el-input",{attrs:{type:e.passwordType2,placeholder:e.generateTitleView("enterRePassword","recruiter")},model:{value:e.rePassword,callback:function(t){e.rePassword=t},expression:"rePassword"}}),r("i",{staticClass:"bx bx-show-alt",on:{click:e.showRePassword}})],1),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)])])],1)]}}])})],1)},i=[],s=r("1da1"),o=r("5530"),n=(r("96cf"),r("b35e")),l=r("2f62"),c=(r("a896"),r("b804")),u=r("28ca"),d={name:"RecruitmentCreate",components:{Sticky:c["a"]},mixins:[n["a"]],data:function(){return{ReCruiterId:this.$route.params.id,rePassword:"",passwordType1:"",passwordType2:"",employeeNumber:"",idCareer:[],formCreate:{companyProfile:{name:"",phoneNumber:"",description:"",email:"",detail:"",address:"",website:"",taxCode:"",isActive:!0,contactName:"",contactPhone:"",contactEmail:"",contactPosition:""},companyId:this.$route.params.id,userName:"",password:"",thumbnail:"",isActive:!0,userType:2},employeeNumberList:u["g"]}},computed:Object(o["a"])({},Object(l["c"])({jobCategories:"account/jobCategories",allCategory:"settingSystem/allCategory"})),mounted:function(){var e=this;this.getAllJobCategories(),this.actGetAllCategory(),this.ReCruiterId&&this.actGetRecruiter(this.ReCruiterId).then((function(t){e.formCreate.companyProfile=t.data.payload}))},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])({getAllJobCategories:"account/getAllJobCategories",actCreateRecruiter:"account/createRecruiter",actUpdateRecruiter:"account/updateRecruiter",actGetUserInfo:"account/getUserInfo",actCreateCompany:"company/createCompany",actGetRecruiter:"account/getRecruitmentInfo",actGetAllCategory:"settingSystem/getAllCategory"})),{},{showPassword:function(){"password"===this.passwordType1?this.passwordType1="text":this.passwordType1="password"},showRePassword:function(){"password"===this.passwordType2?this.passwordType2="text":this.passwordType2="password"},handleSubmitRecruiter:function(){this.ReCruiterId?this.updateRecruiter():this.createRecruiter()},createRecruiter:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actCreateRecruiter({user:e.formCreate,idCareer:e.idCareer,idCompanySize:e.employeeNumber});case 2:return r=t.sent,t.next=5,e.handleShowNotification(r.data);case 5:r.data.isSuccess&&e.redirectRecruiter();case 6:case"end":return t.stop()}}),t)})))()},updateRecruiter:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actUpdateRecruiter({user:e.formCreate});case 2:return r=t.sent,t.next=5,e.handleShowNotification(r.data);case 5:e.redirectRecruiter();case 6:case"end":return t.stop()}}),t)})))()},redirectRecruiter:function(){this.$router.push("/recruiter")}})},m=d,p=(r("7e72"),r("2877")),f=Object(p["a"])(m,a,i,!1,null,"26ae1f12",null);t["default"]=f.exports},"1e87":function(e,t,r){},"7e72":function(e,t,r){"use strict";r("1e87")}}]);