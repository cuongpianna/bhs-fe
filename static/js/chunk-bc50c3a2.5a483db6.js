(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc50c3a2"],{"1dae":function(t,e,i){"use strict";var s=i("9ff2"),n=i.n(s);n.a},6431:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listJobs","jobs")))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"search-type"},[i("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:t.generateTitleView("searchByTitle","common")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getJobs(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}})],1),i("button",{staticClass:"btn btn-primary",on:{click:t.redirectCreateJob}},[t._v(t._s(t.generateTitleView("createJobs","jobs")))])])]),i("div",{staticClass:"body"},[0===t.totalJobs?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[i("div",{staticClass:"title-list "},[t._v(" "+t._s(t.generateTitleView("title","common")))])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("status","common")))])]),i("vs-th",{staticStyle:{width:"400px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("positionPost","jobs")))])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("expiredDate","jobs")))])]),i("vs-th",{staticStyle:{width:"360px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listJobs,(function(e,s){return i("vs-tr",{key:s,attrs:{data:e}},[i("vs-td",[i("p",{staticClass:"title-item"},[t._v(t._s(t.truncate(e.title,15)))]),i("p",{staticClass:"salary-item"},[t._v(t._s(t.generateTitleView("salary","jobs"))+" : "),i("span",{staticClass:"salary"}),t._v(" "+t._s(e.salaryCategory.name)+" ")]),i("p",{staticClass:"create-date-item"},[t._v(t._s(t.generateTitleView("createdDate","common"))+" : "),i("span",{staticClass:"date-public-item"},[t._v(t._s(t._f("dayMonthYear")(e.created)))])])]),i("vs-td",{attrs:{align:"center"}},[i("span",[t._v(t._s(t.checkStatus(e)))])]),i("vs-td",{attrs:{align:"center"}},[null!=t.companyDetail.serviceRented&&t.companyDetail.serviceRented.service.statusService===t.serviceStatus?i("span",{staticClass:"name-service"},[t._v(t._s(t.checkStatusService(e.positionPost)))]):i("span",{staticClass:"name-service"},[t._v("Chưa mua gói đăng tuyển")])]),i("vs-td",{attrs:{align:"center"}},[i("span",{staticClass:"date-expired-item"},[t._v(t._s(t._f("dayMonthYear")(e.expiredDate)))])]),i("vs-td",{attrs:{align:"right"}},[i("el-dropdown",{staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"el-dropdown-link"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[0===e.status?i("el-dropdown-item",[i("div",{on:{click:function(i){return t.openDialogACensorship(e)}}},[t._v(t._s(t.generateTitleView("censorship","common")))])]):i("el-dropdown-item",[i("div",{on:{click:function(i){return t.openDialogACensorship(e)}}},[t._v(t._s(t.generateTitleView("Checkcensorship","common")))])]),i("el-dropdown-item",[i("div",{on:{click:function(i){return t.selectEditJob(e.id)}}},[t._v(t._s(t.generateTitleView("edit","common")))])]),i("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[i("div",{on:{click:function(i){return t.openDialogDelete(e)}}},[t._v(t._s(t.generateTitleView("delete","common")))])])],1)],1)],1)],1)}))},proxy:!0}])}),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),i("p",{staticClass:"not-margin textdialog"},[t._v(" "+t._s(t.generateTitleView("CensorshipDialog","jobs"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.Censorship()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogCensorship=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogCensorship,callback:function(e){t.DialogCensorship=e},expression:"DialogCensorship"}}),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),i("p",{staticClass:"not-margin textdialog"},[t._v(" "+t._s(t.generateTitleView("DeleteDialog","jobs"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}}),t.totalJobs>0?i("BHSPagination",{attrs:{background:"",total:t.totalJobs,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getJobs}}):t._e()],1)])},n=[],a=(i("96cf"),i("1da1")),o=i("5530"),r=i("2f62"),c=i("79fa"),l=i("b42a"),u=i("6c9c"),d=i("b35e"),p=i("28ca"),m=i("c1df"),g={name:"ListJobs",components:{BHSPagination:l["a"]},mixins:[d["a"]],data:function(){return{listQuery:{userType:1,page:1,limit:10,title:"",expiredDate:null},serviceStatus:p["d"].Recruit,searchJobsText:"",searchJobsType:0,searchQuery:"",DialogCensorship:!1,DialogDelete:!1,itemSelect:{},listSalary:p["h"]}},computed:Object(o["a"])({},Object(r["c"])({listJobs:"job/listJobs",totalJobs:"job/totalJobs",companyDetail:"account/infoCompany"})),mounted:function(){this.getJobs()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])({actGetJobs:"job/getPagination",actRemoveJob:"job/delete",actCensorship:"job/Censorship"})),{},{getJobs:function(){this.actGetJobs({current_page:this.listQuery.page,limit:this.listQuery.limit,title:this.listQuery.title,CompanyId:this.$route.params.id})},checkStatus:function(t){var e="";return t.status===p["i"].Pending?e="Chờ duyệt":t.status===p["i"].Pause?e="Tạm dừng":t.status===p["i"].Publish&&(e=this.calculateDate(t.expiredDate)?"Đang hoạt động":"Hết hạn"),e},checkStatusService:function(t){var e="";return e=t===p["c"].RecruitmentHot?"Tin Hot":t===p["c"].RecruitmentUrgent?"Tin Tuyển Gấp":"Tin thường",e},calculateDate:function(t){var e=new Date(Date.now()).getTime(),i=new Date(m(t)).getTime();if(i>e)return!0},redirectCreateJob:function(){this.hasPermissionAction(u["a"].CREATE_JOB,"recruiter/create-job/",this.generateTitleView("noRole","common"))},selectEditJob:function(t){this.hasPermissionAction(u["a"].EDIT_JOB,"recruiter/edit-job/"+t,this.generateTitleView("noRole","common"))},openDialogACensorship:function(t){t.status===p["i"].Pending&&this.hasPermissionAction(u["a"].EDIT_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogCensorship=!0,this.itemSelect=t)},openDialogDelete:function(t){this.hasPermissionAction(u["a"].DELETE_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogDelete=!0,this.itemSelect=t)},getEmployeeText:function(t){},Censorship:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actCensorship(t.itemSelect.id);case 2:return i=e.sent,t.handleShowNotification(i),t.DialogCensorship=!1,console.log(t.DialogCensorship),e.next=8,t.getJobs();case 8:case"end":return e.stop()}}),e)})))()},removeItem:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRemoveJob(t.itemSelect.id);case 2:return i=e.sent,t.handleShowNotification(i),t.DialogDelete=!1,e.next=7,t.getJobs();case 7:case"end":return e.stop()}}),e)})))()},generateTitleView:c["a"]})},h=g,v=(i("1dae"),i("2877")),f=Object(v["a"])(h,s,n,!1,null,"1cfe20f5",null);e["a"]=f.exports},"9ff2":function(t,e,i){}}]);