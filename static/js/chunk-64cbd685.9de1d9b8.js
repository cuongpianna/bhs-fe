(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64cbd685"],{"71f1":function(t,e,a){"use strict";a("cc84")},"8c3c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"meta-title"},[t._v(t._s(t.generateTitleView("listlandingcontact","langdingcontact")))])])]),a("div",{staticClass:"page-content"},[0===t.totallangdingcontacts?a("div",{staticClass:"no-data"},[t._v(" "+t._s(t.generateTitleView("empty","common"))+" ")]):a("vs-table",{staticClass:"bhs-table",scopedSlots:t._u([{key:"thead",fn:function(){return[a("vs-tr",[a("vs-th",{staticClass:"title",staticStyle:{width:"auto"}},[a("div",{staticClass:"title-list "},[t._v(" "+t._s(t.generateTitleView("CompanyName","langdingcontact")))])]),a("vs-th",{staticStyle:{width:"250px"}},[a("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("FullName","langdingcontact")))])]),a("vs-th",{staticStyle:{width:"220px"}},[a("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("ServicePack","langdingcontact")))])]),a("vs-th",{staticStyle:{width:"180px"}},[a("div",{staticClass:"title-list"},[t._v(" "+t._s(t.generateTitleView("PhoneContact","langdingcontact")))])]),a("vs-th",{staticStyle:{width:"250px"}},[a("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("EmailContact","langdingcontact")))])]),a("vs-th",{staticStyle:{width:"200px"}},[a("div",{staticClass:"title-list"},[t._v(t._s(t.generateTitleView("AddressContact","langdingcontact")))])])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.listlangdingcontacts,(function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",{attrs:{align:"left"}},[a("p",{staticClass:"title-item"},[t._v(t._s(t.truncate(e.companyName,15)))])]),a("vs-td",{attrs:{align:"center"}},[a("p",{staticClass:"title-item"},[t._v(t._s(e.fullName))]),a("p",{staticClass:"title-item"},[t._v("Ngày gửi: "+t._s(t._f("dayMonthYear")(e.created)))])]),a("vs-td",{attrs:{align:"center"}},[null!==e.servicePack?a("div",{staticClass:"title-item"},[a("p",{staticClass:"title-service"},[t._v(t._s(e.servicePack.title))]),e.type===t.LandingContactType.ContactAdmin?a("p",{staticClass:"title-type"},[t._v("Mua gói")]):e.type===t.LandingContactType.ContactExtended?a("p",{staticClass:"title-type"},[t._v("Gia hạn")]):t._e()]):a("div",{staticClass:"title-item"},[t._v("Không yêu cầu dịch vụ")])]),a("vs-td",{attrs:{align:"center"}},[a("p",{staticClass:"title-item"},[t._v(t._s(e.phoneContact))])]),a("vs-td",{attrs:{align:"center"}},[a("p",{staticClass:"title-item"},[t._v(t._s(e.emailContact))])]),a("vs-td",{attrs:{align:"center"}},[a("p",{staticClass:"title-item"},[t._v(t._s(e.addressContact))])])],1)}))},proxy:!0}])}),t.totallangdingcontacts>0?a("BHSPagination",{attrs:{background:"",total:t.totallangdingcontacts,page:t.listQuery.page,limit:t.listQuery.limit,"page-sizes":[10,20,30,40],position:"right"},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getJobs}}):t._e()],1)])},n=[],s=a("1da1"),c=a("5530"),l=(a("96cf"),a("2f62")),o=a("79fa"),r=a("28ca"),d=a("b42a"),g=a("b35e"),p={name:"Listlangdingcontacts",components:{BHSPagination:d["a"]},mixins:[g["a"]],data:function(){return{dialogAccept:!1,dialogRemove:!1,LandingContactType:r["a"],companySelect:"",listQuery:{userType:1,page:1,limit:10,title:""},searchQuery:"",itemSelect:{}}},computed:Object(c["a"])({},Object(l["c"])({listlangdingcontacts:"landingcontact/listlangdingcontacts",totallangdingcontacts:"landingcontact/totallangdingcontacts"})),mounted:function(){this.getJobs()},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({actContact:"landingcontact/getPagination",actAcceptService:"landingcontact/updateAcceptService"})),{},{getJobs:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.actContact({current_page:t.listQuery.page,limit:t.listQuery.limit,title:t.listQuery.title});case 2:case"end":return e.stop()}}),e)})))()},generateTitleView:o["a"]})},u=p,v=(a("71f1"),a("2877")),m=Object(v["a"])(u,i,n,!1,null,"a4a5d190",null);e["default"]=m.exports},cc84:function(t,e,a){}}]);