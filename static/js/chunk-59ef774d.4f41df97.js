(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59ef774d"],{"60ede":function(e,t,r){"use strict";var a=r("7c02"),s=r.n(a);s.a},"7c02":function(e,t,r){},"992d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.handleSubmitCourse)}}},[r("sticky",{attrs:{"z-index":10}},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"left"},[void 0===e.idSelect?r("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("createCourse","course")))]):r("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("editCourse","course")))])]),r("div",{staticClass:"right"},[r("vs-checkbox",{model:{value:e.formCreate.isComment,callback:function(t){e.$set(e.formCreate,"isComment",t)},expression:"formCreate.isComment"}},[e._v(e._s(e.generateTitleView("comment","common")))]),r("vs-checkbox",{model:{value:e.formCreate.isActive,callback:function(t){e.$set(e.formCreate,"isActive",t)},expression:"formCreate.isActive"}},[e._v(e._s(e.generateTitleView("public","course")))]),void 0===e.idSelect?r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("createCourse","course")))]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","common")))]),r("button",{staticClass:"btn btn-danger",attrs:{type:"reset"},on:{click:e.redirectCourse}},[e._v(e._s(e.generateTitleView("cancel","common")))])],1)])]),r("div",{staticClass:"page-content"},[r("div",{staticClass:"inner_content bhs-card"},[r("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("courseInfo","course")))]),r("div",[r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("aboutCourse","course")))]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("aboutCourse","course")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("Tinymce",{ref:"editor",attrs:{height:470},model:{value:e.formCreate.description,callback:function(t){e.$set(e.formCreate,"description",t)},expression:"formCreate.description"}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text desc-create"},[e._v(e._s(e.generateTitleView("details","course")))]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("details","course")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("Tinymce",{ref:"editor",attrs:{height:470},model:{value:e.formCreate.content,callback:function(t){e.$set(e.formCreate,"content",t)},expression:"formCreate.content"}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)])]),r("div",{staticClass:"inner_info "},[r("div",{staticClass:"inner-top bhs-card"},[r("h4",{staticClass:"heading-create"},[e._v(e._s(e.generateTitleView("courseInfo","course")))]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("title","news")))]),r("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("title","news")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.title,expression:"formCreate.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.formCreate.title},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"title",t.target.value)}}}),r("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title "},[e._v(e._s(e.generateTitleView("link","course")))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.link,expression:"formCreate.link"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.formCreate.link},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"link",t.target.value)}}})]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("default","news.category")))]),r("div",{staticClass:"wrapper-select"},[r("a-tree",{attrs:{"tree-data":e.listParentCategories,"replace-fields":{key:"id",title:"name"},checkable:"","show-icon":!0,"checked-keys":e.formCreate.categoryIds},model:{value:e.formCreate.categoryIds,callback:function(t){e.$set(e.formCreate,"categoryIds",t)},expression:"formCreate.categoryIds"}})],1)]),r("div",{staticClass:"row-wrap"},[r("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("image","course")))]),r("b-h-s-avatar",{attrs:{image:e.formCreate.avatar},model:{value:e.formCreate.avatar,callback:function(t){e.$set(e.formCreate,"avatar",t)},expression:"formCreate.avatar"}})],1)])])])],1)]}}])})],1)},s=[],i=(r("4de4"),r("c975"),r("a434"),r("96cf"),r("1da1")),o=r("5530"),n=r("2f62"),c=r("8256"),l=r("79fa"),u=r("b35e"),d=r("a896"),m=r("b804"),C={name:"CourseCreate",components:{Sticky:m["a"],Tinymce:c["a"],BHSAvatar:d["a"]},mixins:[u["a"]],data:function(){return{mediaFolder:"http://oriwavenet.tk:19982/agency/Images/Recruitment/",formCreate:{content:"",link:"",title:"",isActive:!0,avatar:"",categoryIds:[],isComment:!0},inputVisible:!1,activeLoading:!1,idSelect:this.$route.params.id,listQuery:{page:1,litmit:10}}},computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])({listCategories:"course/listCategories",allSpeakers:"speaker/allSpeakers"})),{},{listParentCategories:function(){return this.listCategories.filter((function(e){return null==e.parentId||""===e.parentId}))}}),mounted:function(){this.getCourseDetail(),this.getAllCategory(),this.actGetAllSpeaker()},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])({actCreateCourse:"course/createCourse",actEditCourse:"course/editCourse",actGetCourseInfo:"course/getCourseInfo",getAllCategory:"course/getAllCategory",actGetDetail:"speaker/getSpeaker",actGetAllSpeaker:"speaker/getAllSpeaker"})),{},{getCourseDetail:function(){var e=this;void 0!==this.idSelect&&this.actGetCourseInfo(this.idSelect).then((function(t){t&&t.isSuccess&&(e.formCreate=t.payload.records)}))},handleClose:function(e){this.formCreate.speakers.splice(this.formCreate.speakers.indexOf(e),1)},handleSubmitCourse:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==e.idSelect){t.next=9;break}return e.formCreate.userId=e.userId,t.next=4,e.actCreateCourse(e.formCreate);case 4:r=t.sent,console.log(e.formCreate),e.handleShowNotification(r),t.next=13;break;case 9:return t.next=11,e.actEditCourse(e.formCreate);case 11:a=t.sent,e.handleShowNotification(a);case 13:e.redirectCourse();case 14:case"end":return t.stop()}}),t)})))()},redirectCourse:function(){this.$router.push("/course")},generateTitleView:l["a"],showInput:function(){this.inputVisible=!0}})},f=C,v=(r("60ede"),r("2877")),p=Object(v["a"])(f,a,s,!1,null,"10bb2c0e",null);t["default"]=p.exports}}]);