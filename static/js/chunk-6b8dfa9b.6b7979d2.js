(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b8dfa9b"],{"8e61":function(e,t,a){"use strict";a("e28d")},e28d:function(e,t,a){},f0c8:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"inner_content bhs-card"},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[a("form",{on:{submit:function(t){return t.preventDefault(),r(e.handleSubmitCategory)}}},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("crtCategory","news.category")))]),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("nameCategory","news.category")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desNameCategory","news.category")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("nameCategory","news.category")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.name,expression:"formCreate.name"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:e.formCreate.name},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"name",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("parentCategory","news.category")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desParentCategory","news.category")))]),a("el-select",{attrs:{clearable:"",placeholder:e.generateTitleView("selectCategory","course")},model:{value:e.formCreate.parentId,callback:function(t){e.$set(e.formCreate,"parentId",t)},expression:"formCreate.parentId"}},e._l(e.parentListSelect,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("imageCategory","news.category")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desImgCategory","news.category")))]),a("b-h-s-avatar",{attrs:{image:e.formCreate.thumbnail},model:{value:e.formCreate.thumbnail,callback:function(t){e.$set(e.formCreate,"thumbnail",t)},expression:"formCreate.thumbnail"}})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title  desc-create"},[e._v(e._s(e.generateTitleView("descriptionCategory","news.category")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desDescriptionCategory","news.category"))+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.description,expression:"formCreate.description"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:e.formCreate.description},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"description",t.target.value)}}})]),a("div",{staticClass:"button-action"},[a("button",{staticClass:"btn btn-reset",attrs:{type:"reset"}},[e._v(e._s(e.generateTitleView("reset","common")))]),void 0===e.$route.params.id?a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("crtCategory","news.category"))+" ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","common")))])])])]}}])})],1),a("div",{staticClass:"inner_info bhs-card"},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("listCategory","news.category")))]),a("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:e.generateTitleView("searchCategory","search")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchItem(t)}},scopedSlots:e._u([{key:"icon",fn:function(){return[a("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),a("el-tree",{ref:"tree",attrs:{data:e.parentList,label:e.parentList.name,children:e.parentList.children,"node-key":"parentList.id","filter-node-method":e.filterNode},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var r=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(e.truncate(r.name,15)))]),a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"ellipsis-h"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("div",{staticClass:"btn-menu",on:{click:function(t){return e.selectEditCategory(r.id)}}},[e._v(e._s(e.generateTitleView("editInfo","course")))])]),a("el-dropdown-item",{attrs:{divided:""}},[a("div",{staticClass:"btn-menu",on:{click:function(t){return e.removeCategory(r)}}},[e._v(e._s(e.generateTitleView("deleteCategory","course")))])])],1)],1)],1)}}])})],1)]),a("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px"},scopedSlots:e._u([{key:"header",fn:function(){return[a("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"con-footer"},[a("vs-button",{on:{click:e.confirmDelete}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),a("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("div",{staticClass:"con-content"},[a("p",[e._v(" "+e._s(e.generateTitleView("confirmDelete","common"))+' "'),null!=e.selectedItem?a("b",[e._v(e._s(e.truncate(e.selectedItem.name,15)))]):e._e(),e._v('" ? ')])])])],1)},n=[],i=a("b85c"),o=a("1da1"),s=a("5530"),c=(a("96cf"),a("4de4"),a("b0c0"),a("a4d3"),a("e01a"),a("2f62")),l=a("79fa"),u=a("b35e"),d=a("a896"),m=a("6c9c"),g={name:"CourseCategory",components:{BHSAvatar:d["a"]},mixins:[u["a"]],data:function(){return{filterText:"",deleteDialog:!1,selectedItem:null,mediaFolder:"https://oriwavenet.xyz/agency/Images/Recruitment/",listQuery:{page:1,limit:10},formCreate:{name:"",description:"",thumbnail:"",isActive:!0,isDelete:!1,userId:this.userId,parentId:null},idSelect:this.$route.params.id,activeLoading:!1,searchQuery:""}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])({listCategory:"news/listCategory",listTotalCategory:"news/listTotalCategory",parentList:"course/categoryParentList"})),{},{parentListSelect:function(){var e=this;return this.parentList.filter((function(t){return t.id!==e.idSelect}))}}),watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.getData(),this.getAllParentCate()},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])({actCreateCategory:"course/createCategory",actEditCategory:"course/editCategory",actRemoveCategory:"course/removeCategory",actGetInfoCategory:"course/getInfoCategory",actGetAllCategoryByParent:"news/getAllCategoryByParent",actGetAllParentCategory:"course/getAllCategoryParent"})),{},{getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showLoading(),void 0!==e.idSelect&&e.getInfoCategory(e.idSelect),e.closeLoading();case 3:case"end":return t.stop()}}),t)})))()},handleSubmitCategory:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==e.idSelect){t.next=12;break}if(!e.hasPermissionAction(m["a"].CREATE_COURSE,"",e.generateTitleView("noRole","common"))){t.next=10;break}return t.next=4,e.actCreateCategory(e.formCreate);case 4:a=t.sent,e.handleShowNotification(a),e.formCreate.name="",e.formCreate.parentId=null,e.formCreate.thumbnail="",e.formCreate.description="";case 10:t.next=17;break;case 12:return t.next=14,e.actEditCategory(e.formCreate);case 14:r=t.sent,e.handleShowNotification(r),e.$router.push("/course/category/");case 17:return t.next=19,e.getAllParentCate();case 19:return t.next=21,e.getData();case 21:case"end":return t.stop()}}),t)})))()},searchItem:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},getParent:function(){var e,t=Object(i["a"])(this.listCategory);try{for(t.s();!(e=t.n()).done;){var a=e.value;null===a.parentId&&this.parentList.push(a)}}catch(r){t.e(r)}finally{t.f()}return this.parentList},selectEditCategory:function(e){this.hasPermissionAction(m["a"].EDIT_COURSE,"course/category/edit/"+e,this.generateTitleView("noRole","common"))},getInfoCategory:function(e){var t=this;console.log(e),this.actGetInfoCategory(e).then((function(e){t.formCreate=e.payload.records}))},removeCategory:function(e){this.hasPermissionAction(m["a"].DELETE_COURSE,"",this.generateTitleView("noRole","common"))&&(this.selectedItem=e,this.deleteDialog=!0)},confirmDelete:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actRemoveCategory(e.selectedItem);case 2:if(a=t.sent,a.isSuccess){t.next=7;break}e.handleShowNotification(a),t.next=14;break;case 7:return e.handleShowNotification(a),e.deleteDialog=!1,e.$router.push("/course/category/"),t.next=12,e.getAllParentCate();case 12:return t.next=14,e.getData();case 14:case"end":return t.stop()}}),t)})))()},getAllParentCate:function(){this.actGetAllParentCategory(this.idSelect)},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},generateTitleView:l["a"]})},f=g,C=(a("8e61"),a("2877")),p=Object(C["a"])(f,r,n,!1,null,"94a2e0ce",null);t["default"]=p.exports}}]);