(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7c1794"],{"17f2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("comment-search",{attrs:{status:t.commentStatus.unApprove}}),n("div",{staticClass:"bhs-card"},[n("div",{staticClass:"col-left"},[n("comment-list",{attrs:{comments:t.comments}}),t.totalTopComment>0?n("BHSPagination",{attrs:{background:"",total:t.totalTopComment,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getTopComments}}):t._e()],1),n("div",{staticClass:"col-right"},[n("comment-action-list"),t.totalComments>0?n("BHSPagination",{attrs:{background:"",total:t.totalComments,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getPagingComments}}):t._e()],1)])],1)},o=[],a=n("5530"),s=n("2f62"),m=n("327dd"),c=n("2d1c"),u=n("84c3"),r=n("28ca"),l=n("b42a"),p={name:"CommentUnApprove",components:{CommentActionList:c["a"],CommentList:m["a"],CommentSearch:u["a"],BHSPagination:l["a"]},data:function(){return{commentStatus:r["b"],listQuery:{page:1,limit:15,status:r["b"].unApprove}}},computed:Object(a["a"])({},Object(s["c"])({comments:"comment/topComments",totalTopComment:"comment/totalTopComment",totalComments:"comment/totalComments"})),mounted:function(){this.getTopComments()},methods:Object(a["a"])(Object(a["a"])({},Object(s["b"])({actGetTopComments:"comment/getTopComments",actGetPagingComments:"comment/getPaginationComment"})),{},{getTopComments:function(){this.actGetTopComments({current_page:this.listQuery.page,limit:this.listQuery.limit,status:this.listQuery.status,title:""})},getPagingComments:function(t){this.actGetPagingComments({objectId:t,current_page:this.listQuery.page,limit:this.listQuery.limit,name:"",status:this.commentStatus.draft})}})},g=p,C=(n("eafc"),n("2877")),d=Object(C["a"])(g,i,o,!1,null,"0ce3bff0",null);e["default"]=d.exports},"5e4d":function(t,e,n){},b84e:function(t,e,n){t.exports=n.p+"static/img/unnamed.e6801e57.jpg"},eafc:function(t,e,n){"use strict";var i=n("5e4d"),o=n.n(i);o.a}}]);