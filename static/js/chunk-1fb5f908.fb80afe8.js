(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fb5f908"],{"1c14":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"page-header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listCVTemplates","cvTemplate")))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"search-type"},[i("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:t.generateTitleView("searchByTitle","common")},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getCVTemplate(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:t.listQuery.searchText,callback:function(e){t.$set(t.listQuery,"searchText",e)},expression:"listQuery.searchText"}})],1)])]),i("div",{staticClass:"page-content"},[0===t.totalCVTemplates?i("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):i("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[i("vs-tr",[i("vs-th",{staticStyle:{width:"100px"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v("Trạng thái hoạt động")])]),i("vs-th",{staticClass:"title",staticStyle:{width:"30%"}},[i("div",{staticClass:"title-list",attrs:{align:"left"}},[t._v("Tên mẫu CV")])]),i("vs-th",{staticStyle:{width:"150px"}},[i("div",{staticClass:"title-list "},[t._v(" Ảnh")])]),i("vs-th",{staticStyle:{width:"15%"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v("Không mất phí")])]),i("vs-th",{staticStyle:{width:"100px"}},[i("div",{staticClass:"title-list",attrs:{align:"center"}},[t._v("Điểm để mở mẫu CV")])]),i("vs-th",{staticStyle:{width:"160px"}},[i("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("Action","settingpoint")))])])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listCVTemplates,(function(e,s){return i("vs-tr",{key:s,attrs:{data:e}},[i("vs-td",[i("vs-checkbox",{attrs:{disabled:""},model:{value:e.isActive,callback:function(a){t.$set(e,"isActive",a)},expression:"item.isActive"}})],1),i("vs-td",{attrs:{align:"left"}},[i("span",{staticClass:"title-item"},[t._v(t._s(e.templateName))])]),i("vs-td",[i("div",{staticClass:"thumbnail-item"},[""!==e.image&&e.image?i("img",{attrs:{src:t.mediaFolder+e.image}}):i("img",{attrs:{src:a("afa5")}})])]),i("vs-td",{attrs:{align:"center"}},[i("vs-checkbox",{attrs:{disabled:""},model:{value:e.isFree,callback:function(a){t.$set(e,"isFree",a)},expression:"item.isFree"}})],1),i("vs-td",{attrs:{align:"center"}},[i("span",{staticClass:"title-item"},[t._v(t._s(e.point))])]),i("vs-td",{attrs:{align:"center"}},[i("button",{staticClass:"btn btn-primary btn-edit__item action-button",on:{click:function(a){return t.openEditCvTemplates(e)}}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pen"}}),i("span",[t._v(t._s(t.generateTitleView("edit","common")))])],1)])],1)}))},proxy:!0}])}),t.totalCVTemplates>0?i("BHSPagination",{attrs:{background:"",total:t.totalCVTemplates,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getCVTemplate}}):t._e(),i("vs-dialog",{staticClass:"dialogPackage dialog",attrs:{width:"350px",center:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("h4",{staticClass:"not-margin title-dialog"},[t._v(" "+t._s(t.generateTitleView("titleEdit","cvTemplate"))+" ")])]},proxy:!0}]),model:{value:t.dialogCvTemplateEdit,callback:function(e){t.dialogCvTemplateEdit=e},expression:"dialogCvTemplateEdit"}},[i("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit,s=e.reset;return[i("form",{on:{submit:function(e){return e.preventDefault(),a(t.handleSubmitCV)},reset:function(t){return t.preventDefault(),s(t)}}},[i("div",{staticClass:"folder-wrap"},[i("ValidationProvider",{attrs:{rules:"required",name:"Tên mẫu"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[i("vs-input",{staticClass:"full-width",attrs:{border:"",placeholder:t.generateTitleView("TemplateName","cvTemplate")},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:t.cvTemplate.templateName,callback:function(e){t.$set(t.cvTemplate,"templateName",e)},expression:"cvTemplate.templateName"}}),i("span",{staticClass:"vee-errors"},[t._v(t._s(a[0]))])]}}],null,!0)}),i("div",{staticClass:"folder-wrap"},[i("ValidationProvider",{attrs:{rules:"required|number",name:"Số điểm"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[i("vs-input",{staticClass:"full-width",attrs:{border:"",placeholder:t.generateTitleView("Point","cvTemplate")},scopedSlots:t._u([{key:"icon",fn:function(){return[i("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:t.cvTemplate.point,callback:function(e){t.$set(t.cvTemplate,"point",e)},expression:"cvTemplate.point"}}),i("span",{staticClass:"vee-errors"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),i("div",{staticClass:"folder-wrap"},[i("input",{ref:"file",staticClass:"full-width form-control",attrs:{id:"file",type:"file"},on:{change:t.onFileChange}})]),i("div",{staticClass:"folder-wrap"},[i("vs-checkbox",{model:{value:t.cvTemplate.isActive,callback:function(e){t.$set(t.cvTemplate,"isActive",e)},expression:"cvTemplate.isActive"}},[t._v(" "+t._s(t.generateTitleView("IsActive","cvTemplate"))+" ")])],1),i("div",{staticClass:"folder-wrap"},[i("vs-checkbox",{model:{value:t.cvTemplate.isFree,callback:function(e){t.$set(t.cvTemplate,"isFree",e)},expression:"cvTemplate.isFree"}},[t._v(" Không mất phí ")])],1),i("div",{staticClass:"con-footer"},[i("vs-button",{attrs:{type:"submit"}},[t._v(" "+t._s(t.generateTitleView("confirm","common"))+" ")]),i("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(e){t.dialogCvTemplateEdit=!1}}},[t._v(" "+t._s(t.generateTitleView("cancel","common"))+" ")])],1)],1)])]}}])})],1)],1)])},s=[],l=a("1da1"),n=a("5530"),r=(a("96cf"),a("d3b7"),a("b0c0"),a("2f62")),c=a("79fa"),o=a("b42a"),p=a("b35e"),m=function(t){return new Promise((function(e,a){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){return e(i.result)},i.onerror=function(t){return a(t)}}))},u={name:"ListCVTemplates",components:{BHSPagination:o["a"]},mixins:[p["a"]],data:function(){return{file:null,listQuery:{userType:1,page:1,limit:10,searchText:"",expiredDate:null},isActive:!1,isFree:!1,searchQuery:"",DialogDelete:!1,itemSelect:{},dialogCvTemplateEdit:!1,dialogAcceptEdit:!1,cvTemplate:{templateName:"",IsActive:!1,isFree:!1,point:0},selectedItem:{},checked:!0}},computed:Object(n["a"])({},Object(r["c"])({listCVTemplates:"cvtemplate/listCVTemplates",totalCVTemplates:"cvtemplate/totalCVTemplates"})),mounted:function(){this.getCVTemplate()},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])({actGetCVTemplate:"cvtemplate/getPagination",actEditTemplate:"cvtemplate/edit"})),{},{onFileChange:function(){var t=this.$refs.file.files[0];this.file=t},handleSubmitCV:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.file,i=JSON.parse(JSON.stringify(t.cvTemplate)),!a){e.next=6;break}m(a).then((function(e){var s=e,l=a.name.substr(a.name.lastIndexOf(".")+1);i.base64Image=s,i.extension=l,t.actEditTemplate(i)})),e.next=10;break;case 6:return e.next=8,t.actEditTemplate(t.cvTemplate);case 8:s=e.sent,t.handleShowNotification(s);case 10:t.selectedItem=null,t.cvTemplate={templateName:"",isActive:!1,isFree:!1,point:0},t.dialogCvTemplateEdit=!1,t.getCVTemplate();case 14:case"end":return e.stop()}}),e)})))()},getCVTemplate:function(){this.actGetCVTemplate({current_page:this.listQuery.page,limit:this.listQuery.limit,TemplateName:this.listQuery.searchText})},openEditCvTemplates:function(t){this.dialogCvTemplateEdit=!0,console.log(t);var e={id:t.id,isFree:t.isFree,isActive:t.isActive,point:t.point,templateName:t.templateName};this.cvTemplate=e},generateTitleView:c["a"]})},d=u,v=(a("35a7"),a("2877")),f=Object(v["a"])(d,i,s,!1,null,"167b10ed",null);e["default"]=f.exports},"20ce":function(t,e,a){},"35a7":function(t,e,a){"use strict";a("20ce")}}]);