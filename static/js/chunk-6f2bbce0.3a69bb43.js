(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f2bbce0"],{"8c4b":function(t,e,i){"use strict";i("b3cf")},b3cf:function(t,e,i){},c79d:function(t,e,i){"use strict";i("e2f8")},cbd0:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[i("div",{staticClass:"page-content"},[i("div",{staticClass:"list-client bhs-card"},[i("list-client",{attrs:{total:t.totalUser,"list-data":t.listUser},on:{getData:t.getData}}),t.totalUser>0?i("BHSPagination",{attrs:{background:"",total:t.totalUser,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getData}}):t._e()],1)])])},s=[],n=i("5530"),l=(i("b0c0"),i("e377")),r=i("df2b"),c=i("2f62"),o=i("b42a"),u=i("b35e"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"header"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listClient","client")))]),i("button",{staticClass:"btn btn-primary",on:{click:t.redirectCreate}},[t._v(t._s(t.generateTitleView("addNew","common")))])]),i("div",{staticClass:"body"},[0===t.total?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[i("div",{staticClass:"title-list "},[t._v(t._s(t.generateTitleView("name","user")))])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list "},[t._v("Kiểm duyệt")])]),i("vs-th",{staticStyle:{width:"250px"}},[i("div",{staticClass:"title-list "},[t._v("Email")])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list "},[t._v("Phone")])]),i("vs-th",{staticStyle:{width:"250px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listData,(function(e,a){return i("vs-tr",{key:a,attrs:{data:e}},[i("vs-td",[i("p",{staticClass:"title-item"},[t._v(t._s(e.fullname))]),i("p",{staticClass:"create-date-item"},[t._v(t._s(t.generateTitleView("createdDate","common"))+" : "),i("span",{staticClass:"date-public-item"},[t._v(t._s(t._f("dayMonthYear")(e.created)))])])]),i("vs-td",{staticClass:"text",attrs:{align:"center"}},[e.isActive?i("span",[t._v(t._s(t.generateTitleView("userActive","recruitment")))]):i("span",[t._v(t._s(t.generateTitleView("userNoActive","recruitment")))])]),i("vs-td",{staticClass:"text",attrs:{v:"",align:"center"}},[null!=e.email?i("span",[t._v(t._s(e.email))]):i("span",[t._v("Chưa cập nhập")])]),i("vs-td",{staticClass:"title-item",attrs:{align:"center"}},[null===e.phone||""===e.phone?i("span",[t._v("Chưa cập nhập")]):i("span",[t._v(t._s(e.phone))])]),i("vs-td",{attrs:{align:"right"}},[i("el-dropdown",{staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"el-dropdown-link"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("div",{on:{click:function(i){return t.detailClient(e)}}},[t._v(t._s(t.generateTitleView("detail","common")))])]),i("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[i("div",{on:{click:function(i){return t.openDialogDelete(e)}}},[t._v(t._s(t.generateTitleView("delete","common")))])])],1)],1)],1)],1)}))},proxy:!0}])})],1),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}},[i("div",{staticClass:"con-content"},[i("p",[t._v(" "+t._s(t.generateTitleView("confirmDelete","common"))+" "),i("span",{staticClass:"title-select"},[t._v('" '+t._s(t.itemSelect.fullname)+' "')]),t._v(" ? ")])])])],1)},p=[],m=i("1da1"),v=(i("96cf"),i("79fa")),g=i("28ca"),f={name:"ListClient",mixins:[u["a"]],props:{title:{type:String,default:function(){return""}},total:0,listData:{type:Array,default:function(){return[]}}},data:function(){return{listQuery:{page:1,limit:10,name:""},routerPath:this.$route.path,employeeNumberList:g["f"],itemSelect:{},DialogDelete:!1}},computed:{},mounted:function(){},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])({actGetAccounts:"user/getUserPaging",actDeleteCompany:"company/removeCompany",actEditCompany:"company/editCompany",actDeleteClient:"user/removeClient"})),{},{detailClient:function(t){this.$router.push("/client/detail/"+t.id)},redirectCreate:function(){this.$router.push("/client/add")},openDialogDelete:function(t){this.DialogDelete=!0,this.itemSelect=t},removeItem:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=null,e.next=3,t.actDeleteClient(t.itemSelect.id);case 3:a=e.sent,i=a.data,t.handleShowNotification(i),t.DialogDelete=!1,t.$emit("getData","");case 8:case"end":return e.stop()}}),e)})))()},redirectUpdate:function(t){"/recruiter"===this.routerPath?this.$router.push("/recruiter/edit/"+t.id):this.$router.push("/client/edit/"+t.id)},generateTitleView:v["a"]})},h=f,_=(i("8c4b"),i("2877")),C=Object(_["a"])(h,d,p,!1,null,"5eb96552",null),b=C.exports,y={name:"ClientIndex",components:{ListClient:b,BHSPagination:o["a"],ChartsUser:r["a"],UserList:l["a"]},mixins:[u["a"]],data:function(){return{listQuery:{page:1,limit:10,name:""}}},computed:Object(n["a"])({},Object(c["c"])({listUser:"user/clientList",totalUser:"user/totalClient"})),mounted:function(){this.getData()},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])({actGetListUser:"user/getClientPaging"})),{},{getData:function(){this.actGetListUser({current_page:this.listQuery.page,limit:this.listQuery.limit,name:this.listQuery.name,userType:3})}})},w=y,D=(i("c79d"),Object(_["a"])(w,a,s,!1,null,"b5679c74",null));e["default"]=D.exports},e2f8:function(t,e,i){}}]);