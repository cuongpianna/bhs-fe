(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc1781d2"],{4159:function(e,t,a){},"59a1":function(e,t,a){"use strict";var i=a("4159"),n=a.n(i);n.a},b5f2:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"info-recruiter bhs-card"},[a("div",{staticClass:"title-user"},[e._v(e._s(e.generateTitleView("detailRecruitment","recruitment")))]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-user"},[e._v(e._s(e.generateTitleView("nameCompany","recruitment"))+" : "+e._s(e.userInfo.RecruitementInfo.name)),a("span",{staticClass:"name-company"})])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-user"},[null!=e.userInfo.RecruitementInfo.companySize?a("span",[e._v(" "+e._s(e.generateTitleView("sizePersonnel","recruitment"))+" : "+e._s(e.userInfo.RecruitementInfo.companySize.name))]):a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-user"},[e._v(" "+e._s(e.generateTitleView("fieldsOfOperation","recruitment"))+" : "),0===e.totalJobsCategory?a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))]):e._l(e.userInfo.RecruitementInfo.jobCategorys,(function(t,i){return a("span",{key:t.id,staticClass:"cate"},[i?a("span",[e._v(",")]):e._e(),e._v(" "+e._s(t.name)+" ")])}))],2)]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:"detail-user"},[e._v(" "+e._s(e.generateTitleView("addressCompany","recruitment"))+" : "+e._s(e.userInfo.RecruitementInfo.address)+" ")])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-wrap detail-user"},[e._v(" "+e._s(e.generateTitleView("phone","recruitment"))+" : "),""==e.userInfo.RecruitementInfo.phoneNumber?a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))]):a("span",[e._v(e._s(e.userInfo.RecruitementInfo.phoneNumber))])]),a("div",{staticClass:" detail-wrap detail-user"},[e._v(" Website : "),""==e.userInfo.RecruitementInfo.website?a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))]):a("span",[e._v(e._s(e.userInfo.RecruitementInfo.website))])])])]),a("div",{staticClass:"list-job bhs-card"},[a("list-jobs",{attrs:{inforCompany:e.userInfo.RecruitementInfo}})],1)]),a("vs-dialog",{staticClass:"dialogPackage dialog",attrs:{width:"500px",center:"","prevent-close":""},scopedSlots:e._u([{key:"header",fn:function(){return[a("h4",{staticClass:"not-margin",staticStyle:{"font-size":"16px"}},[e._v(" "+e._s(e.generateTitleView("companyInfo","recruiter"))+" ")])]},proxy:!0}]),model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.handleSubmit,n=t.reset;return[a("form",{on:{submit:function(t){return t.preventDefault(),i(e.handleSubmitCompany)},reset:function(e){return e.preventDefault(),n(e)}}},[a("div",{staticClass:"form-row  form-inline"},[a("div",[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("companyName","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("vs-input",{staticClass:"full-width",attrs:{placeholder:e.generateTitleView("enterCompanyName","recruiter")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:e.companyProfile.name,callback:function(t){e.$set(e.companyProfile,"name",t)},expression:"companyProfile.name"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(i[0]))])]}}],null,!0)})],1),a("div",[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("phone","recruiter")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("vs-input",{staticClass:"full-width",attrs:{placeholder:e.generateTitleView("enterPhone","recruiter")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxs-phone"})]},proxy:!0}],null,!0),model:{value:e.companyProfile.phoneNumber,callback:function(t){e.$set(e.companyProfile,"phoneNumber",t)},expression:"companyProfile.phoneNumber"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"form-row form-inline"},[a("div",{staticClass:"div"},[a("vs-select",{staticClass:"full-width",attrs:{color:"primary",placeholder:e.generateTitleView("selectEmployeeNumber","recruiter")},model:{value:e.companyProfile.employeeNumber,callback:function(t){e.$set(e.companyProfile,"employeeNumber",t)},expression:"companyProfile.employeeNumber"}},e._l(e.employeeNumberList,(function(t){return a("vs-option",{key:t.key,attrs:{label:t.value,value:t.key}},[e._v(" "+e._s(t.value)+" ")])})),1)],1)]),a("div",{staticClass:"form-row"},[a("el-select",{staticClass:"full-width",attrs:{placeholder:e.generateTitleView("selectJobCategory","recruiter"),filterable:"",multiple:"","popper-class":"select-popper","popper-append-to-body":!1},model:{value:e.companyProfile.jobCategorys,callback:function(t){e.$set(e.companyProfile,"jobCategorys",t)},expression:"companyProfile.jobCategorys"}},e._l(e.jobCategories,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[e._v(e._s(t.name))])})),1)],1),a("div",{staticClass:"form-row"},[a("vs-input",{staticClass:"full-width",attrs:{placeholder:e.generateTitleView("enterAdress","recruiter")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxs-edit-location"})]},proxy:!0}],null,!0),model:{value:e.companyProfile.address,callback:function(t){e.$set(e.companyProfile,"address",t)},expression:"companyProfile.address"}})],1),a("div",{staticClass:"form-row"},[a("vs-input",{staticClass:"full-width",attrs:{placeholder:e.generateTitleView("enterWebsite","recruiter")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bxl-edge"})]},proxy:!0}],null,!0),model:{value:e.companyProfile.website,callback:function(t){e.$set(e.companyProfile,"website",t)},expression:"companyProfile.website"}})],1),a("div",{staticClass:"con-footer"},[a("vs-button",{attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),a("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(t){e.dialogEdit=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)])]}}])})],1)],1)},n=[],r=(a("4de4"),a("96cf"),a("1da1")),s=a("5530"),o=a("b35e"),l=a("79fa"),c=a("2f62"),u=a("6431"),m=a("e212"),p=a("28ca"),d=a("6c9c"),f={name:"RecruitmentDetail",components:{LineCharts:m["a"],ListJobs:u["a"]},mixins:[o["a"]],data:function(){return{dataChart:[5,20,36,10,10,20],employeeNumberList:p["f"],dialogEdit:!1,userInfo:{RecruitementInfo:{}},companyProfile:{name:"",address:"",phoneNumber:"",website:"",employeeNumber:"",jobCategorys:[]},totalJobsCategory:0}},computed:Object(s["a"])({},Object(c["c"])({jobCategories:"account/jobCategories"})),mounted:function(){this.getAllJobCategories(),this.getRecruitmentInfo()},methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["d"])({mutGetIdRecruiter:"account/setIdUserRecruiter"})),Object(c["b"])({actGetUserInfo:"account/getUserInfo",getAllJobCategories:"account/getAllJobCategories",actEditCompany:"company/editCompany",actGetJobCategory:"jobCategory/getDetail",actEditRecruitment:"account/updateRecruiter",actGetRecruiter:"account/getRecruitmentInfo"})),{},{generateTitleView:l["a"],getEmployeeText:function(e){return e?this.employeeNumberList.filter((function(t){return t.key===e}))[0].value:""},handleSubmitCompany:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userInfo.companyProfile=JSON.parse(JSON.stringify(e.companyProfile)),a=JSON.parse(JSON.stringify(e.userInfo)),t.next=4,e.actEditRecruitment({user:a});case 4:return i=t.sent,t.next=7,e.handleShowNotification(i.data);case 7:e.dialogEdit=!1,e.getRecruitmentInfo();case 9:case"end":return t.stop()}}),t)})))()},openDialogEdit:function(){this.hasPermissionAction(d["a"].EDIT_COMPANY,"",this.generateTitleView("noRole","common"))&&(this.dialogEdit=!0,this.companyProfile=JSON.parse(JSON.stringify(this.userInfo.companyProfile)))},getRecruitmentInfo:function(){var e=this;this.actGetRecruiter(this.$route.params.id).then((function(t){e.userInfo.RecruitementInfo=t.data.payload,e.totalJobsCategory=e.userInfo.RecruitementInfo.jobCategorys.length})),this.mutGetIdRecruiter(this.$route.params.id)}})},v=f,y=(a("59a1"),a("2877")),b=Object(y["a"])(v,i,n,!1,null,"5d152e9c",null);t["default"]=b.exports}}]);