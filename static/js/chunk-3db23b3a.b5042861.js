(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3db23b3a"],{"0737":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listJobs","jobs")))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"search-type"},[i("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:"Tìm kiếm theo tên"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getJobs(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}})],1),i("button",{staticClass:"btn btn-primary",on:{click:t.redirectCreateJob}},[t._v(t._s(t.generateTitleView("createJobs","jobs"))+" ")])])]),i("div",{staticClass:"body"},[0===t.totalJobs?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[i("div",{staticClass:"title-list "},[t._v(" "+t._s(t.generateTitleView("title","common")))])]),i("vs-th",{staticStyle:{width:"400px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("companyName","common")))])]),i("vs-th",{staticStyle:{width:"150px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("status","common")))])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("expiredDate","jobs")))])]),i("vs-th",{staticStyle:{width:"180px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listJobs,(function(e,s){return i("vs-tr",{key:s,attrs:{data:e}},[i("vs-td",[i("p",{staticClass:"title-item"},[t._v(t._s(t.truncate(e.title,15)))]),i("p",{staticClass:"salary-item"},[t._v(t._s(t.generateTitleView("salary","jobs"))+" : "),i("span",{staticClass:"salary"}),t._v(" "+t._s(e.salaryCategory.name)+" ")]),i("p",{staticClass:"create-date-item"},[t._v(t._s(t.generateTitleView("createdDate","common"))+" : "),i("span",{staticClass:"date-public-item"},[t._v(t._s(t._f("dayMonthYear")(e.created)))])])]),i("vs-td",{attrs:{align:"left"}},[i("p",{staticClass:"title-item"},[t._v(t._s(e.companyInfo.name))])]),i("vs-td",{attrs:{align:"left"}},[i("span",[t._v(t._s(t.checkStatus(e)))])]),i("vs-td",{attrs:{align:"left"}},[i("span",{staticClass:"date-expired-item"},[t._v(t._s(t._f("dayMonthYear")(e.expiredDate)))])]),i("vs-td",{attrs:{align:"center"}},[i("el-dropdown",{staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"el-dropdown-link"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("div",{on:{click:function(i){return t.clickDetailJob(e)}}},[t._v("Xem chi tiết")])]),0===e.status?i("el-dropdown-item",[i("div",{on:{click:function(i){return t.openDialogACensorship(e)}}},[t._v(t._s(t.generateTitleView("censorship","common")))])]):i("el-dropdown-item",[i("div",{on:{click:function(i){return t.openDialogACensorship(e)}}},[t._v(t._s(t.generateTitleView("Checkcensorship","common")))])]),i("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[i("div",{on:{click:function(i){return t.openDialogDelete(e)}}},[t._v(t._s(t.generateTitleView("delete","common")))])])],1)],1)],1)],1)}))},proxy:!0}])}),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),i("p",{staticClass:"not-margin textdialog"},[t._v(" "+t._s(t.generateTitleView("DieniedDialog","jobs"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.Denied()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDenied=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDenied,callback:function(e){t.DialogDenied=e},expression:"DialogDenied"}}),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),i("p",{staticClass:"not-margin textdialog"},[t._v(" "+t._s(t.generateTitleView("DeleteDialog","jobs"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}}),t.totalJobs>0?i("BHSPagination",{attrs:{background:"",total:t.totalJobs,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getJobs}}):t._e()],1)])},a=[],n=i("1da1"),o=i("5530"),r=(i("96cf"),i("2f62")),l=i("79fa"),c=i("b42a"),u=i("6c9c"),d=i("b35e"),m=i("28ca"),p=i("c1df"),g={name:"ListJobs",components:{BHSPagination:c["a"]},mixins:[d["a"]],data:function(){return{listQuery:{userType:1,page:1,limit:10,title:"",expiredDate:null,status:1},serviceStatus:m["e"].Recruit,searchJobsText:"",searchJobsType:0,searchQuery:"",DialogDenied:!1,DialogDelete:!1,itemSelect:{},listSalary:m["i"]}},computed:Object(o["a"])({},Object(r["c"])({listJobs:"job/listJobs",totalJobs:"job/totalJobs",companyDetail:"account/infoCompany"})),mounted:function(){this.getJobs()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])({actGetJobs:"job/getPagingjob",actRemoveJob:"job/delete",actDenied:"job/Denied"})),{},{getJobs:function(){this.actGetJobs({current_page:this.listQuery.page,limit:this.listQuery.limit,title:this.listQuery.title,CompanyId:this.$route.params.id,Status:this.listQuery.status})},openDialogACensorship:function(t){t.status===m["j"].Pending&&this.hasPermissionAction(u["a"].EDIT_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogCensorship=!0,this.itemSelect=t)},clickDetailJob:function(t){this.$router.push("detailJob/"+t.id)},checkStatus:function(t){var e="";return t.status===m["j"].Pending?e="Chờ duyệt":t.status===m["j"].Pause?e="Tạm dừng":t.status===m["j"].Publish&&(e=this.calculateDate(t.expiredDate)?"Đang hoạt động":"Hết hạn"),e},checkStatusService:function(t){var e="";return e=t===m["d"].RecruitmentHot?"Tin Hot":t===m["d"].RecruitmentUrgent?"Tin Tuyển Gấp":"Tin thường",e},calculateDate:function(t){var e=new Date(Date.now()).getTime(),i=new Date(p(t)).getTime();if(i>e)return!0},redirectCreateJob:function(){this.$router.push("/recruiter/create-job/")},openDialogADenied:function(t){t.status===m["j"].Publish&&this.hasPermissionAction(u["a"].EDIT_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogDenied=!0,this.itemSelect=t)},openDialogDelete:function(t){this.hasPermissionAction(u["a"].DELETE_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogDelete=!0,this.itemSelect=t)},getEmployeeText:function(t){},Denied:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actDenied(t.itemSelect.id);case 2:return i=e.sent,t.handleShowNotification(i),t.DialogDenied=!1,e.next=7,t.getJobs();case 7:case"end":return e.stop()}}),e)})))()},removeItem:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRemoveJob(t.itemSelect.id);case 2:return i=e.sent,t.handleShowNotification(i),t.DialogDelete=!1,e.next=7,t.getJobs();case 7:case"end":return e.stop()}}),e)})))()},generateTitleView:l["a"]})},h=g,v=(i("210c"),i("2877")),b=Object(v["a"])(h,s,a,!1,null,"6b0be6a1",null);e["default"]=b.exports},"210c":function(t,e,i){"use strict";i("773a")},"773a":function(t,e,i){}}]);