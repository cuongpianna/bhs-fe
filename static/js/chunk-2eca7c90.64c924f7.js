(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eca7c90"],{"89bf":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("comment-search",{attrs:{status:t.commentStatus.draft}}),n("div",{staticClass:"bhs-card"},[n("div",{staticClass:"col-left"},[n("comment-list",{attrs:{comments:t.comments,status:t.commentStatus.draft,"total-record":t.totalTopComment}}),t.totalTopComment>0?n("BHSPagination",{attrs:{background:"",total:t.totalTopComment,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getTopComments}}):t._e()],1),n("div",{staticClass:"col-right"},[n("comment-action-list"),t.totalComments>0?n("BHSPagination",{attrs:{background:"",total:t.totalComments,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getPagingComments}}):t._e()],1)])],1)},o=[],i=(n("a9e3"),n("96cf"),n("1da1")),s=n("5530"),m=n("2f62"),c=n("327dd"),r=n("2d1c"),u=n("28ca"),l=n("84c3"),p=n("b42a"),g={name:"CommentIndex",components:{CommentSearch:l["a"],CommentActionList:r["a"],CommentList:c["a"],BHSPagination:p["a"]},props:{status:{type:Number,default:function(){return 0}}},data:function(){return{commentStatus:u["e"],listQuery:{page:1,limit:15,status:u["e"].draft}}},computed:Object(s["a"])({},Object(m["c"])({comments:"comment/topComments",totalTopComment:"comment/totalTopComment",totalComments:"comment/totalComments"})),mounted:function(){this.getTopComments()},methods:Object(s["a"])(Object(s["a"])({},Object(m["b"])({actGetTopComments:"comment/getTopComments",actGetPagingComments:"comment/getPaginationComment"})),{},{getTopComments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actGetTopComments({current_page:t.listQuery.page,limit:t.listQuery.limit,status:t.listQuery.status,title:""});case 2:n=e.sent,n.payload.records.length;case 4:case"end":return e.stop()}}),e)})))()},getPagingComments:function(t){this.actGetPagingComments({objectId:t,current_page:this.listQuery.page,limit:this.listQuery.limit,name:"",status:this.commentStatus.draft})}})},d=g,f=(n("cf57"),n("2877")),C=Object(f["a"])(d,a,o,!1,null,"6bee637a",null);e["default"]=C.exports},"9fcc":function(t,e,n){},b84e:function(t,e,n){t.exports=n.p+"static/img/unnamed.e6801e57.jpg"},cf57:function(t,e,n){"use strict";var a=n("9fcc"),o=n.n(a);o.a}}]);