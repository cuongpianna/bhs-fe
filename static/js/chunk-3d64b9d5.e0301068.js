(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d64b9d5"],{"8fe0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("comment-search",{attrs:{status:t.commentStatus.publish}}),i("div",{staticClass:"bhs-card"},[i("div",{staticClass:"col-left"},[i("comment-list",{attrs:{comments:t.comments}}),t.totalTopComment>0?i("BHSPagination",{attrs:{background:"",total:t.totalTopComment,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getTopComments}}):t._e()],1),i("div",{staticClass:"col-right"},[i("comment-action-list"),t.totalComments>0?i("BHSPagination",{attrs:{background:"",total:t.totalComments,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getPagingComments}}):t._e()],1)])],1)},s=[],o=i("5530"),a=i("2f62"),m=i("327dd"),c=i("2d1c"),u=i("28ca"),l=i("84c3"),r=i("b42a"),p={name:"CommentPublish",components:{CommentSearch:l["a"],CommentActionList:c["a"],CommentList:m["a"],BHSPagination:r["a"]},data:function(){return{commentStatus:u["c"],listQuery:{page:1,limit:15,status:u["c"].publish}}},computed:Object(o["a"])({},Object(a["c"])({comments:"comment/topComments",totalTopComment:"comment/totalTopComment",totalComments:"comment/totalComments"})),mounted:function(){this.getTopComments()},methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])({actGetTopComments:"comment/getTopComments",actGetPagingComments:"comment/getPaginationComment"})),{},{getTopComments:function(){this.actGetTopComments({current_page:this.listQuery.page,limit:this.listQuery.limit,status:this.listQuery.status,title:""})},getPagingComments:function(t){this.actGetPagingComments({objectId:t,current_page:this.listQuery.page,limit:this.listQuery.limit,name:"",status:this.commentStatus.draft})}})},g=p,d=(i("ee61"),i("2877")),C=Object(d["a"])(g,n,s,!1,null,"5f01326c",null);e["default"]=C.exports},b84e:function(t,e,i){t.exports=i.p+"static/img/unnamed.e6801e57.jpg"},e7d8:function(t,e,i){},ee61:function(t,e,i){"use strict";var n=i("e7d8"),s=i.n(n);s.a}}]);