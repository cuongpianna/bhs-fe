(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b6ef574"],{"0563":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"pageContainer",staticClass:"page-container vs-con-loading__container"},[i("sticky",{attrs:{"z-index":10}},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("title","settingpoint")))])])])]),i("div",{staticClass:"page-content"},[0===t.totalSettingPoints?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticClass:"title text-left",staticStyle:{width:"auto"}},[i("div",{staticClass:"title-list "},[t._v(" Tên hành động")])]),i("vs-th",{staticStyle:{width:"180px"}},[i("div",{staticClass:"title-list"},[t._v(" Số điểm cộng (trừ) tương ứng")])]),i("vs-th",{staticStyle:{width:"160px"}},[i("div",{staticClass:"title-list"},[t._v(" Hành động")])])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listSettingPoints,(function(e,n){return i("vs-tr",{key:n,attrs:{data:e}},[i("vs-td",{attrs:{align:"left"}},[i("div",{staticClass:"text-left"},[t._v(" "+t._s(e.name)+" ")])]),i("vs-td",{attrs:{align:"center"}},[t._v(" "+t._s(e.point)+" ")]),i("vs-td",{attrs:{align:"center"}},[i("button",{staticClass:"btn btn-primary btn-edit__item action-button",on:{click:function(i){return t.redirectEditCvTemplates(e)}}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pen"}}),i("span",[t._v(t._s(t.generateTitleView("edit","common")))])],1)])],1)}))},proxy:!0}])}),i("vs-dialog",{staticClass:"dialogPackage dialog",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[t._v(" "+t._s(t.generateTitleView("titledialog","settingpoint"))+" ")])]},proxy:!0}]),model:{value:t.dialogCvTemplateEdit,callback:function(e){t.dialogCvTemplateEdit=e},expression:"dialogCvTemplateEdit"}},[i("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit,a=e.reset;return[i("form",{on:{submit:function(e){return e.preventDefault(),n(t.handleSubmitPackage)},reset:function(t){return t.preventDefault(),a(t)}}},[i("div",{staticClass:"folder-wrap"},[i("ValidationProvider",{attrs:{rules:"required",name:"Hành động"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[i("vs-input",{staticClass:"full-width",attrs:{border:"",placeholder:"Hành động"},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:t.SettingPoint.name,callback:function(e){t.$set(t.SettingPoint,"name",e)},expression:"SettingPoint.name"}}),i("span",{staticClass:"vee-errors"},[t._v(t._s(n[0]))])]}}],null,!0)}),i("div",{staticClass:"folder-wrap"},[i("ValidationProvider",{attrs:{rules:"required|number",name:"Số điểm"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[i("vs-input",{staticClass:"full-width",attrs:{border:"",placeholder:"Số điểm cộng (trừ) tương ứng"},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:t.SettingPoint.point,callback:function(e){t.$set(t.SettingPoint,"point",e)},expression:"SettingPoint.point"}}),i("span",{staticClass:"vee-errors"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.dialogCvTemplateEdit=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)],1)])]}}])})],1)],1)],1)},a=[],s=i("1da1"),o=i("5530"),r=(i("b0c0"),i("96cf"),i("2f62")),l=i("79fa"),c=i("b35e"),d=i("b804"),u={name:"SettingPointIndex",components:{Sticky:d["a"]},mixins:[c["a"]],data:function(){return{selectedOrder:null,listQuery:{page:1,limit:100,status:null},SettingPoint:{name:"",point:0},dialogOrder:!1,dialogReject:!1,itemSelect:{},searchQuery:"",dialogCvTemplateEdit:!1,DialogAcceptEdit:!1}},computed:Object(o["a"])({},Object(r["c"])({listSettingPoints:"settingpoint/listSettingPoints",totalSettingPoints:"settingpoint/totalSettingPoints"})),mounted:function(){this.getListSettingPoint()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])({actGetListSettingPoint:"settingpoint/getPagination",actEditSettingPoints:"settingpoint/edit"})),{},{getListSettingPoint:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.actGetListSettingPoint({current_page:t.listQuery.page,limit:t.listQuery.limit,Name:t.listQuery.searchText});case 1:case"end":return e.stop()}}),e)})))()},handleSubmitPackage:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actEditSettingPoints(t.SettingPoint);case 2:i=e.sent,t.handleShowNotification(i),t.dialogCvTemplateEdit=!1,t.SettingPoint={name:"",point:0},t.getListSettingPoint();case 7:case"end":return e.stop()}}),e)})))()},redirectEditCvTemplates:function(t){this.dialogCvTemplateEdit=!0,this.SettingPoint.id=t.id,this.SettingPoint.name=t.name,this.SettingPoint.point=t.point},generateTitleView:l["a"]})},g=u,p=(i("dfa4"),i("2877")),v=Object(p["a"])(g,n,a,!1,null,"39e26f0c",null);e["default"]=v.exports},"8a8c":function(t,e,i){},dfa4:function(t,e,i){"use strict";i("8a8c")}}]);