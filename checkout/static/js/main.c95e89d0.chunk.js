(this.webpackJsonptaglme=this.webpackJsonptaglme||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(14),r=c.n(n),i=c(18),s=c(12),l=c(22),d=c(7),o="https://api.nfcpoint.ru",u="GET_CITIES_SUGGESTIONS_REQUEST",j="GET_CITIES_SUGGESTIONS_SUCCESS",p="GET_PICKPOINTS_REQUEST",b="GET_PICKPOINTS_SUCCESS",m="ADD_FILE_REQUEST",f="ADD_FILE_SUCCESS",y="DELETE_FILE_REQUEST",v="DELETE_FILE_SUCCESS",h="GET_CART_REQUEST",O="GET_CART_SUCCESS",x="CALCULATE_DELIVERY_REQUEST",_="CALCULATE_DELIVERY_SUCCESS",A="CREATE_ORDER_REQUEST",g="CREATE_ORDER_FAIL",N="CREATE_ORDER_SUCCESS",E={pickpoints:[]},k=c(3),S=c.n(k),T=c(5),C=c(9),I=S.a.mark(H),w=S.a.mark(R),P=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/cdek/cities?limit=10&keyword=").concat(t)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function H(e){var t;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(T.b)(P,e.payload);case 2:return t=c.sent,c.next=5,Object(T.c)({type:j,payload:t});case 5:case"end":return c.stop()}}),I)}function R(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(u,H);case 2:case"end":return e.stop()}}),w)}var D=S.a.mark(Q),F=S.a.mark(G),L=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/cdek/pickpoints?city_id=").concat(t)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Q(e){var t;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(T.b)(L,e.payload);case 2:return t=c.sent,c.next=5,Object(T.c)({type:b,payload:t});case 5:case"end":return c.stop()}}),D)}function G(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(p,Q);case 2:case"end":return e.stop()}}),F)}var K=S.a.mark(B),U=S.a.mark(J),q=function(){var e=Object(C.a)(S.a.mark((function e(t){var c,a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.cartId,a=t.file,(n=new FormData).append("file",a),e.next=5,fetch("".concat(o,"/vcard-landing/carts/").concat(c,"/files"),{method:"POST",body:n}).then((function(e){return e.json()}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function B(e){var t;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(T.b)(q,e.payload);case 2:return t=c.sent,c.next=5,Object(T.c)({type:f,payload:t});case 5:case"end":return c.stop()}}),K)}function J(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(m,B);case 2:case"end":return e.stop()}}),U)}var V=S.a.mark(M),W=S.a.mark(z),X=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/vcard-landing/carts/").concat(t)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function M(e){var t;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(T.b)(X,e.payload);case 2:return t=c.sent,c.next=5,Object(T.c)({type:O,payload:t});case 5:case"end":return c.stop()}}),V)}function z(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(h,M);case 2:case"end":return e.stop()}}),W)}var Y=S.a.mark(ee),Z=S.a.mark(te),$=function(){var e=Object(C.a)(S.a.mark((function e(t){var c,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.cartId,a=t.fileId,e.next=3,fetch("".concat(o,"/vcard-landing/carts/").concat(c,"/files/").concat(a),{method:"DELETE"}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ee(e){var t;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(T.b)($,e.payload);case 2:return t=c.sent,c.next=5,Object(T.c)({type:v,payload:t});case 5:case"end":return c.stop()}}),Y)}function te(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(y,ee);case 2:case"end":return e.stop()}}),Z)}var ce=c(23),ae=["cityCode","deliveryType","weight"],ne=S.a.mark(se),re=S.a.mark(le),ie=function(){var e=Object(C.a)(S.a.mark((function e(t){var c,a,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.cityCode,a=t.deliveryType,n=t.weight,r=Object(ce.a)(t,ae),e.next=3,fetch("".concat(o,"/cdek/calc"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(Object(d.a)({city_id:c,delivery_type:"pickup"===a?"pickpoint":a,weight:n.toString()},r))}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function se(e){var t;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(T.b)(ie,e.payload);case 2:return t=c.sent,c.next=5,Object(T.c)({type:_,payload:t});case 5:case"end":return c.stop()}}),ne)}function le(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(x,se);case 2:case"end":return e.stop()}}),re)}var de=S.a.mark(je),oe=S.a.mark(pe),ue=function(){var e=Object(C.a)(S.a.mark((function e(t){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.address,"pickup"===t.deliveryType&&(c="\u041f\u0412\u0417: ".concat(t.pickpoint.code,", ").concat(t.pickpoint.full_address)),e.next=4,fetch("".concat(o,"/vcard-landing/carts/").concat(t.cartId,"/order"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({customer:t.customer,company:t.company,phone:t.phone,email:t.email.toLowerCase().replace(/\s/g,""),city:"".concat(t.city.region,", ").concat(t.city.name),address:c,comment:t.comment,payment_type:t.paymentType,delivery_type:t.deliveryType,delivery_price:+t.deliveryPrice})}).then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function je(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.b)(ue,e.payload);case 2:if(!t.sent.id){t.next=8;break}return t.next=6,Object(T.c)({type:N});case 6:t.next=10;break;case 8:return t.next=10,Object(T.c)({type:g});case 10:case"end":return t.stop()}}),de)}function pe(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(A,je);case 2:case"end":return e.stop()}}),oe)}var be=S.a.mark(me);function me(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.b)(R),Object(T.b)(G),Object(T.b)(J),Object(T.b)(te),Object(T.b)(z),Object(T.b)(le),Object(T.b)(pe)]);case 2:case"end":return e.stop()}}),be)}var fe=Object(l.a)(),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.b,ve=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{citiesSuggestions:{isLoading:!0}});case j:return Object(d.a)(Object(d.a)({},e),{},{citiesSuggestions:{isLoading:!1,suggestions:t.payload.items}});case b:return Object(d.a)(Object(d.a)({},e),{},{pickpoints:t.payload.items});case h:return Object(d.a)(Object(d.a)({},e),{},{cart:{isLoading:!0}});case O:return Object(d.a)(Object(d.a)({},e),{},{cart:Object(d.a)(Object(d.a)({},t.payload),{},{isLoading:!1})});case f:case v:return Object(d.a)(Object(d.a)({},e),{},{cart:Object(d.a)(Object(d.a)({},e.cart),t.payload)});case _:return Object(d.a)(Object(d.a)({},e),{},{deliveryPrice:t.payload.price});case g:return Object(d.a)(Object(d.a)({},e),{},{orderWasCreated:!1});case N:return localStorage.removeItem("cartId"),Object(d.a)(Object(d.a)({},e),{},{orderWasCreated:!0});default:return e}}),ye(Object(s.a)(fe)));fe.run(me);var he=ve,Oe=c(17),xe=c.n(Oe),_e=function(e){return e.toLocaleString("ru-RU").replace(",",".")},Ae=c.p+"static/media/card-1-white.62e45082.png",ge=c.p+"static/media/card-1-black.f0eebc78.png",Ne=c.p+"static/media/card-1-custom-white.bd390046.png",Ee=c.p+"static/media/sticker-1.675500fa.png",ke=c.p+"static/media/sticker-1-custom.4a99d8d4.png",Se="data:image/png;base64,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",Te=c(0),Ce=function(e){var t=e.cart;return Object(Te.jsx)("section",{className:"cart main__cart",children:Object(Te.jsxs)("div",{className:"wrapper",children:[Object(Te.jsx)("h1",{className:"title1",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(Te.jsxs)("div",{className:"cart__header",children:[Object(Te.jsx)("div",{className:"cart__name",children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(Te.jsx)("div",{className:"cart__value",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(Te.jsx)("div",{className:"cart__value",children:"\u0426\u0435\u043d\u0430 \u0437\u0430 \u0435\u0434."}),Object(Te.jsx)("div",{className:"cart__value",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})]}),Object(Te.jsx)("div",{className:"cart__list",children:t.items.map((function(e){return Object(Te.jsxs)("div",{className:"cart__item",children:["CARD-TAGLME-NTAG213-WHITE"===e.code&&Object(Te.jsx)("img",{src:Ae,alt:"",className:"cart__img"}),"CARD-TAGLME-NTAG213-BLACK"===e.code&&Object(Te.jsx)("img",{src:ge,alt:"",className:"cart__img"}),"CARD-NTAG213-CUSTOM"===e.code&&Object(Te.jsx)("img",{src:Ne,alt:"",className:"cart__img"}),e.code.includes("STICKER-TAGLME")&&Object(Te.jsx)("img",{src:Ee,alt:"",className:"cart__img"}),e.code.includes("STICKER-CUSTOM")&&Object(Te.jsx)("img",{src:ke,alt:"",className:"cart__img"}),e.code.includes("SUBSCRIPTION")&&Object(Te.jsx)("img",{src:Se,alt:"",className:"cart__img"}),e.code.includes("SERVICE")&&Object(Te.jsx)("img",{src:Se,alt:"",className:"cart__img"}),Object(Te.jsx)("div",{className:"text cart__name",children:e.name}),Object(Te.jsxs)("div",{className:"text cart__value cart__value_count",children:[Object(Te.jsx)("span",{className:"cart__mobile-text",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: "}),e.amount]}),Object(Te.jsxs)("div",{className:"text cart__value",children:[Object(Te.jsx)("span",{className:"cart__mobile-text",children:"\u0426\u0435\u043d\u0430 \u0437\u0430 \u0435\u0434.: "}),_e(e.price)," \u20bd"]}),Object(Te.jsxs)("div",{className:"text cart__value",children:[Object(Te.jsx)("span",{className:"cart__mobile-text",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: "}),_e(e.sum)," \u20bd"]})]},e.id)}))}),Object(Te.jsxs)("div",{className:"text cart__total",children:["\u0418\u0442\u043e\u0433\u043e: ",Object(Te.jsxs)("span",{className:"cart__total-value",children:[_e(t.items_cost)," \u20bd"]})]})]})})},Ie=c(16),we=c(20),Pe=c(13),He=c.p+"static/media/point.e20d14ae.svg",Re=function(e){e.google;var t=e.cityLat,c=e.cityLng,a=e.pickpoints,n=e.handleChange;return Object(Te.jsx)(Pe.d,{children:Object(Te.jsx)("div",{className:"delivery__map",children:Object(Te.jsx)(Pe.b,{width:"100%",height:"100%",state:{center:[t||55.753764,c||37.622312],zoom:10},children:Object(Te.jsx)(Pe.a,{options:{preset:"islands#invertedOrangeClusterIcons",groupByCoordinates:!1},children:a.map((function(e){return Object(Te.jsx)(Pe.c,{geometry:[e.coord_y,e.coord_x],options:{iconLayout:"default#image",iconImageHref:He},onClick:function(){return n("pickpoint",e)}},e.id)}))})})})})},De=c.p+"static/media/paper-clip.2b85b022.svg",Fe=c.p+"static/media/trash.3eacb611.svg",Le={city:{},customer:"",company:"",phone:"",email:"",pickpoint:{},address:"",comment:"",paymentType:"online",deliveryType:"pickup"},Qe=function(e){var t=e.cart,c=e.citiesSuggestions,n=e.handleGetCitiesSuggestions,r=e.pickpoints,i=e.handleGetPickpoints,s=e.handleAddFile,l=e.handleDeleteFile,o=e.deliveryPrice,u=e.handleCalculateDelivery,j=e.orderWasCreated,p=e.handleCreateOrder,b=t.id,m=Object(a.useState)(Le),f=Object(we.a)(m,2),y=f[0],v=f[1],h=Object(a.useState)(""),O=Object(we.a)(h,2),x=O[0],_=O[1],A=function(e,c){if("city"===e||"deliveryType"===e){var a=y.deliveryType,n=y.city.code;"city"===e?n=c.code:"deliveryType"===e&&(a=c),n&&(u(Object(d.a)({cityCode:n,deliveryType:a,insurance:t.items_cost},t.package)),i(n))}v(Object(d.a)(Object(d.a)({},y),{},Object(Ie.a)({},e,c)))},g=function(e){var t=e.target.files[0];s({file:t,cartId:b})},N=function(e){var t="".concat(e.name,", ").concat(e.sub_region,", ").concat(e.region);return e.name!==e.sub_region&&e.sub_region||(t="".concat(e.name,", ").concat(e.region)),e.name===e.region&&(t=e.name),t};return Object(Te.jsx)("section",{className:"delivery main__delivery",children:Object(Te.jsxs)("div",{className:"wrapper",children:[Object(Te.jsx)("h2",{className:"title2",children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),Object(Te.jsxs)("form",{className:"delivery__form",onSubmit:function(e){e.preventDefault(),p(Object(d.a)(Object(d.a)({},y),{},{cartId:b,deliveryPrice:o}))},children:[Object(Te.jsxs)("div",{className:"delivery__group",children:[Object(Te.jsx)("input",{className:"form-radio",type:"radio",id:"courier",checked:"courier"===y.deliveryType,onChange:function(){return A("deliveryType","courier")}}),Object(Te.jsx)("label",{className:"form-btn delivery__btn",htmlFor:"courier",children:"\u041a\u0443\u0440\u044c\u0435\u0440\u043e\u043c"}),Object(Te.jsx)("input",{className:"form-radio",type:"radio",id:"pickup",checked:"pickup"===y.deliveryType,onChange:function(){return A("deliveryType","pickup")}}),Object(Te.jsx)("label",{className:"form-btn delivery__btn",htmlFor:"pickup",children:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),Object(Te.jsxs)("div",{className:"delivery__group delivery__group_mobile_full",children:[Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u0424\u0418\u041e *"}),Object(Te.jsx)("input",{type:"text",className:"form-field delivery__field",value:y.customer,onChange:function(e){return A("customer",e.target.value)},required:!0})]}),Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}),Object(Te.jsx)("input",{type:"text",className:"form-field delivery__field",value:y.company,onChange:function(e){return A("company",e.target.value)}})]})]}),Object(Te.jsxs)("div",{className:"delivery__group delivery__group_mobile_full",children:[Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d *"}),Object(Te.jsx)("input",{type:"text",className:"form-field delivery__field",value:y.phone,onChange:function(e){return A("phone",e.target.value)},required:!0})]}),Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"E-mail *"}),Object(Te.jsx)("input",{type:"email",className:"form-field delivery__field",value:y.email,onChange:function(e){return A("email",e.target.value)},required:!0})]})]}),Object(Te.jsxs)("div",{className:"delivery__group delivery__group_mobile_full",children:[Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(Te.jsx)("input",{type:"text",className:"form-field delivery__field",value:y.city.id?N(y.city):x,onChange:function(e){var t=e.target.value;y.city.id&&A("city",Le.city),_(t),0!==t.length&&n(t)}}),c&&0!==x.length&&Object(Te.jsx)("div",{className:"delivery__suggestions",children:c.isLoading?Object(Te.jsx)(xe.a,{loading:!0,css:"\n    display: block;\n    margin: 30px 0;\n    text-align: center;\n",size:10,margin:2}):0!==c.suggestions.length?c.suggestions.map((function(e){return Object(Te.jsx)("p",{onClick:function(){return function(e){var t=c.suggestions.find((function(t){return t.id===e})),a=t.code;"pickup"===y.deliveryType&&i(a),A("city",t),_("")}(e.id)},children:N(e)},e.id)})):Object(Te.jsx)("p",{children:"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})})]}),"pickup"===y.deliveryType?0!==r.length&&Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(Te.jsxs)("select",{className:"form-field delivery__field",defaultValue:"",value:y.pickpoint.id,onChange:function(e){var t=e.target.value;A("pickpoint",r.find((function(e){return e.id===t})))},children:[Object(Te.jsx)("option",{value:"",disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),r.map((function(e){return Object(Te.jsxs)("option",{value:e.id,children:[e.name,", ",e.address]},e.id)}))]})]}):Object(Te.jsxs)("label",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(Te.jsx)("input",{type:"text",className:"form-field delivery__field",value:y.address,onChange:function(e){return A("address",e.target.value)}})]})]}),"pickup"===y.deliveryType&&r&&Object(Te.jsx)(Re,{cityLat:y.city.latitude,cityLng:y.city.longitude,pickpoints:r,handleChange:A}),Object(Te.jsx)("div",{className:"delivery__name",children:"\u041e\u043f\u043b\u0430\u0442\u0430"}),Object(Te.jsxs)("div",{className:"delivery__group delivery__group_mobile_full",children:[Object(Te.jsx)("input",{className:"form-radio",type:"radio",id:"online",checked:"online"===y.paymentType,onChange:function(){return A("paymentType","online")}}),Object(Te.jsx)("label",{className:"form-btn delivery__btn",htmlFor:"online",children:"\u041e\u043d\u043b\u0430\u0439\u043d \u043a\u0430\u0440\u0442\u043e\u0439"}),Object(Te.jsx)("input",{className:"form-radio",type:"radio",id:"invoice",checked:"invoice"===y.paymentType,onChange:function(){return A("paymentType","invoice")}}),Object(Te.jsx)("label",{className:"form-btn delivery__btn",htmlFor:"invoice",children:"\u041f\u043e \u0441\u0447\u0435\u0442\u0443 \u0434\u043b\u044f \u044e\u0440. \u043b\u0438\u0446\u0430"})]}),Object(Te.jsx)("div",{className:"delivery__group",children:Object(Te.jsxs)("label",{htmlFor:"",className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(Te.jsx)("input",{type:"text",className:"form-field delivery__field",value:y.comment,onChange:function(e){return A("comment",e.target.value)}})]})}),Object(Te.jsxs)("div",{className:"delivery__group delivery__group_mobile_full",children:[Object(Te.jsxs)("div",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b/\u043c\u0430\u043a\u0435\u0442\u044b"}),Object(Te.jsxs)("div",{className:"file-field",children:[Object(Te.jsx)("input",{type:"file",className:"file-field__input",id:"file-design",onChange:g}),Object(Te.jsx)("label",{className:"file-field__label delivery__file-label",htmlFor:"file-design",children:"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c"}),Object(Te.jsx)("div",{className:"file-field__names",children:t.files.map((function(e){return Object(Te.jsxs)("div",{className:"file-field__file",children:[Object(Te.jsx)("img",{src:De,alt:""}),Object(Te.jsx)("p",{children:e.name}),Object(Te.jsx)("img",{src:Fe,onClick:function(){return t=e.id,void l({fileId:t,cartId:b});var t},className:"file-field__file-delete",alt:""})]},e.id)}))})]})]}),Object(Te.jsxs)("div",{className:"delivery__label",children:[Object(Te.jsx)("div",{className:"delivery__name",children:"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b"}),Object(Te.jsxs)("div",{className:"file-field",children:[Object(Te.jsx)("input",{type:"file",className:"file-field__input",id:"file-requisite",onChange:g}),Object(Te.jsx)("label",{className:"file-field__label delivery__file-label",htmlFor:"file-requisite",children:"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c"})]})]})]}),o&&Object(Te.jsxs)("div",{className:"delivery__total",children:[Object(Te.jsx)("h2",{className:"title2 delivery__total-title",children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(Te.jsxs)("div",{className:"text delivery__text",children:["\u0421\u0443\u043c\u043c\u0430 \u0431\u0435\u0437 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ",Object(Te.jsxs)("span",{className:"delivery__value",children:[_e(t.items_cost)," \u20bd"]})]}),Object(Te.jsxs)("div",{className:"text delivery__text",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ",Object(Te.jsxs)("span",{className:"delivery__value",children:[_e(o)," \u20bd"]})]}),Object(Te.jsxs)("p",{className:"text delivery__text",children:["\u0412\u0441\u0435\u0433\u043e: ",Object(Te.jsxs)("span",{className:"delivery__total-value",children:[_e(+t.items_cost+ +o)," \u20bd"]})]})]}),!1===j&&Object(Te.jsx)("p",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(Te.jsx)("button",{className:"btn delivery__submit",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})})},Ge=function(){return Object(Te.jsx)("section",{className:"order-success",children:Object(Te.jsx)("div",{className:"wrapper",children:Object(Te.jsxs)("div",{className:"order-success__content",children:[Object(Te.jsx)("img",{src:"images/icons/tick.svg",alt:"",className:"order-success__icon"}),Object(Te.jsx)("h1",{className:"title1 order-success__title1",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!"}),Object(Te.jsx)("p",{className:"text order-success__text",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d. \u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f."}),Object(Te.jsx)("a",{href:"/",className:"btn order-success__btn",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})})})},Ke=localStorage.getItem("cartId");function Ue(){var e=window.dataLayer||[];e.push(arguments)}var qe=Object(i.b)((function(e){return{cart:e.cart,citiesSuggestions:e.citiesSuggestions,pickpoints:e.pickpoints,deliveryPrice:e.deliveryPrice,orderWasCreated:e.orderWasCreated}}),(function(e){return{handleGetCitiesSuggestions:function(t){return e(function(e){return{type:u,payload:e}}(t))},handleGetPickpoints:function(t){return e(function(e){return{type:p,payload:e}}(t))},handleAddFile:function(t){return e(function(e){return{type:m,payload:e}}(t))},handleDeleteFile:function(t){return e(function(e){return{type:y,payload:e}}(t))},handleGetCart:function(t){return e(function(e){return{type:h,payload:e}}(t))},handleCalculateDelivery:function(t){return e(function(e){return{type:x,payload:e}}(t))},handleCreateOrder:function(t){return e(function(e){return{type:A,payload:e}}(t))}}}))((function(e){var t=e.cart,c=e.handleGetCart,n=e.citiesSuggestions,r=e.handleGetCitiesSuggestions,i=e.pickpoints,s=e.handleGetPickpoints,l=e.handleAddFile,d=e.handleDeleteFile,o=e.handleCalculateDelivery,u=e.deliveryPrice,j=e.handleCreateOrder,p=e.orderWasCreated;return Object(a.useEffect)((function(){!t&&Ke&&c(Ke)}),[t]),Object(a.useLayoutEffect)((function(){Ue("js",new Date),Ue("config","G-Q589DMNJSM")}),[]),Object(a.useEffect)((function(){p&&(Ue("set","page","/checkout/success"),Ue("send","pageview"),Ue("send","event","Cart","buy"),window.ym(85747113,"hit","/checkout/success"))}),[p]),t?p?Object(Te.jsx)(Ge,{}):t.isLoading?Object(Te.jsx)(xe.a,{loading:!0,css:"\n    display: block;\n    margin: 30px 0;\n    text-align: center;\n",size:15,margin:2}):Object(Te.jsxs)(Te.Fragment,{children:[Object(Te.jsx)(Ce,{cart:t}),Object(Te.jsx)(Qe,{cart:t,citiesSuggestions:n,handleGetCitiesSuggestions:r,pickpoints:i,handleGetPickpoints:s,handleAddFile:l,handleDeleteFile:d,deliveryPrice:u,handleCalculateDelivery:o,handleCreateOrder:j,orderWasCreated:p})]}):Ke?null:Object(Te.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})}));r.a.render(Object(Te.jsx)(i.a,{store:he,children:Object(Te.jsx)(qe,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c95e89d0.chunk.js.map