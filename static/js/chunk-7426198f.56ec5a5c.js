(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7426198f"],{"13bf":function(t,e,s){},"25eb":function(t,e,s){var i=s("23e7"),a=s("c20d");i({target:"Number",stat:!0,forced:Number.parseInt!=a},{parseInt:a})},c20d:function(t,e,s){var i=s("da84"),a=s("58a8").trim,n=s("5899"),o=i.parseInt,r=/^[+-]?0[Xx]/,l=8!==o(n+"08")||22!==o(n+"0x16");t.exports=l?function(t,e){var s=a(String(t));return o(s,e>>>0||(r.test(s)?16:10))}:o},db26:function(t,e,s){"use strict";s("13bf")},dfcb:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("quesstionTestList","questionTest")))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"search-type"},[i("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:t.generateTitleView("searchByTitle","common")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getQuestionTests(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.searchText,callback:function(e){t.$set(t.listQuery,"searchText",e)},expression:"listQuery.searchText"}})],1)])]),i("div",{staticClass:"page-content"},[t.listCouseTest.question?i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticStyle:{width:"100px"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(t._s(t.generateTitleView("name","questionTest")))])]),i("vs-th",{staticClass:"title",staticStyle:{width:"30%"}},[i("div",{staticClass:"title-list",attrs:{align:"left"}},[t._v(" "+t._s(t.generateTitleView("desc","questionTest")))])]),i("vs-th",{staticStyle:{width:"150px"}},[i("div",{staticClass:"title-list "},[t._v(" "+t._s(t.generateTitleView("thumb","questionTest")))])]),i("vs-th",{staticStyle:{width:"15%"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v(" "+t._s(t.generateTitleView("isActive","questionTest")))])]),i("vs-th",{staticStyle:{width:"160px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("listAswers","questionTest")))])])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listCouseTest.question,(function(e,a){return i("vs-tr",{key:a,attrs:{data:e}},[i("vs-td",[i("div",{staticClass:"name-item"},[i("p",{staticClass:"title-item"},[t._v(t._s(t.truncate(e.name,15)))])])]),i("vs-td",{attrs:{align:"left"}},[i("div",{staticClass:"title-item",domProps:{innerHTML:t._s(e.desc)}})]),i("vs-td",[i("div",{staticClass:"thumbnail-item"},[""!==e.image&&e.image?i("img",{attrs:{src:t.mediaFolder+e.thumb}}):i("img",{attrs:{src:s("afa5")}})])]),i("vs-td",{attrs:{align:"center"}},[i("vs-checkbox",{attrs:{disabled:""},model:{value:e.isActive,callback:function(s){t.$set(e,"isActive",s)},expression:"item.isActive"}})],1),i("vs-td",{attrs:{align:"center"}},[i("ol",{staticClass:"list-answer"},t._l(e.objAnswer,(function(e,s){return i("li",{key:s,staticClass:"text-question"},[!0===e.isCorrect?i("p",{staticClass:"answer-correct-true title-item",attrs:{title:e.name+"-Đáp án đúng"}},[t._v("[ "+t._s(s+1)+" ] "+t._s(e.name))]):i("p",{staticClass:"answer-correct title-item",attrs:{title:e.name}},[t._v("[ "+t._s(s+1)+" ] "+t._s(e.name))])])})),0)])],1)}))},proxy:!0}])}):i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]),t.totalQuestionTests>0?i("BHSPagination",{attrs:{background:"",total:t.totalQuestionTests,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getQuestionTests}}):t._e()],1),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"header-content"},[i("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")]),i("p",{staticClass:"not-margin textdialog"},[t._v(" "+t._s(t.generateTitleView("deleteDialog","questionTest"))+" ")])])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}})],1)},a=[],n=s("1da1"),o=s("5530"),r=(s("25eb"),s("a9e3"),s("96cf"),s("2f62")),l=s("79fa"),c=s("b42a"),u=s("6c9c"),d=s("b35e"),m={components:{BHSPagination:c["a"]},mixins:[d["a"]],data:function(){return{listQuery:{userType:1,page:1,limit:10,title:""},listCouseTest:{},DialogDelete:!1,itemSelect:{},idSelect:this.$route.params.id}},computed:Object(o["a"])({},Object(r["c"])({listQuestionTests:"questionTest/listQuestionTests",totalQuestionTests:"questionTest/totalQuestionTests"})),mounted:function(){this.getData()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])({actGetQuestionTest:"questionTest/getPagination",actRemoveQuestion:"questionTest/delete",actGetQuestion:"courseTest/getDetail"})),{},{getData:function(){var t=this;this.showLoading(),void 0!==this.idSelect&&this.actGetQuestion(this.idSelect).then((function(e){e&&e.isSuccess&&(t.listCouseTest=JSON.parse(JSON.stringify(e.payload.records)))})),this.closeLoading()},openDialogDelete:function(t){this.hasPermissionAction(u["a"].DELETE_JOB,"",this.generateTitleView("noRole","common"))&&(this.DialogDelete=!0,this.itemSelect=t)},removeItem:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRemoveQuestion(t.itemSelect.id);case 2:return s=e.sent,t.handleShowNotification(s),t.DialogDelete=!1,e.next=7,t.getQuestionTests();case 7:case"end":return e.stop()}}),e)})))()},openEditQuestion:function(t){this.$router.push("/test/question/edit/"+t)},trunc:function(t,e){return t.length>Number.parseInt(e)?t.substring(0,Number.parseInt(e))+"...":t},generateTitleView:l["a"]})},g=m,v=(s("db26"),s("2877")),p=Object(v["a"])(g,i,a,!1,null,"ad62707a",null);e["default"]=p.exports}}]);