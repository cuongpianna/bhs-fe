(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-171f8a1d"],{"894e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"pageContainer",staticClass:"page-container vs-con-loading__container"},[s("sticky",{attrs:{"z-index":10}},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listPoint","point")))])]),s("div",{staticClass:"right"},[s("el-select",{attrs:{clearable:!0,placeholder:"Trạng thái xử lý"},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),s("button",{staticClass:"btn-search",on:{click:t.getListOrder}},[s("font-awesome-icon",{attrs:{color:"#2D9CDB",icon:"filter"}})],1)],1)])]),s("div",{staticClass:"page-content"},[0===t.totalOrder?s("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):s("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[s("vs-tr",[s("vs-th",{staticStyle:{width:"150px"}},[s("div",{staticClass:"title-list "},[t._v(" Avatar")])]),s("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[s("div",{staticClass:"title-list "},[t._v(" "+t._s(t.generateTitleView("user","point")))])]),s("vs-th",{staticStyle:{width:"180px"}},[s("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("point","point")))])]),s("vs-th",{staticStyle:{width:"180px"}},[s("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("money","point")))])]),s("vs-th",{staticStyle:{width:"auto"}},[s("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("description","point")))])]),s("vs-th",{staticStyle:{width:"180px"}},[s("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("created","point")))])]),s("vs-th",{staticStyle:{width:"186px"}},[s("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("status","point")))])]),s("vs-th",{staticStyle:{width:"160px"}},[t._v(" Actions ")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listOrder,(function(e,r){return s("vs-tr",{key:r,attrs:{data:e}},[s("vs-td",[s("div",{staticClass:"thumbnail-item"},[""===e.user.pictureUrl&&null===e.user.pictureUrl?s("img",{attrs:{src:i("afa5")}}):s("img",{attrs:{src:t.avatarFolder+e.user.pictureUrl}})])]),s("vs-td",[t._v(" "+t._s(e.user.email)+" ")]),s("vs-td",{attrs:{align:"center"}},[t._v(" "+t._s(e.point)+" ")]),s("vs-td",{attrs:{align:"center"}},[t._v(" "+t._s(t._f("formatMoney")(e.money))+" ")]),s("vs-td",{attrs:{align:"center"}},[t._v(" "+t._s(e.description)+" ")]),s("vs-td",{attrs:{align:"center"}},[s("span",{staticClass:"date-public-item"},[t._v(t._s(t._f("fullDatetime")(e.created)))])]),s("vs-td",{attrs:{align:"center"}},[0===e.status?s("span",[t._v("Chưa xử lý")]):t._e(),1===e.status?s("span",[t._v("Đã nạp tiền")]):t._e(),2===e.status?s("span",[t._v("Đã hủy bỏ")]):t._e()]),s("vs-td",{attrs:{align:"center"}},[s("el-dropdown",{attrs:{disabled:0!==e.status}},[s("button",{staticClass:"btn-dropdown"},[s("font-awesome-icon",{attrs:{icon:"ellipsis-h"}})],1),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[s("div",{on:{click:function(i){return t.confirmOrder(e)}}},[t._v("Nạp điểm")])]),s("el-dropdown-item",[s("div",{on:{click:function(i){return t.rejectOrder(e)}}},[t._v("Hủy nạp điểm")])])],1)],1)],1)],1)}))},proxy:!0}])}),t.totalOrder>0?s("BHSPagination",{attrs:{background:"",total:t.totalOrder,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getListOrder}}):t._e(),s("vs-dialog",{staticClass:"dialog-folder",attrs:{width:"450px"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"not-margin"},[t._v(" Nạp điểm ")])]},proxy:!0}]),model:{value:t.dialogOrder,callback:function(e){t.dialogOrder=e},expression:"dialogOrder"}},[t.selectedOrder?s("div",{staticClass:"folder-wrap"},[t._v(" Nếu đồng ý, bạn sẽ tăng "+t._s(t.selectedOrder.point)+" điểm vào tài khoản "),s("b",[t._v(t._s(t.selectedOrder.user.email)+".")]),t._v(" Bạn có chắc chắn không? ")]):t._e(),s("div",{staticClass:"con-footer"},[s("vs-button",{attrs:{type:"submit"},on:{click:t.handleConfirmOrder}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),s("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.dialogOrder=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]),s("vs-dialog",{staticClass:"dialog-folder",attrs:{width:"450px"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"not-margin"},[t._v(" Hủy nạp điểm ")])]},proxy:!0}]),model:{value:t.dialogReject,callback:function(e){t.dialogReject=e},expression:"dialogReject"}},[t.selectedOrder?s("div",{staticClass:"folder-wrap"},[t._v(" Nếu đồng ý, bạn hủy nạp "+t._s(t.selectedOrder.point)+" điểm từ tài khoản "),s("b",[t._v(t._s(t.selectedOrder.user.email)+".")]),t._v(" Bạn có chắc chắn không? ")]):t._e(),s("div",{staticClass:"con-footer"},[s("vs-button",{attrs:{type:"submit"},on:{click:t.onRejectPointOrder}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),s("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.dialogReject=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)])],1)],1)},r=[],n=i("1da1"),a=i("5530"),o=(i("96cf"),i("2f62")),l=i("79fa"),c=i("b42a"),d=i("b35e"),u=i("b804"),p={name:"OrderIndex",components:{Sticky:u["a"],BHSPagination:c["a"]},mixins:[d["a"]],data:function(){return{selectedOrder:null,listQuery:{page:1,limit:10,status:null},dialogOrder:!1,dialogReject:!1,itemSelect:{},searchQuery:"",options:[{label:"Chưa xử lý",value:0},{label:"Đã nạp điểm",value:1},{label:"Đã từ chối",value:2}]}},computed:Object(a["a"])({},Object(o["c"])({listOrder:"point/listOrder",totalOrder:"point/totalOrder"})),mounted:function(){this.getListOrder()},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["b"])({actGetListOrder:"point/getOrderPaging"})),Object(o["b"])("point",["actConfirmOrder","actRejectOrder"])),{},{getListOrder:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.$vs.loading({type:"scale",target:t.$refs.pageContainer}),e.next=3,t.actGetListOrder({current_page:t.listQuery.page,limit:t.listQuery.limit,status:t.listQuery.status});case 3:i.close();case 4:case"end":return e.stop()}}),e)})))()},confirmOrder:function(t){0===t.status?(this.selectedOrder=t,this.dialogOrder=!0):this.openNotification("top-right","warning","<i class='bx bxs-error' ></i>","<span style='color: #fff'>Thông báo</span>","Hành động không thể áp dụng với Order đã được xử lý!")},rejectOrder:function(t){0===t.status?(this.selectedOrder=t,this.dialogReject=!0):this.openNotification("top-right","warning","<i class='bx bxs-error' ></i>","<span style='color: #fff'>Thông báo</span>","Hành động không thể áp dụng với Order đã được xử lý!")},handleConfirmOrder:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actConfirmOrder(t.selectedOrder);case 2:i=e.sent,i.isSuccess?(t.dialogOrder=!1,t.getListOrder(),t.handleShowNotification(i)):(t.dialogOrder=!1,t.handleShowNotification(i));case 4:case"end":return e.stop()}}),e)})))()},openNotification:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;this.$vs.notification({icon:i,color:e,position:t,title:s,text:r})},onRejectPointOrder:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actRejectOrder(t.selectedOrder);case 2:i=e.sent,i.isSuccess?(t.dialogReject=!1,t.getListOrder()):t.dialogReject=!1,t.handleShowNotification(i);case 5:case"end":return e.stop()}}),e)})))()},generateTitleView:l["a"]})},v=p,g=(i("92f04"),i("2877")),h=Object(g["a"])(v,s,r,!1,null,"6dc2163d",null);e["default"]=h.exports},"92f04":function(t,e,i){"use strict";i("c914")},c914:function(t,e,i){}}]);