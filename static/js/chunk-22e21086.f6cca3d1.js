(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22e21086"],{"4f71":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"pageContainer",staticClass:"wrap"},[i("div",{staticClass:"media-header"},[i("upload-file",{attrs:{name:e.generateTitleView("selectImage","media")},on:{onUpload:e.onUploadMedia}}),i("button",{staticClass:"btn btn-primary",on:{click:e.openDialogFolder}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","folder"]}}),e._v(" "+e._s(e.generateTitleView("addFolder","media"))+" ")],1),i("button",{staticClass:"btn btn-danger",on:{click:function(t){e.dialogDelete=!0}}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","trash-alt"]}}),e._v(" "+e._s(e.generateTitleView("delete","common"))+" ")],1),i("vs-dialog",{staticClass:"dialog-folder",scopedSlots:e._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.folderTitle)+" ")])]},proxy:!0}]),model:{value:e.dialogFolder,callback:function(t){e.dialogFolder=t},expression:"dialogFolder"}},[i("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit,r=t.reset;return[i("form",{on:{submit:function(t){return t.preventDefault(),a(e.handleSubmitFolder)},reset:function(e){return e.preventDefault(),r(e)}}},[i("div",{staticClass:"folder-wrap"},[i("ValidationProvider",{attrs:{rules:"required",name:"Tên thư mục"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[i("input",{directives:[{name:"model",rawName:"v-model",value:e.folder.name,expression:"folder.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("folderName","media")},domProps:{value:e.folder.name},on:{input:function(t){t.target.composing||e.$set(e.folder,"name",t.target.value)}}}),i("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(t){e.dialogFolder=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)])]}}])})],1),i("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px","not-center":""},scopedSlots:e._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"con-footer"},[i("vs-button",{on:{click:e.confirmDeleteFolder}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(t){e.dialogDelete=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[i("div",{staticClass:"con-content"},[i("p",[e._v(" "+e._s(e.generateTitleView("confirmDelete","common"))+" ")])])])],1),i("div",{staticClass:"media-search"},[i("folder-bread-crumb"),i("div",{staticClass:"search-form"},[i("font-awesome-icon",{staticClass:"search-icon",attrs:{icon:"search"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.listQuery.name,expression:"listQuery.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("searchFolder","media")},domProps:{value:e.listQuery.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getListFolder(t)},input:function(t){t.target.composing||e.$set(e.listQuery,"name",t.target.value)}}})],1)],1),i("div",{staticClass:"media-content"},[i("div",{staticClass:"left"},[i("folder-list",{attrs:{"selected-folder":e.selectedFolder,"list-folder":e.listFolder,"list-files":e.listFiles},on:{"one-click":e.oneClick,"dbl-click":e.dblClick}})],1),i("div",{staticClass:"right"},[null!=e.selectedFolder.id?i("folder-select",{attrs:{"selected-folder":e.selectedFolder},on:{"edit-folder":e.editFolder}}):e._e(),null!=e.selectedFile.id?i("file-selected"):e._e()],1)]),i("b-h-s-pagination",{directives:[{name:"show",rawName:"v-show",value:e.totalFiles,expression:"totalFiles"}],staticClass:"pagination",attrs:{total:e.totalFiles,"page-sizes":[15,30,45,60],page:e.listQuery.current_page,limit:e.listQuery.page_size},on:{"update:page":function(t){return e.$set(e.listQuery,"current_page",t)},"update:limit":function(t){return e.$set(e.listQuery,"page_size",t)},pagination:e.getListFolder}})],1)},r=[],l=(i("b0c0"),i("96cf"),i("1da1")),o=i("5530"),n=i("b35e"),s=i("2f62"),d=i("a7ca"),c=i.n(d),u=i("409d"),m=i("c9da"),f=i("0e2f"),p=i("b42a"),g=i("4c17"),F=i("e0d2"),v=i("79fa"),h={name:"MediaCategoryDetail",components:{Card:c.a,FolderSelect:u["a"],UploadFile:m["a"],FolderList:f["a"],BHSPagination:p["a"],FileSelected:g["a"],FolderBreadCrumb:F["a"]},mixins:[n["a"]],data:function(){return{dialogDelete:!1,loading:!1,isEditFolder:!1,dialogFolder:!1,folderTitle:this.generateTitleView("folderInfo","media"),folder:{name:"",parentId:"",isActive:!0,isDelete:!1},listQuery:{name:"",parentId:"",current_page:1,page_size:15}}},computed:Object(o["a"])({},Object(s["c"])({totalFolder:"media/totalFolder",listFolder:"media/listFolder",listFiles:"media/listFiles",selectedFolder:"media/selectedFolder",totalFiles:"media/totalFiles",selectedFile:"media/selectedFile"})),mounted:function(){this.actGetBreadcrumb(this.$router.currentRoute.params.id),this.listQuery={parentId:this.$router.currentRoute.params.id,name:"",current_page:1,page_size:15},this.getListFolder(),this.mutSelectFolder({})},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["d"])({mutSelectFolder:"media/selectFolder",mutAddMediaFile:"media/addMediaFile"})),Object(s["b"])({actCreateFolder:"media/createFolder",actGetListFolder:"media/getAllFolderByParent",actDeleteFolder:"media/deleteFolder",actDeleteFile:"media/deleteFile",actGetBreadcrumb:"media/getBreadcrumb"})),{},{openDialogFolder:function(){this.folder.name="",this.isEditFolder=!1,this.dialogFolder=!0},closeDialogFolder:function(){this.dialogFolder=!1},handleSubmitFolder:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.folder.userId=e.userId,e.folder.parentId=e.$router.currentRoute.params.id,t.next=4,e.actCreateFolder(e.folder);case 4:i=t.sent,e.handleShowNotification(i),e.closeDialogFolder(),e.getListFolder();case 8:case"end":return t.stop()}}),t)})))()},getListFolder:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.$vs.loading({type:"scale",target:e.$refs.pageContainer}),t.next=3,e.actGetListFolder({parentId:e.listQuery.parentId,name:e.listQuery.name,userId:e.userId,current_page:e.listQuery.current_page,page_size:e.listQuery.page_size});case 3:i.close();case 4:case"end":return t.stop()}}),t)})))()},confirmDeleteFolder:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!=e.selectedFolder.id||void 0!==e.selectedFile.id){t.next=4;break}e.openNotification("top-right","warn","",e.generateTitleView("infoDialog","common"),e.generateTitleView("selectToDelete","media")),t.next=14;break;case 4:if(null==e.selectedFolder.id){t.next=9;break}return t.next=7,e.actDeleteFolder(e.selectedFolder.id);case 7:t.next=12;break;case 9:if(null==e.selectedFile.id){t.next=12;break}return t.next=12,e.actDeleteFile(e.selectedFile.id);case 12:e.getListFolder(),e.dialogDelete=!1;case 14:case"end":return t.stop()}}),t)})))()},redirectFolderDetail:function(e){this.$router.push("/media/folder/"+e.id)},oneClick:function(e){this.mutSelectFolder(e)},dblClick:function(e){this.redirectFolderDetail(e)},editFolder:function(){this.isEditFolder=!0,this.dialogFolder=!0,this.folder={name:this.selectedFolder.name,isActive:!0,isDelete:!1}},onUploadMedia:function(e){e.isSuccess&&this.mutAddMediaFile(e.payload)},generateTitleView:v["a"]})},b=h,w=(i("5fee"),i("2877")),_=Object(w["a"])(b,a,r,!1,null,"b0ca8da4",null);t["default"]=_.exports},"5fee":function(e,t,i){"use strict";var a=i("f106"),r=i.n(a);r.a},f106:function(e,t,i){}}]);