(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7abc62f2"],{"0e1e":function(t,e,i){"use strict";i("607b")},"607b":function(t,e,i){},"9bd3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("sticky",{attrs:{"z-index":10}},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("userList","user")))])]),s("div",{staticClass:"right"},[s("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:t.generateTitleView("searchByName","common")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getListUser(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[s("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1)])]),s("div",{staticClass:"page-content"},[0===t.totalUser?s("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):s("vs-table",{staticClass:"table bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[s("vs-tr",[s("vs-th",{staticStyle:{width:"150px"}},[s("div",{staticClass:"title-list center"},[t._v(t._s(t.generateTitleView("Thumbnail","user")))])]),s("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[s("div",{staticClass:"title-list center",attrs:{align:"center"}},[t._v(t._s(t.generateTitleView("UserName","user")))])]),s("vs-th",{staticStyle:{width:"400px"}},[s("div",{staticClass:"title-list center",attrs:{align:"center"}},[t._v(" "+t._s(t.generateTitleView("FullName","user")))])]),s("vs-th",{staticStyle:{width:"15%"}},[s("div",{staticClass:"title-list center",attrs:{align:"center"}},[t._v(" "+t._s(t.generateTitleView("Phone","user")))])]),s("vs-th",{staticStyle:{width:"360px"}},[s("div",{staticClass:"title-list center"},[t._v(t._s(t.generateTitleView("Email","user")))])]),s("vs-th",{staticStyle:{width:"360px"}},[s("div",{staticClass:"title-list"},[t._v("Loại tài khoản")])]),s("vs-th",{staticStyle:{width:"360px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.userList,(function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",{attrs:{align:"center"}},[s("div",{staticClass:"thumbnail-item"},[null===e.pictureUrl||""===e.pictureUrl?s("img",{attrs:{src:i("b84e")}}):s("img",{attrs:{src:t.mediaFolder+e.pictureUrl}})])]),s("vs-td",[""===e.userName||null===e.userName?s("p",{staticClass:"title-item"},[t._v(t._s(e.email))]):s("p",{staticClass:"title-item"},[t._v(t._s(e.userName))])]),s("vs-td",[null!==e.fullname&&""!==e.fullname?s("p",{staticClass:"title-item"},[t._v(t._s(e.fullname))]):s("p",{staticClass:"title-item"},[t._v("Chưa cập nhập")])]),s("vs-td",[null!==e.phone&&""!==e.phone?s("p",{staticClass:"title-item"},[t._v(t._s(e.phone))]):s("p",{staticClass:"title-item"},[t._v("Chưa cập nhập")])]),s("vs-td",[s("p",{staticClass:"title-item"},[t._v(t._s(e.email))])]),s("vs-td",[s("p",{staticClass:"title-item"},[t._v(t._s(e.roleUser[0].name))])]),s("vs-td",[s("div",{staticClass:"action-button"},[s("button",{staticClass:"btn btn-primary btn-edit__item",on:{click:function(i){return t.editItem(e)}}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pen"}}),s("span",[t._v(t._s(t.generateTitleView("edit","common")))])],1),s("button",{staticClass:"btn btn-danger btn-remove__item",on:{click:function(i){return t.openDialogDelete(e)}}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:"trash"}}),s("span",[t._v(t._s(t.generateTitleView("delete","common")))])],1)])])],1)}))},proxy:!0}])}),s("BHSPagination",{attrs:{background:"",total:t.totalUser,page:t.listQuery.current_page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"current_page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getListUser}})],1),s("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"con-footer"},[s("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.acceptRemove()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),s("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}},[s("div",{staticClass:"con-content"},[s("p",[t._v(" "+t._s(t.generateTitleView("confirmDelete","common"))),s("span",{staticClass:"title-select"},[t._v(t._s(t.itemDelete.email)+" ")]),t._v("? ")])])])],1)},a=[],n=i("1da1"),r=i("5530"),l=(i("96cf"),i("b0c0"),i("2f62")),c=i("79fa"),o=i("b42a"),u=i("b804"),m=i("b35e"),d=i("28ca"),p=i("6c9c"),v={name:"UserIndex",components:{Sticky:u["a"],BHSPagination:o["a"]},mixins:[m["a"]],data:function(){return{listQuery:{name:"",current_page:1,limit:10},DialogDelete:!1,itemDelete:{}}},computed:Object(r["a"])({},Object(l["c"])({userList:"user/userList",totalUser:"user/totalUser"})),mounted:function(){this.getListUser()},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])({actGetListUser:"user/getPaginationUser",actRemoveUser:"user/removeUser"})),{},{getListUser:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading(),e.next=3,t.actGetListUser({current_page:t.listQuery.current_page,limit:t.listQuery.limit,name:t.listQuery.name,userType:d["l"].SystemAdmin});case 3:t.closeLoading();case 4:case"end":return e.stop()}}),e)})))()},openDialogDelete:function(t){this.DialogDelete=!0,this.itemDelete=t},editItem:function(t){this.hasPermissionAction(p["a"].EDIT_NEWS,"user/edit/"+t.id,this.generateTitleView("noRole","common"))},acceptRemove:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRemoveUser(t.itemDelete.id);case 2:i=e.sent,t.handleShowNotification(i.data),i.data.isSuccess&&(t.DialogDelete=!1,t.getListUser());case 5:case"end":return e.stop()}}),e)})))()},showLoading:function(){this.componentLoading=this.$vs.loading({type:"scale",target:this.$refs.content})},closeLoading:function(){this.componentLoading.close()},generateTitleView:c["a"]})},g=v,h=(i("0e1e"),i("2877")),_=Object(h["a"])(g,s,a,!1,null,"be918dfc",null);e["default"]=_.exports},b84e:function(t,e,i){t.exports=i.p+"static/img/unnamed.e6801e57.jpg"}}]);