(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f364f4"],{"1b3b":function(e,t,i){"use strict";var a=i("fe43"),n=i.n(a);n.a},"5b00":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-container"},[i("sticky",{attrs:{"z-index":10}},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("listRecruitment","recruitment")))])]),i("div",{staticClass:"right"},[i("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:e.generateTitleView("searchByName","common")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getData(t)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),i("button",{staticClass:"btn btn-primary",on:{click:e.redirectCreate}},[e._v(e._s(e.generateTitleView("addNew","common")))])],1)])]),i("div",{staticClass:"page-content"},[i("div",{staticClass:"recruitment-list bhs-card"},[i("ListRecruitment",{attrs:{total:e.totalCompany,"list-data":e.listCompany},on:{getData:e.getData}}),e.totalCompany>0?i("BHSPagination",{attrs:{background:"",total:e.totalCompany,page:e.listQuery.page,limit:e.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getData}}):e._e()],1)])],1)},n=[],r=(i("b0c0"),i("96cf"),i("1da1")),s=i("5530"),c=i("e377"),o=i("df2b"),l=i("2f62"),u=i("b42a"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"body"},[0===e.total?i("div",{staticClass:"no-data"},[e._v(" "+e._s(e.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:e._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[i("div",{staticClass:"title-list "},[e._v(e._s(e.generateTitleView("name","user")))])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list "},[e._v("Kiểm duyệt")])]),i("vs-th",{staticStyle:{width:"250px"}},[i("div",{staticClass:"title-list "},[e._v("Gói dịch vụ đã mua")])]),i("vs-th",{staticStyle:{width:"250px"}},[i("div",{staticClass:"title-list "},[e._v("Email")])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list "},[e._v("Phone")])]),i("vs-th",{staticStyle:{width:"250px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return e._l(e.listData,(function(t,a){return i("vs-tr",{key:a,attrs:{data:t}},[i("vs-td",[i("p",{staticClass:"title-item"},[e._v(e._s(e.truncate(t.name,15)))]),i("p",{staticClass:"description-item"},[e._v(e._s(e.generateTitleView("sizePersonnel","recruitment"))+" : "),i("span",{staticClass:"des-user"},[e._v(e._s(t.companySize.name))])])]),i("vs-td",{staticClass:"text",attrs:{align:"center"}},[t.isActive?i("span",[e._v(e._s(e.generateTitleView("userActive","recruitment")))]):i("span",[e._v(e._s(e.generateTitleView("userNoActive","recruitment")))])]),i("vs-td",{staticClass:"text",attrs:{align:"center"}},[t.serviceRented?i("div",[i("span",{staticClass:"name-service"},[e._v(e._s(t.serviceRented.service.title))]),e.calculateDate(t)>0?i("p",{staticClass:"expiredDate"},[e._v("Còn "+e._s(e.calculateDate(t))+" ngày")]):0===e.calculateDate(t)?i("p",{staticClass:"expiredDate"},[e._v("Ngày cuối")]):i("p",{staticClass:"expiredDate"},[e._v("Hết hạn")])]):i("div",[e._v("Chưa mua gói dịch vụ ")])]),i("vs-td",{staticClass:"text",attrs:{v:"",align:"center"}},[null!=t.email?i("span",[e._v(e._s(t.email))]):i("span",[e._v("Chưa cập nhập")])]),i("vs-td",{staticClass:"title-item",attrs:{align:"center"}},[null!=t.phoneNumber?i("span",[e._v(e._s(t.phoneNumber))]):i("span",[e._v("Chưa cập nhập")])]),i("vs-td",{attrs:{align:"right"}},[i("el-dropdown",{staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"el-dropdown-link"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("div",{on:{click:function(i){return e.detailRecruitment(t)}}},[e._v(e._s(e.generateTitleView("detail","common")))])]),i("el-dropdown-item",[null==t.serviceRented?i("div",{on:{click:function(i){return e.addServiceCompany(t)}}},[e._v("Thêm gói dịch vụ")]):i("div",{on:{click:function(i){return e.openEdit(t)}}},[e._v("Chỉnh sửa dịch vụ")])]),null!==t.serviceRented?i("el-dropdown-item",[i("div",{on:{click:function(i){return e.removeService(t.id)}}},[e._v("Xóa dịch vụ")])]):e._e(),i("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[i("div",{on:{click:function(i){return e.openDialogDelete(t)}}},[e._v(e._s(e.generateTitleView("delete","common")))])])],1)],1)],1)],1)}))},proxy:!0}])})],1),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:e._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(t){return e.removeItem()}}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(t){e.DialogDelete=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:e.DialogDelete,callback:function(t){e.DialogDelete=t},expression:"DialogDelete"}},[i("div",{staticClass:"con-content"},[i("p",[e._v(" "+e._s(e.generateTitleView("confirmDelete","common"))+" "),i("span",{staticClass:"title-select"},[e._v('" '+e._s(e.truncate(e.itemSelect.name,10))+' "')]),e._v(" ? ")])])]),i("el-dialog",{attrs:{title:"Thêm dịch vụ cho công ty",visible:e.DialogService,width:"30%"},on:{"update:visible":function(t){e.DialogService=t}}},[i("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[i("form",{on:{submit:function(t){return t.preventDefault(),a(e.acceptAdd)}}},[i("div",{staticClass:"con-content"},[i("div",{staticClass:"row-item"},[i("div",{staticClass:"row-title required-text"},[e._v("Tên gói dịch vụ")]),i("ValidationProvider",{attrs:{rules:"required",name:"Gói dịch vụ"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[i("el-select",{staticClass:"fullWidth",attrs:{clearable:"",filterable:"",placeholder:"Lựa chọn gói dịch vụ","value-key":"id"},model:{value:e.formCreate.service,callback:function(t){e.$set(e.formCreate,"service",t)},expression:"formCreate.service"}},e._l(e.listService,(function(e){return i("el-option",{key:e.id,attrs:{label:e.title,value:e}})})),1),i("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(t){e.DialogService=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)])]}}])})],1)],1)},m=[],v=(i("a9e3"),i("79fa")),p=i("28ca"),f=i("b35e"),h=i("c1df"),g={name:"ListRecruitment",mixins:[f["a"]],props:{title:{type:String,default:function(){return""}},total:{type:Number,default:function(){return 0}},listData:{type:Array,default:function(){return[]}}},data:function(){return{listQuery:{page:1,limit:10,name:""},routerPath:this.$route.path,employeeNumberList:p["f"],itemSelect:{},DialogDelete:!1,DialogService:!1,formCreate:{service:"",companyId:"",createdBy:"",isActive:!0}}},computed:Object(s["a"])({},Object(l["c"])({listService:"services/allServices",userId:"userId"})),mounted:function(){},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])({actGetAccounts:"user/getUserPaging",actDeleteCompany:"company/removeCompany",actEditCompany:"company/editCompany",actAddService:"serviceRented/addServices",actDeleteService:"serviceRented/deleteService",actUpdateService:"serviceRented/updateService"})),{},{calculateDate:function(e){var t=h(Date.now()),i=h(e.serviceRented.expirationDate);return i.diff(t,"days")},detailRecruitment:function(e){this.$router.push("/recruiter/detail/"+e.id)},removeService:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.actDeleteService(e);case 2:a=i.sent,t.handleShowNotification(a),t.$emit("getData","");case 5:case"end":return i.stop()}}),i)})))()},redirectCreate:function(){this.$router.push("/recruiter/add")},openDialogDelete:function(e){this.DialogDelete=!0,this.itemSelect=e},addServiceCompany:function(e){this.DialogService=!0,this.itemSelect=e},openEdit:function(e){this.DialogService=!0,this.itemSelect=e,this.formCreate.service=e.serviceRented.service},acceptAdd:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.formCreate.companyId=e.itemSelect.id,e.formCreate.createdBy=e.userId,i="",null!==e.itemSelect.serviceRented){t.next=9;break}return t.next=6,e.actAddService(e.formCreate);case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,e.actUpdateService(e.formCreate);case 11:i=t.sent;case 12:e.handleShowNotification(i),e.DialogService=!1,e.$emit("getData","");case 15:case"end":return t.stop()}}),t)})))()},removeItem:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actDeleteCompany(e.itemSelect);case 2:i=t.sent,e.handleShowNotification(i),e.DialogDelete=!1,e.$emit("getData","");case 6:case"end":return t.stop()}}),t)})))()},redirectUpdate:function(e){"/recruiter"===this.routerPath?this.$router.push("/recruiter/edit/"+e.id):this.$router.push("/client/edit/"+e.id)},handleSubmitAdd:function(){},generateTitleView:v["a"]})},y=g,C=(i("1b3b"),i("2877")),_=Object(C["a"])(y,d,m,!1,null,"1988c5b0",null),b=_.exports,w=i("b804"),S={name:"RecruitmentIndex",components:{Sticky:w["a"],ListRecruitment:b,BHSPagination:u["a"],ChartsUser:o["a"],UserList:c["a"]},data:function(){return{listQuery:{page:1,limit:10,name:""}}},computed:Object(s["a"])({},Object(l["c"])({listCompany:"company/companyList",totalCompany:"company/totalCompany"})),mounted:function(){this.getData(),this.getAllService()},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])({actGetListCompany:"company/getPaginationCompany",actDeleteCompany:"company/removeCompany",actEditCompany:"company/editCompany",actGetRecruiter:"account/getRecruitmentInfo",actGetAllService:"services/getAll"})),{},{getData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actGetListCompany({current_page:e.listQuery.page,limit:e.listQuery.limit,name:e.listQuery.name});case 2:case"end":return t.stop()}}),t)})))()},getAllService:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actGetAllService();case 2:case"end":return t.stop()}}),t)})))()},redirectCreate:function(){this.$router.push("/recruiter/add")},generateTitleView:v["a"]})},D=S,k=(i("7f2f"),Object(C["a"])(D,a,n,!1,null,"039b27e8",null));t["default"]=k.exports},"7f2f":function(e,t,i){"use strict";var a=i("c1fd"),n=i.n(a);n.a},c1fd:function(e,t,i){},fe43:function(e,t,i){}}]);