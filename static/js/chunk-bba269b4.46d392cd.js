(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bba269b4"],{"25eb":function(t,e,s){var i=s("23e7"),n=s("c20d");i({target:"Number",stat:!0,forced:Number.parseInt!=n},{parseInt:n})},7158:function(t,e,s){"use strict";s("f2f8")},c20d:function(t,e,s){var i=s("da84"),n=s("58a8").trim,a=s("5899"),o=i.parseInt,r=/^[+-]?0[Xx]/,c=8!==o(a+"08")||22!==o(a+"0x16");t.exports=c?function(t,e){var s=n(String(t));return o(s,e>>>0||(r.test(s)?16:10))}:o},f2f8:function(t,e,s){},fd8a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("courseTestList","courseTest")))])]),s("div",{staticClass:"right"},[s("div",{staticClass:"search-type"},[s("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:t.generateTitleView("searchByTitle","common")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getQuestionTests(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[s("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.searchText,callback:function(e){t.$set(t.listQuery,"searchText",e)},expression:"listQuery.searchText"}})],1),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.redirectCreateCourseTest}},[t._v("Thêm mới bộ câu hỏi")])])]),s("div",{staticClass:"page-content"},[0===t.totalCourseTests?s("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):s("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[s("vs-tr",[s("vs-th",{staticStyle:{width:"200px"}},[s("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(t._s(t.generateTitleView("nameCourseTests","questionTest")))])]),s("vs-th",{staticStyle:{width:"100px"}},[s("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(" "+t._s(t.generateTitleView("isActive","questionTest")))])]),s("vs-th",{staticStyle:{width:"200px"}},[s("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(t._s(t.generateTitleView("jobCateId","questionTest")))])]),s("vs-th",{staticStyle:{width:"500px"}},[s("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("countQuestion","questionTest")))])]),s("vs-th",{staticStyle:{width:"160px"}},[s("div",{staticClass:"title-list"},[t._v(" Hoạt động")])])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listCourseTests,(function(e,i){return s("vs-tr",{key:i,attrs:{data:e}},[s("vs-td",[s("p",{staticClass:"title-item"},[t._v(t._s(e.name))])]),s("vs-td",{attrs:{align:"center"}},[s("vs-checkbox",{attrs:{disabled:""},model:{value:e.isActive,callback:function(s){t.$set(e,"isActive",s)},expression:"item.isActive"}})],1),s("vs-td",{attrs:{align:"center"}},[null!=e.jobCategory?s("span",{staticClass:"title-item"},[t._v(t._s(e.jobCategory.name))]):t._e()]),s("vs-td",[null!==e.question&&void 0!=e.question?s("p",{staticClass:"title-item"},[t._v(" "+t._s(e.question.length)+" ")]):t._e()]),s("vs-td",{attrs:{align:"center"}},[s("div",{staticClass:"action-item"},[s("el-dropdown",{staticStyle:{cursor:"pointer"}},[s("span",{staticClass:"el-dropdown-link"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[s("div",{on:{click:function(s){return t.openEditQuestion(e.id)}}},[t._v(t._s(t.generateTitleView("edit","common")))])]),s("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[s("div",{on:{click:function(s){return t.openDialogDelete(e)}}},[t._v(t._s(t.generateTitleView("delete","common")))])])],1)],1)],1)])],1)}))},proxy:!0}])}),t.totalCourseTests>0?s("BHSPagination",{attrs:{background:"",total:t.totalCourseTests,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getQuestionTests}}):t._e()],1),s("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"header-content"},[s("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),s("p",{staticClass:"not-margin textdialog"},[t._v(" Bạn có chắc muốn xóa bộ câu hỏi "),s("b",[t._v('"'+t._s(t.itemSelect.name)+'"')]),t._v("? ")])])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"con-footer"},[s("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),s("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}})],1)},n=[],a=s("1da1"),o=s("5530"),r=(s("25eb"),s("a9e3"),s("96cf"),s("2f62")),c=s("79fa"),l=s("b42a"),u=s("6c9c"),d=s("b35e"),m={name:"ListQuestionTest",components:{BHSPagination:l["a"]},mixins:[d["a"]],data:function(){return{listQuery:{userType:1,page:1,limit:10,title:""},DialogDelete:!1,itemSelect:{},questionSelect:[]}},computed:Object(o["a"])({},Object(r["c"])({listCourseTests:"courseTest/listCourseTests",totalCourseTests:"courseTest/totalCourseTests"})),mounted:function(){this.getQuestionTests()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])({actGetQuestionTest:"courseTest/getPagination",actRemoveQuestion:"courseTest/delete",actGetQuestion:"courseTest/getDetail"})),{},{getQuestionTests:function(){this.actGetQuestionTest({current_page:this.listQuery.page,limit:this.listQuery.limit,title:this.listQuery.title})},redirectCreateJob:function(){this.hasPermissionAction(u["a"].CREATE_JOB,"recruiter/create-job/",this.generateTitleView("noRole","common"))},selectEditJob:function(t){this.hasPermissionAction(u["a"].EDIT_JOB,"recruiter/edit-job/"+t,this.generateTitleView("noRole","common"))},openDialogDelete:function(t){this.hasPermissionAction(u["a"].DELETE_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogDelete=!0,this.itemSelect=t)},removeItem:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRemoveQuestion(t.itemSelect.id);case 2:return s=e.sent,t.handleShowNotification(s),t.DialogDelete=!1,e.next=7,t.getQuestionTests();case 7:case"end":return e.stop()}}),e)})))()},openEditQuestion:function(t){this.$router.push("/test/course-test/edit/"+t)},openDetailQuestion:function(t){this.$router.push("/test/question/"+t)},redirectCreateCourseTest:function(){this.$router.push("/test/course-test/create")},trunc:function(t,e){return t.length>Number.parseInt(e)?t.substring(0,Number.parseInt(e)):t},generateTitleView:c["a"]})},p=m,v=(s("7158"),s("2877")),g=Object(v["a"])(p,i,n,!1,null,"31600e92",null);e["default"]=g.exports}}]);