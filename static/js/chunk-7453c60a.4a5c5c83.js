(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7453c60a"],{"0ed5":function(e,t,a){"use strict";var r=a("d4ec"),s=a("bee2"),i=a("727a"),n=function(){function e(){Object(r["a"])(this,e)}return Object(s["a"])(e,[{key:"getAll",value:function(){return Object(i["a"])({url:"/Citites/getAllCities",method:"get"})}}]),e}();t["a"]=new n},"1f5e":function(e,t,a){"use strict";a("cc27")},"64af":function(e,t,a){"use strict";a("7851")},7851:function(e,t,a){},b3fd:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"content",staticClass:"page-container"},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[a("form",{on:{submit:function(t){return t.preventDefault(),r(e.handleSubmitNews)}}},[a("sticky",{attrs:{"z-index":10}},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"left"},[void 0===e.idSelect?a("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("createNews","news")))]):a("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("editNews","news")))])]),a("div",{staticClass:"right"},[3===e.formCreate.newsType?a("vs-checkbox",{model:{value:e.formCreate.isHome,callback:function(t){e.$set(e.formCreate,"isHome",t)},expression:"formCreate.isHome"}},[e._v(e._s(e.generateTitleView("onHome","common")))]):e._e(),a("vs-checkbox",{model:{value:e.formCreate.isSlide,callback:function(t){e.$set(e.formCreate,"isSlide",t)},expression:"formCreate.isSlide"}},[e._v(e._s(e.generateTitleView("onSlide","common")))]),a("vs-checkbox",{model:{value:e.formCreate.comment,callback:function(t){e.$set(e.formCreate,"comment",t)},expression:"formCreate.comment"}},[e._v(e._s(e.generateTitleView("comment","common")))]),a("vs-checkbox",{model:{value:e.formCreate.isPublish,callback:function(t){e.$set(e.formCreate,"isPublish",t)},expression:"formCreate.isPublish"}},[e._v(e._s(e.generateTitleView("public","common")))]),void 0===e.idSelect?a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("createNews","news")))]):a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","common")))]),a("button",{staticClass:"btn btn-danger",attrs:{type:"reset"},on:{click:e.redirectNews}},[e._v(e._s(e.generateTitleView("cancel","common")))])],1)])]),a("div",{staticClass:"page-content"},[a("div",{staticClass:"inner_content bhs-card"},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("typeNews","news")))]),null===e.formCreate.newsType?a("div",{staticClass:"row-desc desc-create"},[e._v("Hãy chọn thể loại bài viết")]):e._e(),a("div",{staticClass:"row-wrap type-create "},e._l(e.listTypeNews,(function(t,r){return a("el-radio",{key:r,attrs:{label:t.value},model:{value:e.formCreate.newsType,callback:function(t){e.$set(e.formCreate,"newsType",t)},expression:"formCreate.newsType"}},[e._v(e._s(t.label))])})),1),3==e.formCreate.newsType?a("div",{staticStyle:{"margin-top":"15px","margin-bottom":"20px"}},[1==e.formCreate.seminarType?a("div",{staticClass:"wrap-address"},[a("div",{staticClass:"row-wrap__address"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("addressSeminar","news.seminar")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("addressSeminar","news.seminar")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.seminarAddress,expression:"formCreate.seminarAddress"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("addressSeminar","news.seminar")},domProps:{value:e.formCreate.seminarAddress},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"seminarAddress",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap__address"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("citySeminar","news.seminar")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("citySeminar","news.seminar")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{staticClass:"fullWidth",attrs:{clearable:"",filterable:"",placeholder:e.generateTitleView("selectAddressJob","jobs")},model:{value:e.formCreate.seminarCity,callback:function(t){e.$set(e.formCreate,"seminarCity",t)},expression:"formCreate.seminarCity"}},e._l(e.jobAddressOptions,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]):e._e(),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("timeSeminar","news.seminar")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("timeSeminar","news.seminar")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"Start Date","end-placeholder":"End Date","default-time":["00:00:00"]},model:{value:e.formCreate.seminarTime,callback:function(t){e.$set(e.formCreate,"seminarTime",t)},expression:"formCreate.seminarTime"}})],1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]):e._e(),a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("aboutNews","news")))]),3!==e.formCreate.newsType?a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("summaryNews","news")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("descriptionAbout","news")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("summaryNews","news")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.description,expression:"formCreate.description"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:e.formCreate.description},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"description",t.target.value)}}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1):e._e(),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("details","news")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("details","news")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("Tinymce",{ref:"editor",attrs:{height:470},model:{value:e.formCreate.content,callback:function(t){e.$set(e.formCreate,"content",t)},expression:"formCreate.content"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),3===e.formCreate.newsType?a("div",[a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("organizer","news.seminar")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("organizer","news.seminar")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.organizer,expression:"formCreate.organizer"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.generateTitleView("organizer","news.seminar")},domProps:{value:e.formCreate.organizer},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"organizer",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text desc-create"},[e._v(e._s(e.generateTitleView("speakers","course")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("speakers","course")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("el-select",{staticClass:"full-width",attrs:{multiple:"",filterable:"",placeholder:e.generateTitleView("selectSpeaker","course")},model:{value:e.formCreate.speaker,callback:function(t){e.$set(e.formCreate,"speaker",t)},expression:"formCreate.speaker"}},e._l(e.allSpeakers,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[e._v(e._s(t.name))])})),1),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]):e._e()]),a("div",{staticClass:"inner_info bhs-card"},[a("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("infoNews","news")))]),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("title","news")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("title","news")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.title,expression:"formCreate.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.formCreate.title},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"title",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),1==e.formCreate.seminarType&&3===e.formCreate.newsType?a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("fare","news.seminar"))+" "),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("fare","news.seminar")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.fare,expression:"formCreate.fare"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.formCreate.fare},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"fare",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]):e._e(),a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(" "+e._s(e.generateTitleView("default","news.category"))+" ")]),a("div",{staticClass:"package-wrap"},[0===e.listCategory.length?a("div",{staticClass:"no-item"},[e._v("Chưa có danh mục nào")]):a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("default","news.category")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("a-tree",{attrs:{"tree-data":e.listCategory,"replace-fields":{key:"id",title:"name"},checkable:"","show-icon":!0,"checked-keys":e.formCreate.categoryIds},model:{value:e.formCreate.categoryIds,callback:function(t){e.$set(e.formCreate,"categoryIds",t)},expression:"formCreate.categoryIds"}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]),3===e.formCreate.newsType?a("div",{staticClass:"row-wrap type-create"},[a("el-radio",{attrs:{label:1},model:{value:e.formCreate.seminarType,callback:function(t){e.$set(e.formCreate,"seminarType",t)},expression:"formCreate.seminarType"}},[e._v(e._s(e.generateTitleView("defaultStream","course")))]),a("el-radio",{attrs:{label:2},model:{value:e.formCreate.seminarType,callback:function(t){e.$set(e.formCreate,"seminarType",t)},expression:"formCreate.seminarType"}},[e._v(e._s(e.generateTitleView("onlineSeminars","course")))])],1):e._e(),a("div",{},[2!==e.formCreate.seminarType?a("div",{staticClass:"avatar-wrap"},[a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("image","news")))]),a("b-h-s-avatar",{attrs:{image:e.formCreate.avatar},model:{value:e.formCreate.avatar,callback:function(t){e.$set(e.formCreate,"avatar",t)},expression:"formCreate.avatar"}})],1)]):a("div",{staticClass:"row-wrap"},[a("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("stream","news.seminar")))]),a("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desOnlineSeminars","news.seminar")))]),a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("stream","news.seminar")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.video,expression:"formCreate.video"}],staticClass:"form-control",attrs:{type:"text",placeholder:"https://www.youtube.com/embed/NuWAl7-Vkwk"},domProps:{value:e.formCreate.video},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"video",t.target.value)}}}),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)]),3==e.formCreate.newsType?a("div",{staticClass:"inner-bottom bhs-card"},[a("speaker")],1):e._e()])])],1)]}}])})],1)},s=[],i=a("1da1"),n=a("5530"),o=(a("96cf"),a("d3b7"),a("2f62")),l=a("8256"),c=a("79fa"),d=a("b35e"),u=a("a896"),m=a("b804"),p=a("28ca"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"packages-table"},[r("div",{staticClass:"header"},[r("div",{staticClass:"header-title"},[r("div",{staticClass:"title"},[e._v(e._s(e.generateTitleView("listSpeakers","speakers")))]),r("div",{staticClass:"btn btn-primary",on:{click:e.openDialogAdd}},[e._v(e._s(e.generateTitleView("addNew","common")))])]),r("div",{staticClass:"header-search"},[r("vs-input",{staticClass:"full-width",attrs:{primary:"",placeholder:e.generateTitleView("searchByName","common")},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.getSpeaker(t))}},scopedSlots:e._u([{key:"icon",fn:function(){return[r("i",{staticClass:"bx bx-search"})]},proxy:!0}]),model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1)]),r("div",{staticClass:"body"},[0===e.totalSpeaker?r("div",{staticClass:"no-data"},[e._v(" "+e._s(e.generateTitleView("empty","common"))+" ")]):r("vs-table",{staticClass:"bhs-table",scopedSlots:e._u([{key:"thead",fn:function(){return[r("vs-tr",[r("vs-th",{staticStyle:{width:"150px"}},[e._v(" "+e._s(e.generateTitleView("Avatar","speakers"))+" ")]),r("vs-th",{staticStyle:{width:"300px"}},[e._v(" "+e._s(e.generateTitleView("name","speakers"))+" ")]),r("vs-th",{staticStyle:{width:"150px"}})],1)]},proxy:!0},{key:"tbody",fn:function(){return e._l(e.listSpeakers,(function(t,s){return r("vs-tr",{key:s,attrs:{data:t}},[r("vs-td",{staticClass:"td-avatar"},[null===t.avatar||""===t.avatar?r("img",{attrs:{src:a("b84e")}}):r("img",{attrs:{src:e.mediaFolder+t.avatar}})]),r("vs-td",{staticClass:"center"},[e._v(" "+e._s(t.name)+" ")]),r("vs-td",[r("div",{staticClass:"action-button"},[r("div",{staticClass:"btn btn-primary btn-edit__item",on:{click:function(a){return e.showUpdateSpeaker(t)}}},[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pen"}}),r("span",[e._v(e._s(e.generateTitleView("edit","common")))])],1),r("div",{staticClass:"btn btn-danger btn-remove__item",on:{click:function(a){return e.showDeleteSpeaker(t)}}},[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:"trash"}}),r("span",[e._v(e._s(e.generateTitleView("delete","common")))])],1)])])],1)}))},proxy:!0}])}),e.totalSpeaker>0?r("BHSPagination",{attrs:{background:"",total:e.totalSpeaker,page:e.listQuery.page,limit:e.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getSpeaker}}):e._e()],1),r("vs-dialog",{staticClass:"dialogPackage dialog",attrs:{"prevent-close":"",width:"500px",center:""},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.generateTitleView("addSpeaker","speakers"))+" ")])]},proxy:!0}]),model:{value:e.dialogSpeaker,callback:function(t){e.dialogSpeaker=t},expression:"dialogSpeaker"}},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit,s=t.reset;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.handleSubmitPackage)},reset:function(e){return e.preventDefault(),s(e)}}},[r("div",{staticClass:"folder-wrap"},[r("div",{staticClass:"title-wrap required-text"},[e._v(e._s(e.generateTitleView("name","speakers")))]),r("div",{staticClass:"item-wrap"},[r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("name","speakers")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("vs-input",{staticClass:"full-width",attrs:{border:"",placeholder:e.generateTitleView("name","speakers")},scopedSlots:e._u([{key:"icon",fn:function(){return[r("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:e.speakers.name,callback:function(t){e.$set(e.speakers,"name",t)},expression:"speakers.name"}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"item-wrap"},[r("div",{staticClass:"title-wrap required-text"},[e._v(e._s(e.generateTitleView("description","speakers")))]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("description","speakers")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("el-input",{staticClass:"full-width",attrs:{border:"",placeholder:e.generateTitleView("description","speakers"),type:"textarea",rows:4},scopedSlots:e._u([{key:"icon",fn:function(){return[r("i",{staticClass:"bx bx-copy-alt"})]},proxy:!0}],null,!0),model:{value:e.speakers.description,callback:function(t){e.$set(e.speakers,"description",t)},expression:"speakers.description"}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"item-wrap",on:{click:function(t){e.dialogSpeaker=!0}}},[r("div",{staticClass:"title-wrap required-text"},[e._v("Avatar")]),r("ValidationProvider",{attrs:{rules:"required",name:"Avatar"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("BHSAvatar",{attrs:{image:e.speakers.avatar},model:{value:e.speakers.avatar,callback:function(t){e.$set(e.speakers,"avatar",t)},expression:"speakers.avatar"}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)]),r("div",{staticClass:"con-footer"},[r("vs-button",{attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),r("vs-button",{attrs:{type:"reset",dark:"",transparent:""},on:{click:function(t){e.dialogSpeaker=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)])]}}])})],1),r("vs-dialog",{staticClass:"dialogDelete",attrs:{width:"350px",center:""},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin title-dialog"},[e._v(" "+e._s(e.generateTitleView("infoDialog","common"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"con-footer"},[r("vs-button",{on:{click:e.confirmDeleteSpeaker}},[e._v(" "+e._s(e.generateTitleView("confirm","common"))+" ")]),r("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(t){e.dialogDelete=!1}}},[e._v(" "+e._s(e.generateTitleView("cancel","common"))+" ")])],1)]},proxy:!0}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("div",{staticClass:"con-content"},[r("p",[e._v(" "+e._s(e.generateTitleView("confirmDelete","common"))),null!=e.selectedItem?r("span",{staticClass:"title-select"},[e._v('"'+e._s(e.selectedItem.name)+'" ')]):e._e(),e._v(" ? ")])])])],1)},f=[],w=a("b42a"),C=a("6c9c"),g={name:"Speaker",components:{BHSAvatar:u["a"],BHSPagination:w["a"]},mixins:[d["a"]],data:function(){return{dialogSpeaker:!1,listQuery:{page:1,limit:10},speakers:{name:"",avatar:"",description:"",isDelete:!1,isActive:!0},dialogDelete:!1,selectedItem:null,searchQuery:""}},computed:Object(n["a"])({},Object(o["c"])({listSpeakers:"speaker/listSpeakers",totalSpeaker:"speaker/totalSpeaker"})),mounted:function(){this.getSpeaker()},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])({actCreateSpeaker:"speaker/createSpeaker",actDeleteSpeaker:"speaker/deleteSpeaker",actGetSpeaker:"speaker/getPagination",actEditSpeaker:"speaker/editSpeaker",actGetDetail:"speaker/getSpeaker",actGetAllSpeaker:"speaker/getAllSpeaker"})),{},{generateTitleView:c["a"],handleSubmitPackage:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!=e.selectedItem){t.next=7;break}return t.next=3,e.actCreateSpeaker(e.speakers);case 3:a=t.sent,e.handleShowNotification(a),t.next=12;break;case 7:return t.next=9,e.actEditSpeaker(e.speakers);case 9:r=t.sent,e.handleShowNotification(r),e.selectedItem=null;case 12:e.speakers={name:"",isDelete:!1,avatar:"",description:""},e.dialogSpeaker=!1,e.getSpeaker();case 15:case"end":return t.stop()}}),t)})))()},getSpeaker:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actGetSpeaker({current_page:e.listQuery.page,limit:e.listQuery.limit,name:e.searchQuery});case 2:return t.next=4,e.actGetAllSpeaker();case 4:case"end":return t.stop()}}),t)})))()},showDeleteSpeaker:function(e){this.hasPermissionAction(C["a"].DELETE_SPEAKER,"",this.generateTitleView("noRole","common"))&&(this.dialogDelete=!0,this.selectedItem=e)},showUpdateSpeaker:function(e){var t=this;this.hasPermissionAction(C["a"].EDIT_SPEAKER,"",this.generateTitleView("noRole","common"))&&(this.selectedItem=e,this.dialogSpeaker=!0,this.actGetDetail(this.selectedItem.id).then((function(e){t.speakers=e.payload.records})))},confirmDeleteSpeaker:function(){this.actDeleteSpeaker(this.selectedItem),this.dialogDelete=!1,this.selectedItem=null,this.getSpeaker()},openDialogAdd:function(){this.hasPermissionAction(C["a"].CREATE_SPEAKER,"",this.generateTitleView("noRole","common"))&&(this.dialogSpeaker=!0)}})},k=g,_=(a("64af"),a("2877")),h=Object(_["a"])(k,v,f,!1,null,"1e832768",null),y=h.exports,b=(a("bc3a"),a("0ed5")),S={name:"NewsCreate",components:{Speaker:y,Sticky:m["a"],Tinymce:l["a"],BHSAvatar:u["a"]},mixins:[d["a"]],data:function(){return{mediaFolder:"https://admin.vieclamvanphong.vn/agency/Images/Recruitment/",listQuery:{page:1,limit:10},jobAddressOptions:[],formCreate:{seminarCity:"",description:"",content:"",newsType:1,isSlide:!1,isHome:!1,title:"",organizer:"",isPublish:!0,isActive:!0,avatar:"",video:null,Fare:"",seminarType:1,seminarTime:[],seminarAddress:"",speaker:[],comment:!0,categoryIds:[]},activeLoading:!1,idSelect:this.$route.params.id,listTypeNews:p["h"]}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["c"])({allSpeakers:"speaker/allSpeakers"})),Object(o["c"])({listCategory:"news/listCategory"})),{},{newsType:function(){return this.formCreate.newsType}}),watch:{newsType:{handler:function(){3!==this.newsType&&(this.seminarType=null),this.actGetCategory(this.formCreate.newsType)},deep:!0}},mounted:function(){this.actGetCategory(this.formCreate.newsType),this.getData(),this.actGetAllSpeaker(),this.getDataCity()},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])({actCreateNews:"news/createNews",actEditNews:"news/editNews",actGetInfoNews:"news/getInfoNews",actGetCategory:"news/getCateByTypeNews",actGetAllSpeaker:"speaker/getAllSpeaker"})),{},{getDataCity:function(){var e=this;return new Promise((function(t,a){b["a"].getAll().then((function(a){if(!a)throw a;t(a),e.jobAddressOptions=a.payload.records})).catch((function(e){a(e)}))}))},getData:function(){var e=this;this.showLoading(),void 0!==this.idSelect&&this.actGetInfoNews(this.idSelect).then((function(t){t&&t.isSuccess&&(e.formCreate=JSON.parse(JSON.stringify(t.payload.records)))})),this.closeLoading()},handleSubmitNews:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==e.idSelect){t.next=8;break}return e.formCreate.userId=e.userId,t.next=4,e.actCreateNews(e.formCreate);case 4:a=t.sent,e.handleShowNotification(a),t.next=13;break;case 8:return 2===e.formCreate.seminarType?e.formCreate.avatar="":e.formCreate.video="",t.next=11,e.actEditNews(e.formCreate);case 11:r=t.sent,e.handleShowNotification(r);case 13:e.redirectNews();case 14:case"end":return t.stop()}}),t)})))()},redirectNews:function(){this.$router.push("/news")},showLoading:function(){this.componentLoading=this.$vs.loading({type:"scale",target:this.$refs.content})},closeLoading:function(){this.componentLoading.close()},generateTitleView:c["a"]})},T=S,x=(a("1f5e"),Object(_["a"])(T,r,s,!1,null,"508f6805",null));t["default"]=x.exports},b84e:function(e,t,a){e.exports=a.p+"static/img/unnamed.e6801e57.jpg"},cc27:function(e,t,a){}}]);