(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd9c1"],{"2d70":function(t,e,c){"use strict";c.r(e);c("b0c0");var o=c("7a23"),s={class:"container pt-17"},r={class:"container mt-15"},a={class:"row bg-linear rounded p-8"},d=Object(o["h"])("p",{class:"text-center text-2xl mb-6"},"感謝您的購買",-1),l=Object(o["h"])("p",{class:"text-center mb-6"},"下列為您的訂單資訊",-1),b={class:"d-flex w-40 mx-auto"},i=Object(o["g"])("前往首頁"),n=Object(o["g"])("前往商店"),p={class:"container mt-12 mb-17"},h={class:"row row-cols-2 gx-5"},O=Object(o["f"])('<div class="col"><p class="text-xl rounded-top bg-secondary p-4">訂單資訊</p><div class="bg-table px-8 rounded-bottom"><div class="row py-4 align-items-center text-dark border-bottom"><div class="col-6"><p>商品資訊</p></div><div class="col-3"><p>數量</p></div><div class="col-3"><p>小計</p></div></div><div class="border-bottom border-2 border-white"></div><div class="row text-dark px-4 py-6"><div class="col-9 mb-4"><p class="fw-bold text-lg text-secondary">折扣</p></div><div class="col-3"><p class="fw-bold text-lg text-end text-secondary">-NT$80</p></div><div class="col-9"><p class="fw-bold text-lg">總計：</p></div></div></div></div>',1),j={class:"col"},v=Object(o["h"])("p",{class:"text-xl rounded-top bg-secondary p-4"},"顧客資訊",-1),u={class:"bg-table px-8 rounded-bottom text-dark"},w={class:"row row-cols-2 py-4 border-bottom"},m=Object(o["h"])("p",{class:"col"},"下單日期",-1),x={class:"col"},f={class:"row row-cols-2 py-4 border-bottom"},g=Object(o["h"])("p",{class:"col"},"顧客姓名",-1),y={class:"col"},D={class:"row row-cols-2 py-4 border-bottom"},k=Object(o["h"])("p",{class:"col"},"聯絡電話",-1),I={class:"col"},$={class:"row row-cols-2 py-4 border-bottom"},_=Object(o["h"])("p",{class:"col"},"電子郵件",-1),A={class:"col"},J={class:"row row-cols-2 py-4 border-bottom"},K=Object(o["h"])("p",{class:"col"},"地址",-1),P={class:"col"};function S(t,e,c,S,T,N){var q=Object(o["A"])("Progress"),z=Object(o["A"])("router-link");return Object(o["v"])(),Object(o["d"])(o["a"],null,[Object(o["h"])("div",s,[Object(o["h"])(q,{step:"4"})]),Object(o["h"])("div",r,[Object(o["h"])("div",a,[d,l,Object(o["h"])("div",b,[Object(o["h"])(z,{to:"/home",class:"w-50 btn btn-outline-info shadow-sm me-6"},{default:Object(o["K"])((function(){return[i]})),_:1}),Object(o["h"])(z,{to:"/shop",href:"index.html",class:"w-50 btn btn-secondary shadow-sm text-white secondary-hover"},{default:Object(o["K"])((function(){return[n]})),_:1})])])]),Object(o["h"])("div",p,[Object(o["h"])("div",h,[O,Object(o["h"])("div",j,[v,Object(o["h"])("div",u,[Object(o["h"])("div",w,[m,Object(o["h"])("p",x,Object(o["D"])(T.orderDate),1)]),Object(o["h"])("div",f,[g,Object(o["h"])("p",y,Object(o["D"])(T.user.name),1)]),Object(o["h"])("div",D,[k,Object(o["h"])("p",I,Object(o["D"])(T.user.tel),1)]),Object(o["h"])("div",$,[_,Object(o["h"])("p",A,Object(o["D"])(T.user.email),1)]),Object(o["h"])("div",J,[K,Object(o["h"])("p",P,Object(o["D"])(T.user.address),1)])])])])])],64)}var T=c("3835"),N=(c("99af"),c("ac1f"),c("1276"),c("ad18")),q={data:function(){return{orderDate:"",orderID:"",order:{},user:{}}},components:{Progress:N["a"]},methods:{getOrder:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/order/").concat(t);this.$http.get(c).then((function(t){if(console.log(t.data),t.data.success){e.order=t.data.order;var c=new Date(1e3*t.data.order.create_at).toISOString().split("T"),o=Object(T["a"])(c,1);e.orderDate=o[0],e.user=t.data.order.user}else alert(t.data.message)})).catch((function(t){console.log(t)}))}},created:function(){this.orderID=this.$route.params.order,console.log(this.$route),this.getOrder(this.orderID)}};q.render=S;e["default"]=q}}]);
//# sourceMappingURL=chunk-2d0bd9c1.09faae99.js.map