(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3156e071"],{a9ff:function(e,t,s){"use strict";var a=s("db43"),i=s.n(a);i.a},b84e:function(e,t,s){e.exports=s.p+"static/img/unnamed.e6801e57.jpg"},db43:function(e,t,s){},e0ca:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-content"},[a("div",{staticClass:"info-client bhs-card"},[a("div",{staticClass:"title-user"},[e._v(e._s(e.generateTitleView("detailClient","client")))]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-user img-user"},[""===e.infoUser.pictureUrl||null===e.infoUser.pictureUrl?a("img",{attrs:{src:s("b84e")}}):a("img",{attrs:{src:e.avatarFolder+e.infoUser.pictureUrl}})])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-user"},[e._v(e._s(e.generateTitleView("name","client"))+" : "),a("span",{staticClass:"name-company"},[e._v(e._s(e.infoUser.fullname))])])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-user"},[e._v(" "+e._s(e.generateTitleView("birthday","client"))+" : "),""!==e.infoUser.birthday&&null!==e.infoUser.birthday?a("span",[e._v(e._s(e._f("dayMonthYear")(e.infoUser.birthday)))]):a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:"  detail-user"},[e._v(" "+e._s(e.generateTitleView("address","client"))+" : "),""!==e.infoUser.contact&&null!==e.infoUser.contact?a("span",[e._v(e._s(e.infoUser.contact))]):a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])]),a("div",{staticClass:"wrap-info"},[a("div",{staticClass:" detail-wrap detail-user"},[e._v(" "+e._s(e.generateTitleView("email","client"))+" : "),""!==e.infoUser.email&&null!==e.infoUser.email?a("span",[e._v(e._s(e.infoUser.email))]):a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])]),a("div",{staticClass:" detail-wrap detail-user"},[e._v(" "+e._s(e.generateTitleView("phone","client"))+" : "),""!==e.infoUser.phone&&null!==e.infoUser.phone?a("span",[e._v(e._s(e.infoUser.phone))]):a("span",[e._v(e._s(e.generateTitleView("notUpdate","common")))])])])]),a("div",{staticClass:"charts-client bhs-card"},[a("div",{staticClass:"header-chart"},[a("div",{staticClass:"right"},[a("div",{staticClass:"scores"},[e._v(e._s(e.generateTitleView("scoresOpen","jobs")))]),e._m(0)]),a("div",{staticClass:"left"},[a("div",{staticClass:"total-scores"},[e._v(" "+e._s(e.generateTitleView("scoresPoint","jobs"))+" : "),a("span",[e._v("200")])])])]),a("line-charts")],1)])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"scores-month"},[s("div",{staticClass:"this-month"},[s("p",{staticClass:"text-label"},[e._v("This Month")]),s("span",[e._v("20k")])]),s("div",{staticClass:"last-month"},[s("p",{staticClass:"text-label"},[e._v("Last Month")]),s("span",[e._v("30k")])])])}],n=(s("96cf"),s("1da1")),r=s("5530"),c=s("b35e"),l=s("79fa"),o=s("2f62"),d=s("6431"),v=s("e212"),f={name:"ClientDetail",components:{LineCharts:v["a"],ListJobs:d["a"]},mixins:[c["a"]],data:function(){return{dataChart:[5,20,36,10,10,20],infoUser:[]}},mounted:function(){this.getInfo()},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])({actGetUserInfo:"account/getUserInfo"})),{},{generateTitleView:l["a"],getInfo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.actGetUserInfo(e.$route.params.id);case 2:s=t.sent,s.data.isSuccess&&(e.infoUser=s.data.payload.records[0]);case 4:case"end":return t.stop()}}),t)})))()}})},p=f,u=(s("a9ff"),s("2877")),_=Object(u["a"])(p,a,i,!1,null,"59c36352",null);t["default"]=_.exports}}]);