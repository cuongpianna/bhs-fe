(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97d901b2"],{"0246":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"page-content"},[n("div",{staticClass:"info-client bhs-card"},[n("div",{staticClass:"title-user"},[e._v("Chi tiết nhà tuyển dụng")]),n("div",{staticClass:"wrap-info"},[n("div",{staticClass:" detail-user img-user"},[""===e.infoUser.pictureUrl||null===e.infoUser.pictureUrl?n("img",{attrs:{src:a("b84e")}}):n("img",{attrs:{src:e.avatarFolder+e.infoUser.pictureUrl}})])]),n("div",{staticClass:"wrap-info"},[n("div",{staticClass:" detail-user"},[e._v("Tên đăng nhập : "),n("span",{staticClass:"name-company"},[e._v(e._s(e.infoUser.userName))])])]),n("div",{staticClass:"wrap-info"},[n("div",{staticClass:" detail-user"},[e._v("Tên : "),""!==e.infoUser.fullname&&null!==e.infoUser.fullname&&void 0!==e.infoUser.fullname?n("span",{staticClass:"name-company"},[e._v(e._s(e.infoUser.fullname))]):n("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])]),n("div",{staticClass:"wrap-info"},[n("div",{staticClass:" detail-user"},[e._v(" "+e._s(e.generateTitleView("birthday","client"))+" : "),""!==e.infoUser.birthday&&null!==e.infoUser.birthday?n("span",[e._v(e._s(e._f("dayMonthYear")(e.infoUser.birthday)))]):n("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])]),n("div",{staticClass:"wrap-info"},[n("div",{staticClass:" detail-wrap detail-user"},[e._v(" Loại tài khoản : "),e.infoUser.userType===e.userType.EmployerManager?n("span",[e._v("Nhà tuyển dụng công ty")]):e._e(),e.infoUser.userType===e.userType.EmployerPerson?n("span",[e._v("Nhà tuyển dụng cá nhân")]):e._e()])]),n("div",{staticClass:"wrap-info"},[n("div",{staticClass:" detail-wrap detail-user"},[e._v(" Email : "),""!==e.infoUser.email&&null!==e.infoUser.email&&void 0!==e.infoUser.email?n("span",[e._v(e._s(e.infoUser.email))]):n("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])]),n("div",{staticClass:" detail-wrap detail-user"},[e._v(" "+e._s(e.generateTitleView("phone","client"))+" : "),""!==e.infoUser.phone&&null!==e.infoUser.phone&&void 0!==e.infoUser.phone?n("span",[e._v(e._s(e.infoUser.phone))]):n("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])])])])])},s=[],i=a("1da1"),r=a("5530"),o=(a("96cf"),a("b35e")),c=a("79fa"),l=a("2f62"),d=a("28ca"),u={name:"AccountRecruimentDetail",mixins:[o["a"]],data:function(){return{dataChart:[5,20,36,10,10,20],infoUser:[],userType:d["l"]}},mounted:function(){this.getInfo()},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])({actGetUserInfo:"account/getUserInfo"})),{},{generateTitleView:c["a"],getInfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actGetUserInfo(e.$route.params.id);case 2:a=t.sent,a.data.isSuccess&&(e.infoUser=a.data.payload.records[0]);case 4:case"end":return t.stop()}}),t)})))()}})},p=u,f=(a("9b22"),a("2877")),v=Object(f["a"])(p,n,s,!1,null,"566dff8d",null);t["default"]=v.exports},"5c47":function(e,t,a){},"9b22":function(e,t,a){"use strict";a("5c47")},b84e:function(e,t,a){e.exports=a.p+"static/img/unnamed.e6801e57.jpg"}}]);