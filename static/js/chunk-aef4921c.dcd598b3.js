(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aef4921c"],{"1f5e":function(t,e,i){},2969:function(t,e,i){"use strict";var a=i("1f5e"),s=i.n(a);s.a},"94b6":function(t,e,i){"use strict";var a=i("eec2"),s=i.n(a);s.a},df2b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"header"},["/recruiter"===t.routerPath?i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("newsRecruitment","recruitment")))]):i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("newsClient","client")))])]),i("div",{staticClass:"body"},[i("line-charts")],1)])},s=[],n=i("e212"),r=i("79fa"),c={name:"ChartsUser",components:{LineCharts:n["a"]},data:function(){return{routerPath:this.$route.path}},methods:{generateTitleView:r["a"]}},l=c,o=(i("94b6"),i("2877")),u=Object(o["a"])(l,a,s,!1,null,"a794bce6",null);e["a"]=u.exports},e377:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"header"},["/recruiter"===t.routerPath?i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listRecruitment","recruitment")))]):i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listClient","client")))]),i("button",{staticClass:"btn btn-primary",on:{click:t.redirectCreate}},[t._v(t._s(t.generateTitleView("addNew","common")))])]),i("div",{staticClass:"body"},[0===t.total?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[i("div",{staticClass:"title-list "},[t._v(t._s(t.generateTitleView("name","user")))])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list "},[t._v("Kiểm duyệt")])]),i("vs-th",{staticStyle:{width:"250px"}},[i("div",{staticClass:"title-list "},[t._v("Email")])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list "},[t._v("Phone")])]),i("vs-th",{staticStyle:{width:"250px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listData,(function(e,a){return i("vs-tr",{key:a,attrs:{data:e}},[i("vs-td",["/recruiter"===t.routerPath?i("p",{staticClass:"title-item"},[t._v(t._s(t.truncate(e.name,15)))]):i("p",{staticClass:"title-item"},[t._v(t._s(e.fullname))]),"/recruiter"===t.routerPath?i("p",{staticClass:"description-item"},[t._v(t._s(t.generateTitleView("sizePersonnel","recruitment"))+" : "),i("span",{staticClass:"des-user"},[t._v(t._s(e.companySize.name))])]):t._e(),i("p",{staticClass:"create-date-item"},[t._v(t._s(t.generateTitleView("createdDate","common"))+" : "),i("span",{staticClass:"date-public-item"},[t._v(t._s(t._f("dayMonthYear")(e.created)))])])]),i("vs-td",{staticClass:"text",attrs:{align:"center"}},[e.isActive?i("span",[t._v(t._s(t.generateTitleView("userActive","recruitment")))]):i("span",[t._v(t._s(t.generateTitleView("userNoActive","recruitment")))])]),i("vs-td",{staticClass:"text",attrs:{v:"",align:"center"}},[null!=e.email?i("span",[t._v(t._s(e.email))]):i("span",[t._v("Chưa cập nhập")])]),i("vs-td",{staticClass:"title-item",attrs:{align:"center"}},["/recruiter"===t.routerPath?i("div",[i("span",[t._v(t._s(e.phoneNumber))])]):i("div",[null===e.phone||""===e.phone?i("span",[t._v("Chưa cập nhập")]):i("span",[t._v(t._s(e.phone))])])]),i("vs-td",{attrs:{align:"right"}},[i("el-dropdown",{staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"el-dropdown-link"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},["/recruiter"===t.routerPath?i("el-dropdown-item",[i("div",{on:{click:function(i){return t.detailRecruitment(e)}}},[t._v(t._s(t.generateTitleView("detail","common")))])]):i("el-dropdown-item",[i("div",{on:{click:function(i){return t.detailClient(e)}}},[t._v(t._s(t.generateTitleView("detail","common")))])]),i("el-dropdown-item",{attrs:{command:"Deleted",divided:""}},[i("div",{on:{click:function(i){return t.openDialogDelete(e)}}},[t._v(t._s(t.generateTitleView("delete","common")))])])],1)],1)],1)],1)}))},proxy:!0}])})],1),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[t._v(" "+t._s(t.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"},on:{click:function(e){return t.removeItem()}}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.DialogDelete=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:t.DialogDelete,callback:function(e){t.DialogDelete=e},expression:"DialogDelete"}},[i("div",{staticClass:"con-content"},["/recruiter"===this.routerPath?i("p",[t._v(" "+t._s(t.generateTitleView("confirmDelete","common"))+" "),i("span",{staticClass:"title-select"},[t._v('" '+t._s(t.truncate(t.itemSelect.name,10))+' "')]),t._v(" ? ")]):i("p",[t._v(" "+t._s(t.generateTitleView("confirmDelete","common"))+" "),i("span",{staticClass:"title-select"},[t._v('" '+t._s(t.itemSelect.fullname)+' "')]),t._v(" ? ")])])])],1)},s=[],n=(i("96cf"),i("1da1")),r=i("5530"),c=i("2f62"),l=i("79fa"),o=i("28ca"),u=i("b35e"),d={name:"UserList",mixins:[u["a"]],props:{title:{type:String,default:function(){return""}},total:0,listData:{type:Array,default:function(){return[]}}},data:function(){return{listQuery:{page:1,limit:10,name:""},routerPath:this.$route.path,employeeNumberList:o["f"],itemSelect:{},DialogDelete:!1}},computed:{},mounted:function(){},methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])({actGetAccounts:"user/getUserPaging",actDeleteCompany:"company/removeCompany",actEditCompany:"company/editCompany",actDeleteClient:"user/removeClient"})),{},{detailClient:function(t){this.$router.push("/client/detail/"+t.id)},detailRecruitment:function(t){this.$router.push("/recruiter/detail/"+t.id)},redirectCreate:function(){"/recruiter"===this.routerPath?this.$router.push("/recruiter/add"):this.$router.push("/client/add")},openDialogDelete:function(t){this.DialogDelete=!0,this.itemSelect=t},removeItem:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=null,"/recruiter"!==t.routerPath){e.next=7;break}return e.next=4,t.actDeleteCompany(t.itemSelect);case 4:i=e.sent,e.next=11;break;case 7:return e.next=9,t.actDeleteClient(t.itemSelect.id);case 9:a=e.sent,i=a.data;case 11:t.handleShowNotification(i),t.DialogDelete=!1,t.$emit("getData","");case 14:case"end":return e.stop()}}),e)})))()},redirectUpdate:function(t){"/recruiter"===this.routerPath?this.$router.push("/recruiter/edit/"+t.id):this.$router.push("/client/edit/"+t.id)},generateTitleView:l["a"]})},m=d,p=(i("2969"),i("2877")),v=Object(p["a"])(m,a,s,!1,null,"0dbb6e60",null);e["a"]=v.exports},eec2:function(t,e,i){}}]);