(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67346538"],{"0ed5":function(e,t,s){"use strict";var i=s("d4ec"),a=s("bee2"),r=s("727a"),n=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return Object(r["a"])({url:"/Citites/getAllCities",method:"get"})}}]),e}();t["a"]=new n},a02f:function(e,t,s){},afbe:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"content",staticClass:"page-container"},[s("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.handleSubmit;return[s("form",{on:{submit:function(t){return t.preventDefault(),i(e.handleSubmitNews)}}},[s("sticky",{attrs:{"z-index":10}},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"left"},[void 0===e.idSelect?s("div",{staticClass:"meta-title"},[e._v(" "+e._s(e.generateTitleView("createQuestionTests","questionTest"))+" ")]):s("div",{staticClass:"meta-title"},[e._v(e._s(e.generateTitleView("editQuestionTests","questionTest")))])]),s("div",{staticClass:"right"},[void 0===e.idSelect?s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.generateTitleView("createQuestionTests","questionTest"))+" ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.generateTitleView("save","common")))]),s("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[e._v(e._s(e.generateTitleView("cancel","common"))+" ")])])])]),s("div",{staticClass:"page-content"},[s("div",{staticClass:"inner_content bhs-card"},[s("h4",{staticClass:"heading-create",attrs:{"data-v-21238f14":""}},[e._v("Thông tin câu hỏi")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.addQuestion}},[e._v(" "+e._s(e.generateTitleView("createQuestion","questionTest"))+" ")]),e._l(e.formCreate.question,(function(t,i){return s("div",{key:i,staticClass:"question-info"},[s("div",{staticClass:"question-index"},[s("h3",[e._v("Câu hỏi số ["+e._s(i+1)+"] ")]),e._v(" "),s("label",{staticClass:"delete-question-label",on:{click:function(t){return e.deleteQuestion(i)}}},[e._v(" Xóa câu hỏi ")])]),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("name","questionTest")))]),s("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desNamequestionTest","questionTest")))]),s("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("name","questionTest")},scopedSlots:e._u([{key:"default",fn:function(i){var a=i.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"item.name"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:t.name},on:{input:function(s){s.target.composing||e.$set(t,"name",s.target.value)}}}),s("span",{staticClass:"vee-errors"},[e._v(e._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title  desc-create"},[e._v(e._s(e.generateTitleView("desc","questionTest")))]),s("tinymce",{staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},model:{value:t.desc,callback:function(s){e.$set(t,"desc",s)},expression:"item.desc"}})],1),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("imageCategory","jobCategory")))]),s("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desImgQuestionTest","questionTest")))]),s("b-h-s-avatar",{attrs:{image:t.icon},model:{value:t.thumb,callback:function(s){e.$set(t,"thumb",s)},expression:"item.thumb"}})],1),s("div",{staticClass:"row-wrap checkbox-active"},[s("vs-checkbox",{model:{value:t.isActive,callback:function(s){e.$set(t,"isActive",s)},expression:"item.isActive"}},[e._v(" "+e._s(e.generateTitleView("isActive","questionTest"))+" ")])],1),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("listAswers","questionTest")))]),s("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("descriptionAnswer","questionTest")))]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.addAnswer(i)}}},[e._v(" "+e._s(e.generateTitleView("createAnswers","questionTest"))+" ")]),e._l(t.objAnswer,(function(t,i){return s("el-radio-group",{key:i,model:{value:e.isCorrect,callback:function(t){e.isCorrect=t},expression:"isCorrect"}},[s("el-radio",{staticClass:"answer-item",attrs:{label:"pa1"+i,title:"tích chọn đáp án đúng"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"it.name"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:t.name},on:{input:function(s){s.target.composing||e.$set(t,"name",s.target.value)}}}),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.removeAnswer(i)}}},[s("i",{staticClass:"bx bx-trash"})])])],1)}))],2)])}))],2),s("div",{staticClass:"inner_info bhs-card"},[s("h4",{staticClass:"heading-create",attrs:{"data-v-21238f14":""}},[e._v("Thông tin bộ câu hỏi")]),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title required-text"},[e._v(e._s(e.generateTitleView("name","courseTest")))]),s("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desNameCourseTest","courseTest")))]),s("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("name","questionTest")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreate.name,expression:"formCreate.name"}],staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},domProps:{value:e.formCreate.name},on:{input:function(t){t.target.composing||e.$set(e.formCreate,"name",t.target.value)}}}),s("span",{staticClass:"vee-errors"},[e._v(e._s(i[0]))])]}}],null,!0)})],1),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title  desc-create"},[e._v(e._s(e.generateTitleView("descriptionCategory","jobCategory")))]),s("tinymce",{staticClass:"form-control ",attrs:{"auto-resize":!0,rows:"5"},model:{value:e.formCreate.desc,callback:function(t){e.$set(e.formCreate,"desc",t)},expression:"formCreate.desc"}})],1),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title"},[e._v(e._s(e.generateTitleView("imageCategory","jobCategory")))]),s("div",{staticClass:"row-desc desc-create"},[e._v(e._s(e.generateTitleView("desImgQuestionTest","questionTest")))]),s("b-h-s-avatar",{attrs:{image:e.formCreate.icon},model:{value:e.formCreate.thumb,callback:function(t){e.$set(e.formCreate,"thumb",t)},expression:"formCreate.thumb"}})],1),s("div",{staticClass:"row-wrap"},[s("div",{staticClass:"row-title  desc-create"},[e._v(e._s(e.generateTitleView("jobCateId","questionTest")))]),s("div",[s("el-select",{attrs:{placeholder:e.generateTitleView("selectType","news.category")},model:{value:e.formCreate.jobCateId,callback:function(t){e.$set(e.formCreate,"jobCateId",t)},expression:"formCreate.jobCateId"}},e._l(e.jobCategories,(function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)]),s("div",{staticClass:"row-wrap checkbox-active"},[s("vs-checkbox",{model:{value:e.formCreate.isActive,callback:function(t){e.$set(e.formCreate,"isActive",t)},expression:"formCreate.isActive"}},[e._v(e._s(e.generateTitleView("isActive","questionTest"))+" ")])],1)])])],1)]}}])})],1)},a=[],r=s("1da1"),n=s("5530"),o=(s("96cf"),s("d3b7"),s("4de4"),s("2f62")),c=s("8256"),l=s("79fa"),u=s("b35e"),d=s("a896"),m=s("b804"),v=s("28ca"),C=s("0ed5"),f={name:"NewsCreate",components:{Sticky:m["a"],BHSAvatar:d["a"],Tinymce:c["a"]},mixins:[u["a"]],data:function(){return{mediaFolder:"https://oriwavenet.xyz/agency/Images/Recruitment/",listQuery:{page:1,limit:10},jobAddressOptions:[],formCreate:{desc:"",name:"",thumb:"Ảnh mô tả",isActive:!1,isDelete:!1,question:[]},Question:{desc:"",name:"",thumb:"Ảnh mô tả",isActive:!1,isDelete:!1,objAnswer:[]},isCorrect:0,activeLoading:!1,idSelect:this.$route.params.id,listTypeNews:v["g"],isCreateQuestion:!1,ListQuestion:[]}},computed:Object(n["a"])({},Object(o["c"])({jobCategories:"jobCategory/allJobCategories"})),mounted:function(){this.getAllCategories(),this.getData()},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])({actGetAllJobCategory:"jobCategory/getAll",actCreateQuestion:"courseTest/create",actEditQuestion:"courseTest/edit",actGetQuestion:"courseTest/getDetail"})),{},{getDataCity:function(){var e=this;return new Promise((function(t,s){C["a"].getAll().then((function(s){if(!s)throw s;t(s),e.jobAddressOptions=s.payload.records})).catch((function(e){s(e)}))}))},getData:function(){var e=this;this.showLoading(),void 0!==this.idSelect&&this.actGetQuestion(this.idSelect).then((function(t){t&&t.isSuccess&&(e.formCreate=JSON.parse(JSON.stringify(t.payload.records)))})),this.closeLoading()},handleSubmitNews:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==e.idSelect){t.next=8;break}return e.formCreate.userId=e.userId,t.next=4,e.actCreateQuestion(e.formCreate);case 4:s=t.sent,e.handleShowNotification(s),t.next=12;break;case 8:return t.next=10,e.actEditQuestion(e.formCreate);case 10:i=t.sent,e.handleShowNotification(i);case 12:case"end":return t.stop()}}),t)})))()},getAllCategories:function(){this.actGetAllJobCategory()},showLoading:function(){this.componentLoading=this.$vs.loading({type:"scale",target:this.$refs.content})},closeLoading:function(){this.componentLoading.close()},addAnswer:function(e){this.formCreate.question[e].objAnswer.push({name:"",isCorrect:!1})},removeAnswer:function(e){this.formCreate.objAnswer=this.formCreate.objAnswer.filter((function(t,s){return s!==e}))},setCorrect:function(e){this.isCorrect=e},addQuestion:function(e){this.formCreate.question.push({desc:"",name:"",thumb:"Ảnh mô tả",isActive:!1,isDelete:!1,objAnswer:[]})},deleteQuestion:function(e){this.formCreate.question=this.formCreate.question.filter((function(t,s){return s!==e}))},generateTitleView:l["a"]})},b=f,w=(s("d0c1e"),s("2877")),g=Object(w["a"])(b,i,a,!1,null,"5b820c18",null);t["default"]=g.exports},d0c1e:function(e,t,s){"use strict";s("a02f")}}]);