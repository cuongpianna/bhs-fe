(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-422dc7ab"],{"0536":function(e,t,a){"use strict";var r=a("84a7"),s=a.n(r);s.a},"2fe9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"content",staticClass:"page-container"},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[a("form",{on:{submit:function(t){return t.preventDefault(),r(e.handleSubmitJob)}}},[a("sticky",{attrs:{"z-index":10}},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"left"},[void 0===e.idSelect?a("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("createJobs","jobs")))]):a("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("editJobs","jobs")))])]),a("div",{staticClass:"right"},[void 0===e.idSelect?a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("createJobs","jobs")))]):a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","common")))]),a("button",{staticClass:"btn btn-danger",attrs:{type:"reset"},on:{click:e.redirectRD}},[e._v(e._s(e.generateTitleView("cancel","common")))])])])]),a("div",{staticClass:"page-content"},[a("div",{staticClass:"left"},[a("div",{staticClass:"top-left bhs-card"},[a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("titleJobs02","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("titleJobs02","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.title,expression:"formCreate.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.formCreate.title},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"title",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),null!=e.companyDetail.serviceRented&&e.companyDetail.serviceRented.service.statusService===e.serviceStatus?a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" Loại bài đăng ")]),a("ValidationProvider",{attrs:{rules:"required",name:"Loại bài đăng "},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("div",{staticClass:"radio-wrap"},[a("el-radio-group",{model:{value:e.formCreate.positionPost,callback:function(t){e.$set(e.formCreate,"positionPost",t)},expression:"formCreate.positionPost"}},[a("el-radio",{attrs:{label:0}},[e._v("Tin thường")]),a("el-radio",{attrs:{label:1}},[e._v("Tin tuyển gấp")]),a("el-radio",{attrs:{label:2}},[e._v("Tin hot")])],1)],1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1):e._e(),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("salary","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("salary","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{attrs:{clearable:"",placeholder:e.generateTitleView("selectSalary","jobs")},model:{value:e.formCreate.salary,callback:function(t){e.$set(e.formCreate,"salary",t)},expression:"formCreate.salary"}},e._l(e.allCategories.salary,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("gender","common"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("gender","common")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("div",{staticClass:"radio-wrap"},[a("el-radio-group",{model:{value:e.formCreate.gender,callback:function(t){e.$set(e.formCreate,"gender",t)},expression:"formCreate.gender"}},[a("el-radio",{attrs:{label:0}},[e._v(e._s(e.generateTitleView("notRequired02","common")))]),a("el-radio",{attrs:{label:1}},[e._v(e._s(e.generateTitleView("man","common")))]),a("el-radio",{attrs:{label:2}},[e._v(e._s(e.generateTitleView("woman","common")))])],1)],1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("jobDescription","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("jobDescription","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("Tinymce",{ref:"editor",attrs:{height:470},model:{value:e.formCreate.jobDescription,callback:function(t){e.$set(e.formCreate,"jobDescription",t)},expression:"formCreate.jobDescription"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("benefit","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("benefit","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("Tinymce",{ref:"editor",attrs:{height:470},model:{value:e.formCreate.benefit,callback:function(t){e.$set(e.formCreate,"benefit",t)},expression:"formCreate.benefit"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title"},[e._v(" "+e._s(e.generateTitleView("otherRequirements","jobs"))+" ")]),a("Tinymce",{ref:"editor",attrs:{height:470},model:{value:e.formCreate.otherRequirements,callback:function(t){e.$set(e.formCreate,"otherRequirements",t)},expression:"formCreate.otherRequirements"}})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title",staticStyle:{width:"100%"}},[e._v(" "+e._s(e.generateTitleView("language02","cvTemplate"))+" ")]),e._l(e.addLanguage,(function(t,r){return a("div",{key:r,staticClass:"language_parent fl-rows form-rows"},[a("div",{staticClass:"language-childleft"},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("languageInput","cvTemplate")},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("el-select",{attrs:{clearable:"",placeholder:e.generateTitleView("language","cvTemplate")},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}},e._l(e.allCategory.language,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"language-childright"},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("inputliteracy","cvTemplate")},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"item.level"}],staticClass:"form-control",attrs:{placeholder:e.generateTitleView("inputliteracy","cvTemplate")},domProps:{value:t.level},on:{input:function(a){a.target.composing||e.$set(t,"level",a.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1)])})),a("div",{staticClass:"remove-add"},[e.addLanguage.length<9?a("div",{staticClass:"add",on:{click:function(t){return e.addItem("language")}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:"#FF5C00","stroke-width":"1.4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M13.3337 10.0013H6.66699M10.0003 6.66797V13.3346V6.66797Z",stroke:"#FF5C00","stroke-width":"1.4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("span",{staticClass:"text-primary"},[e._v(e._s(e.generateTitleView("addlanguagetitle","jobs")))])]):e._e(),e.addLanguage.length>1?a("div",{staticClass:"remove",on:{click:function(t){return e.removeItem("language")}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#FF5C00","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M9 12H15",stroke:"#FF5C00","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("span",{staticClass:"text-primary"},[e._v(e._s(e.generateTitleView("removelanguagetitle","jobs")))])]):e._e()])],2),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title",staticStyle:{width:"100%"}},[e._v(" "+e._s(e.generateTitleView("addressJob","jobs"))+" ")]),e._l(e.addressWork,(function(t,r){return a("div",{key:r,staticClass:"language_parent fl-rows form-rows"},[a("div",{staticClass:"language-childleft"},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("selectAddressJob","jobs")},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("el-select",{attrs:{clearable:"",placeholder:e.generateTitleView("selectAddressJob","jobs")},model:{value:t.city,callback:function(a){e.$set(t,"city",a)},expression:"item.city"}},e._l(e.jobAddressOptions,(function(e){return a("el-option",{key:e.id,attrs:{label:e.Name,value:e.Name}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"language-childright"},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("addressRequire","jobs")},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"item.address"}],staticClass:"form-control",attrs:{placeholder:e.generateTitleView("addressJob","jobs")},domProps:{value:t.address},on:{input:function(a){a.target.composing||e.$set(t,"address",a.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1)])})),a("div",{staticClass:"remove-add"},[e.addressWork.length<5?a("div",{staticClass:"add",on:{click:function(t){return e.addItem("address")}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:"#FF5C00","stroke-width":"1.4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M13.3337 10.0013H6.66699M10.0003 6.66797V13.3346V6.66797Z",stroke:"#FF5C00","stroke-width":"1.4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("span",{staticClass:"text-primary"},[e._v(e._s(e.generateTitleView("addaddresstitle","jobs")))])]):e._e(),e.addressWork.length>1?a("div",{staticClass:"remove",on:{click:function(t){return e.removeItem("address")}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#FF5C00","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M9 12H15",stroke:"#FF5C00","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("span",{staticClass:"text-primary"},[e._v(e._s(e.generateTitleView("removeaddresstitle","jobs")))])]):e._e()])],2),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("expiredDate02","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("expiredDate02","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-date-picker",{attrs:{type:"date",format:"MM/dd/yyyy",placeholder:"Pick a day"},model:{value:e.formCreate.expiredDate,callback:function(t){e.$set(e.formCreate,"expiredDate",t)},expression:"formCreate.expiredDate"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("typeWork","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("typeWork","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{staticClass:"fullWidth",attrs:{clearable:"",placeholder:e.generateTitleView("typeWork","jobs")},model:{value:e.formCreate.rank,callback:function(t){e.$set(e.formCreate,"rank",t)},expression:"formCreate.rank"}},e._l(e.allCategories.rank,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("degree","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("degree","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{staticClass:"fullWidth",attrs:{clearable:"",placeholder:e.generateTitleView("degree","jobs")},model:{value:e.formCreate.literacy,callback:function(t){e.$set(e.formCreate,"literacy",t)},expression:"formCreate.literacy"}},e._l(e.allCategories.literacy,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("workForm","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("workForm","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{staticClass:"fullWidth",attrs:{clearable:"",placeholder:e.generateTitleView("workForm","jobs")},model:{value:e.formCreate.workForm,callback:function(t){e.$set(e.formCreate,"workForm",t)},expression:"formCreate.workForm"}},e._l(e.allCategories.workForm,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("mainJob02","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("mainJob02","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("div",{staticClass:"select-job"},[a("el-select",{attrs:{multiple:"","multiple-limit":3,placeholder:"Select"},model:{value:e.formCreate.categoryJob,callback:function(t){e.$set(e.formCreate,"categoryJob",t)},expression:"formCreate.categoryJob"}},e._l(e.jobOptions,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("exp02","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("exp02","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{staticClass:"fullWidth",attrs:{clearable:"",placeholder:e.generateTitleView("selectExp","jobs")},model:{value:e.formCreate.exp,callback:function(t){e.$set(e.formCreate,"exp",t)},expression:"formCreate.exp"}},e._l(e.allCategory.workExp,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)])]),a("div",{staticClass:"bottom-left bhs-card"},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("contactInformation","jobs")))]),e._l(e.addContact,(function(t,r){return a("div",{key:r,staticClass:"row-item"},["Số điện thoại liên hệ"!==t.label&&"Email liên hệ"!==t.label?a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(t.label)+" ")]),a("ValidationProvider",{attrs:{name:t.label,rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1):e._e(),"Số điện thoại liên hệ"===t.label?a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(t.label)+" ")]),a("ValidationProvider",{attrs:{name:t.label,rules:"required|Phone"},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1):e._e(),"Email liên hệ"===t.label?a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(t.label)+" ")]),a("ValidationProvider",{attrs:{rules:"required|Email",name:t.label},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(s[0]))])]}}],null,!0)})],1):e._e()])})),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"remove-add"},[!1===e.showAddContact?a("div",{staticClass:"add add-contact",on:{click:e.openBoxAdd}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:"#FF5C00","stroke-width":"1.4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M13.3337 10.0013H6.66699M10.0003 6.66797V13.3346V6.66797Z",stroke:"#FF5C00","stroke-width":"1.4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("span",[e._v("Thêm trường thông tin")])]):a("div",{staticClass:"wrap-add"},[a("div",{staticClass:"row-add"},[a("div",{staticClass:"fl-rows form-rows"},[a("div",{staticClass:"fl-col"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("fieldname","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("fieldname","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataContactAdd.label,expression:"dataContactAdd.label"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.dataContactAdd.label},on:{input:function(t){t.target.composing||e.$set(e.dataContactAdd,"label",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"fl-col"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("fieldvalue","jobs"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("fieldvalue","jobs")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataContactAdd.value,expression:"dataContactAdd.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.dataContactAdd.value},on:{input:function(t){t.target.composing||e.$set(e.dataContactAdd,"value",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"btn-add"},[a("div",{staticClass:"btn-accept",on:{click:function(t){return e.addItem("contact")}}},[e._v("Xác nhận")]),a("div",{staticClass:"cancel",on:{click:e.cancelAdd}},[e._v("Hủy bỏ")])])])]),e.addContact.length>3&&!1===e.showAddContact?a("div",{staticClass:"remove-item remove-contact",on:{click:function(t){return e.removeItem("contact")}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#FF5C00","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M9 12H15",stroke:"#FF5C00","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("span",[e._v("Xóa trường thông tin")])]):e._e()])])],2)]),a("div",{staticClass:"right bhs-card"})],1)]}}])})],1)},s=[],i=(a("c975"),a("a434"),a("b85c")),o=(a("96cf"),a("1da1")),l=a("5530"),n=a("79fa"),d=a("b35e"),c=a("b804"),u=a("bc3a"),v=a.n(u),m=a("2f62"),p=a("8256"),C=a("28ca"),f={name:"CreateJob",components:{Tinymce:p["a"],Sticky:c["a"]},mixins:[d["a"]],data:function(){return{listQuery:{page:1,limit:10},serviceStatus:C["b"].Recruit,formCreate:{title:"",salary:"",fromCommission:0,toCommission:0,gender:0,jobDescription:"",benefit:"",otherRequirements:"",positionPost:0,profile:"",expiredDate:"",isActive:!0,nameContact:"",phoneContact:[],emailContact:"",rank:"",literacy:"",categoryJob:[],jobSecondary:"",jobAddress:"",workForm:"",languageLevel:"",exp:"",degree:"",age:"",slug:"",language:"",infoContact:[],jobCity:[],status:C["g"].Pending},dataContactAdd:{label:"",value:""},addLanguage:[{name:"",level:""}],addressWork:[{address:"",city:""}],activeLoading:!1,idSelect:this.$route.params.id,inputVisible:!1,inputValue:"",jobAddressOptions:[],jobOptions:[],phone:"",addressContact:"",showAddContact:!1,addContact:[{label:"Người liên hệ",value:""},{label:"Số điện thoại liên hệ",value:""},{label:"Email liên hệ",value:""}]}},computed:Object(l["a"])({},Object(m["c"])({allCategories:"allCategories",jobCategories:"jobCategory/allJobCategories",idUserRecruiter:"account/idUserRecruiter",allServices:"services/allServices",allCategory:"settingSystem/allCategory",userId:"userId",companyDetail:"account/infoCompany"})),mounted:function(){this.getAll(),""!==this.idUserRecruiter?this.getData():this.$router.push("/recruiter")},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])({actGetAllCategories:"category/getAllCategories",actGetCategory:"setting/getCategory",actGetAllJobCategory:"jobCategory/getAll",actCreateJob:"job/create",actGetDetailJob:"job/getDetail",actEditJob:"job/edit",actGetAllServices:"services/getAll",actGetAllCategory:"settingSystem/getAllCategory"})),{},{getAll:function(){this.actGetAllCategories()},handleSubmitJob:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,s,o,l,n,d,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=[],r=Object(i["a"])(e.addressWork);try{for(r.s();!(s=r.n()).done;)o=s.value,a.push({address:o.address,city:o.city})}catch(v){r.e(v)}finally{r.f()}for(e.formCreate.expiredDate=new Date(e.formCreate.expiredDate),e.formCreate.CreatedBy=e.userId,e.formCreate.jobAddress=JSON.stringify(a),e.formCreate.userId=e.userId,e.formCreate.companyId=e.idUserRecruiter,e.formCreate.language=JSON.stringify(e.addLanguage),e.formCreate.infoContact=JSON.stringify(e.addContact),l=0,n=a;l<n.length;l++)d=n[l],-1===e.formCreate.jobCity.indexOf(d.city)&&e.formCreate.jobCity.push(d.city);if(void 0!==e.idSelect){t.next=18;break}return t.next=14,e.actCreateJob(e.formCreate);case 14:c=t.sent,e.handleShowNotification(c),t.next=22;break;case 18:return t.next=20,e.actEditJob(e.formCreate);case 20:u=t.sent,e.handleShowNotification(u);case 22:e.redirectRD();case 23:case"end":return t.stop()}}),t)})))()},openBoxAdd:function(){this.showAddContact=!0,this.dataContactAdd.label="",this.dataContactAdd.value=""},redirectRD:function(){this.$router.push("/recruiter/detail/"+this.idUserRecruiter)},addItem:function(e){"address"===e?this.addressWork.length<3&&this.addressWork.push({address:"",city:""}):"language"===e?this.addLanguage.length<9&&this.addLanguage.push({name:"",level:""}):"contact"===e&&this.addContact.length<5&&""!==this.dataContactAdd.value&&""!==this.dataContactAdd.label&&(this.addContact.push({value:this.dataContactAdd.value,label:this.dataContactAdd.label}),this.showAddContact=!1)},removeItem:function(e){"address"===e?this.addressWork.pop():"language"===e?this.addLanguage.pop():"contact"===e&&this.addContact.pop()},getData:function(){var e=this;this.showLoading(),this.getDataCity(),this.actGetAllCategory(),this.actGetAllJobCategory().then((function(t){e.jobOptions=t.payload.records})).catch((function(e){return console.log(e)})),void 0!==this.idSelect&&this.actGetDetailJob(this.idSelect).then((function(t){t&&t.isSuccess&&(e.formCreate=t.payload.records,e.addLanguage=JSON.parse(e.formCreate.language),e.addContact=JSON.parse(e.formCreate.infoContact),e.addressWork=JSON.parse(e.formCreate.jobAddress),console.log(e.formCreate))})),this.closeLoading()},getDataCity:function(){var e=this;v.a.get(this.apiCity).then((function(t){return e.jobAddressOptions=t.data})).catch((function(e){return console.log(e)}))},handleClose:function(e){this.formCreate.phoneContact.splice(this.formCreate.phoneContact.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue,t=this.formCreate.phoneContact,a=/(03|09|[2|6|8|9])([0-9]{8})\b/;t.length<=10&&-1===t.indexOf(e)&&a.test(e)&&(e&&this.formCreate.phoneContact.push(e),this.inputVisible=!1,this.inputValue="")},cancelAdd:function(){this.showAddContact=!1,this.dataContactAdd.label="",this.dataContactAdd.value=""},showLoading:function(){this.componentLoading=this.$vs.loading({type:"scale",target:this.$refs.content})},closeLoading:function(){this.componentLoading.close()},generateTitleView:n["a"]})},g=f,h=(a("0536"),a("2877")),w=Object(h["a"])(g,r,s,!1,null,"ba045a7a",null);t["default"]=w.exports},"84a7":function(e,t,a){}}]);