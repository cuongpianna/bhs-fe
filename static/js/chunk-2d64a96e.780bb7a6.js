(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d64a96e"],{"25eb":function(t,e,s){var i=s("23e7"),n=s("c20d");i({target:"Number",stat:!0,forced:Number.parseInt!=n},{parseInt:n})},bf7a:function(t,e,s){"use strict";s("cd1b")},c20d:function(t,e,s){var i=s("da84"),n=s("58a8").trim,a=s("5899"),o=i.parseInt,r=/^[+-]?0[Xx]/,l=8!==o(a+"08")||22!==o(a+"0x16");t.exports=l?function(t,e){var s=n(String(t));return o(s,e>>>0||(r.test(s)?16:10))}:o},cd1b:function(t,e,s){},fd8a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("courseTestList","courseTest")))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"search-type"},[i("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:t.generateTitleView("searchByTitle","common")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getQuestionTests(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.searchText,callback:function(e){t.$set(t.listQuery,"searchText",e)},expression:"listQuery.searchText"}})],1)])]),i("div",{staticClass:"page-content"},[0===t.totalCourseTests?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticStyle:{width:"200px"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(t._s(t.generateTitleView("nameCourseTests","questionTest")))])]),i("vs-th",{staticClass:"title",staticStyle:{width:"200px"}},[i("div",{staticClass:"title-list",attrs:{align:"left"}},[t._v(" "+t._s(t.generateTitleView("desc","questionTest")))])]),i("vs-th",{staticStyle:{width:"150px"}},[i("div",{staticClass:"title-list "},[t._v(" "+t._s(t.generateTitleView("thumb","questionTest")))])]),i("vs-th",{staticStyle:{width:"100px"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(" "+t._s(t.generateTitleView("isActive","questionTest")))])]),i("vs-th",{staticStyle:{width:"200px"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(t._s(t.generateTitleView("jobCateId","questionTest")))])]),i("vs-th",{staticStyle:{width:"500px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("countQuestion","questionTest")))])]),i("vs-th",{staticStyle:{width:"160px"}},[i("div",{staticClass:"title-list"},[t._v(" Hoạt động")])])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listCourseTests,(function(e,n){return i("vs-tr",{key:n,attrs:{data:e}},[i("vs-td",[i("p",{staticClass:"title-item"},[t._v(t._s(e.name))])]),i("vs-td",{attrs:{align:"left"}},[i("div",{domProps:{innerHTML:t._s(e.desc)}})]),i("vs-td",[i("div",{staticClass:"thumbnail-item"},[""!==e.thumb&&e.thumb?i("img",{attrs:{src:t.mediaFolder+e.thumb}}):i("img",{attrs:{src:s("afa5")}})])]),i("vs-td",{attrs:{align:"center"}},[i("vs-checkbox",{attrs:{disabled:""},model:{value:e.isActive,callback:function(s){t.$set(e,"isActive",s)},expression:"item.isActive"}})],1),i("vs-td",{attrs:{align:"center"}},[null!=e.jobCategory?i("span",{staticClass:"title-item"},[t._v(t._s(e.jobCategory.name))]):t._e()]),i("vs-td",[null!==e.question&&void 0!=e.question?i("p",{staticClass:"title-item"},[t._v(" "+t._s(e.question.length)+" ")]):t._e()]),i("vs-td",{attrs:{align:"center"}},[i("div",{staticClass:"action-item"},[i("el-dropdown",{staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"el-dropdown-link"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("div",{on:{click:function(s){return t.openDetailQuestion(e.id)}}},[t._v(t._s(t.generateTitleView("questionTestlist","questionTest")))])]),i("el-dropdown-item",[i("div",{on:{click:function(s){return t.openEditQuestion(e.id)}}},[t._v(t._s(t.generateTitleView("edit","common")))])]),i("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[i("div",{on:{click:function(s){return t.openDialogDelete(e)}}},[t._v(t._s(t.generateTitleView("delete","common")))])])],1)],1)],1)])],1)}))},proxy:!0}])}),t.totalCourseTests>0?i("BHSPagination",{attrs:{background:"",total:t.totalCourseTests,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getQuestionTests}}):t._e()],1),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"header-content"},[i("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),i("p",{staticClass:"not-margin textdialog"},[t._v(" "+t._s(t.generateTitleView("deleteDialog","questionTest"))+" ")])])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}})],1)},n=[],a=s("1da1"),o=s("5530"),r=(s("25eb"),s("a9e3"),s("96cf"),s("2f62")),l=s("79fa"),c=s("b42a"),u=s("6c9c"),d=s("b35e"),m={name:"ListQuestionTest",components:{BHSPagination:c["a"]},mixins:[d["a"]],data:function(){return{listQuery:{userType:1,page:1,limit:10,title:""},DialogDelete:!1,itemSelect:{},questionSelect:[]}},computed:Object(o["a"])({},Object(r["c"])({listCourseTests:"courseTest/listCourseTests",totalCourseTests:"courseTest/totalCourseTests"})),mounted:function(){this.getQuestionTests()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])({actGetQuestionTest:"courseTest/getPagination",actRemoveQuestion:"courseTest/delete",actGetQuestion:"courseTest/getDetail"})),{},{getQuestionTests:function(){this.actGetQuestionTest({current_page:this.listQuery.page,limit:this.listQuery.limit,title:this.listQuery.title})},redirectCreateJob:function(){this.hasPermissionAction(u["a"].CREATE_JOB,"recruiter/create-job/",this.generateTitleView("noRole","common"))},selectEditJob:function(t){this.hasPermissionAction(u["a"].EDIT_JOB,"recruiter/edit-job/"+t,this.generateTitleView("noRole","common"))},openDialogDelete:function(t){this.hasPermissionAction(u["a"].DELETE_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogDelete=!0,this.itemSelect=t)},removeItem:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRemoveQuestion(t.itemSelect.id);case 2:return s=e.sent,t.handleShowNotification(s),t.DialogDelete=!1,e.next=7,t.getQuestionTests();case 7:case"end":return e.stop()}}),e)})))()},openEditQuestion:function(t){this.$router.push("/test/course-test/edit/"+t)},openDetailQuestion:function(t){this.$router.push("/test/question/"+t)},trunc:function(t,e){return t.length>Number.parseInt(e)?t.substring(0,Number.parseInt(e)):t},generateTitleView:l["a"]})},p=m,v=(s("bf7a"),s("2877")),g=Object(v["a"])(p,i,n,!1,null,"325d4b24",null);e["default"]=g.exports}}]);