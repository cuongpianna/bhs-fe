(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db57de6"],{"01c7":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"inner_content bhs-card"},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.handleSubmit;return[a("form",{on:{submit:function(t){return t.preventDefault(),o(e.handleSubmitCategory)}}},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("createCategory","jobCategory")))]),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("nameCategory","jobCategory")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desNameCategory","jobCategory")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("desNameCategory","jobCategory")},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.name,expression:"formCreate.name"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:e.formCreate.name},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"name",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(o[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("color","jobCategory")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desColor","jobCategory")))]),a("el-color-picker",{model:{value:e.formCreate.color,callback:function(t){e.$set(e.formCreate,"color",t)},expression:"formCreate.color"}})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("imageCategory","jobCategory")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desImgCategory","jobCategory")))]),a("b-h-s-avatar",{attrs:{image:e.formCreate.icon},model:{value:e.formCreate.icon,callback:function(t){e.$set(e.formCreate,"icon",t)},expression:"formCreate.icon"}})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title  desc-create"},[e._v(e._s(e.generateTitleView("descriptionCategory","jobCategory")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.description,expression:"formCreate.description"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:e.formCreate.description},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"description",t.target.value)}}})]),a("div",{staticClass:"button-action"},[a("button",{staticClass:"btn btn-reset",attrs:{type:"reset"}},[e._v(e._s(e.generateTitleView("reset","common")))]),void 0===e.$route.params.id?a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("crtCategory","news.category"))+" ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","common")))])])])]}}])})],1),a("div",{staticClass:"inner_info bhs-card"},[a("div",{staticClass:"header-list__category"},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("listCategory","jobCategory")))]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.idSelect,expression:"idSelect"}],staticClass:"btn btn-primary",on:{click:e.redirectCreate}},[e._v(e._s(e.generateTitleView("create","jobCategory")))])]),a("div",{staticClass:"categories_wrap"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.jobCategories,expression:"jobCategories"}],staticClass:"cate-list"},e._l(e.jobCategories,(function(t,o){return a("div",{key:o,staticClass:"cate-item"},[a("div",{staticClass:"inner"},[a("span",[e._v(e._s(t.name))]),a("div",{staticClass:"wrap-color"},[a("div",{staticClass:"color-category",style:{"background-color":t.color}}),a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("div",{staticClass:"btn-menu",on:{click:function(a){return e.selectEditJobCategory(t.id)}}},[e._v(e._s(e.generateTitleView("editInfo","course"))+" ")])]),a("el-dropdown-item",{attrs:{divided:""}},[a("div",{staticClass:"btn-menu",on:{click:function(a){return e.removeCategory(t)}}},[e._v(e._s(e.generateTitleView("deleteCategory","course"))+" ")])])],1)],1)],1)])])})),0)])])]),a("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px"},scopedSlots:e._u([{key:"header",fn:function(){return[a("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"con-footer"},[a("vs-button",{on:{click:e.confirmDelete}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),a("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("div",{staticClass:"con-content"},[a("p",[e._v(" "+e._s(e.generateTitleView("confirmDelete","common"))+' "'),null!=e.selectedItem?a("b",[e._v(e._s(e.selectedItem.name))]):e._e(),e._v('" ? ')])])])],1)},r=[],i=(a("4de4"),a("c975"),a("b0c0"),a("96cf"),a("1da1")),s=a("5530"),n=a("2f62"),c=a("b35e"),l=a("a896"),d=a("6c9c"),g={name:"JobCategoryIndex",components:{BHSAvatar:l["a"]},mixins:[c["a"]],data:function(){return{filterText:"",deleteDialog:!1,selectedItem:null,mediaFolder:"https://admin.vieclamvanphong.vn/agency/Images/Recruitment/",listQuery:{page:1,limit:10},formCreate:{name:"",description:"",icon:"",isActive:!0,isDelete:!1,jobCount:0,color:""},idSelect:this.$route.params.id,activeLoading:!1,searchQuery:""}},computed:Object(s["a"])(Object(s["a"])({},Object(n["c"])({listCategory:"news/listCategory",listTotalCategory:"news/listTotalCategory",parentList:"course/categoryParentList",jobCategories:"jobCategory/allJobCategories"})),{},{parentListSelect:function(){var e=this;return this.parentList.filter((function(t){return t.id!==e.idSelect}))}}),watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.actGetAllJobCategory(),this.getData()},methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])({actCreateJobCategory:"jobCategory/create",actEditCategory:"jobCategory/edit",actRemoveCategory:"jobCategory/delete",actGetInfoCategory:"jobCategory/getDetail",actGetAllJobCategory:"jobCategory/getAll"})),{},{getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showLoading(),void 0!==e.idSelect&&e.getInfoCategory(e.idSelect),e.closeLoading();case 3:case"end":return t.stop()}}),t)})))()},handleSubmitCategory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==e.idSelect){t.next=9;break}if(!e.hasPermissionAction(d["a"].CREATE_JOB_CATEGORY,"",e.generateTitleView("noRole","common"))){t.next=7;break}return t.next=4,e.actCreateJobCategory(e.formCreate);case 4:a=t.sent,e.handleShowNotification(a),e.actGetAllJobCategory();case 7:t.next=14;break;case 9:return t.next=11,e.actEditCategory(e.formCreate);case 11:o=t.sent,e.handleShowNotification(o),e.actGetAllJobCategory();case 14:case"end":return t.stop()}}),t)})))()},selectEditJobCategory:function(e){this.hasPermissionAction(d["a"].EDIT_JOB_CATEGORY,"job-category/edit/"+e,this.generateTitleView("noRole","common"))},getInfoCategory:function(e){var t=this;this.actGetInfoCategory(e).then((function(e){t.formCreate=e.payload.records}))},removeCategory:function(e){this.hasPermissionAction(d["a"].DELETE_JOB_CATEGORY,"",this.generateTitleView("noRole","common"))&&(this.selectedItem=e,this.deleteDialog=!0)},confirmDelete:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actRemoveCategory(e.selectedItem);case 2:a=t.sent,a.isSuccess?(e.handleShowNotification(a),e.idSelect?e.$router.push("/job-category"):(e.deleteDialog=!1,e.actGetAllJobCategory(),e.resetFormCreate())):e.handleShowNotification(a);case 4:case"end":return t.stop()}}),t)})))()},getAllParentCate:function(){this.actGetAllParentCategory(this.idSelect)},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},redirectCreate:function(){this.hasPermissionAction(d["a"].CREATE_JOB_CATEGORY,"job-category",this.generateTitleView("noRole","common"))},resetFormCreate:function(){this.formCreate={name:"",description:"",icon:"",isActive:!0,isDelete:!1,jobCount:0}}})},u=g,m=(a("d334"),a("2877")),C=Object(m["a"])(u,o,r,!1,null,"26cd9ffa",null);t["default"]=C.exports},d334:function(e,t,a){"use strict";var o=a("f51d"),r=a.n(o);r.a},f51d:function(e,t,a){}}]);