<template>
  <div class="container pt-17">
    <Progress step="2" />
  </div>
  <div class="container mt-15 mb-17">
    <router-link class="d-inline-flex align-items-center mb-4" :to="`/cart`"
      ><span class="material-icons me-3"> reply </span> 返回購物車</router-link
    >
    <div class="row row-cols-2 gx-5">
      <div class="col">
        <p class="text-xl rounded-top bg-secondary p-4">訂單資訊</p>
        <div class="bg-table px-8 rounded-bottom mb-8">
          <div class="row py-4 align-items-center text-dark border-bottom">
            <div class="col-6">
              <p>商品資訊</p>
            </div>

            <div class="col-3">
              <p>數量</p>
            </div>
            <div class="col-3">
              <p>小計</p>
            </div>
          </div>
          <div
            v-for="item in cart"
            :key="item.id"
            class="row py-4 align-items-center text-dark border-bottom"
          >
            <div class="col-6">
              <div class="d-flex align-items-center">
                <img class="w-40 me-4" :src="item.product.imageUrl" alt="" />

                <p>{{ item.product.title }}</p>
              </div>
            </div>

            <div class="col-3">
              <p>{{ item.qty }}</p>
            </div>
            <div class="col-3">
              <p>NT${{ item.final_total }}</p>
            </div>
          </div>

          <div class="border-bottom border-2 border-white"></div>
          <div class="row text-dark px-4 py-6">
            <!-- <div class="col-9 mb-4">
              <p class="fw-bold text-lg text-secondary">折扣</p>
            </div>

            <div class="col-3">
              <p class="fw-bold text-lg text-end text-secondary">-NT$80</p>
            </div> -->
            <div class="col-9">
              <p class="fw-bold text-lg">總計：</p>
            </div>

            <div class="col-3">
              <p class="fw-bold text-lg text-end">NT${{ final_total }}</p>
            </div>
          </div>
        </div>
        <p class="text-xl rounded-top bg-secondary p-4">購物須知</p>
        <div class="bg-table p-8 rounded-bottom text-dark">
          <p class="fw-bold">商品購買須知</p>
          <p class="mb-6">
            產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
            商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。 <br />
            RingRing盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
          </p>
          <p class="fw-bold">退換貨須知</p>
          <p>
            依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
          </p>
        </div>
      </div>
      <div class="col">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue';
import Form from '@/components/Form.vue';

export default {
  data() {
    return {
      cart: [],
      final_total: 0,
    };
  },
  components: {
    Progress,
    Form,
  },
  methods: {
    getcart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.success) {
            this.cart = res.data.data.carts;
            this.final_total = res.data.data.final_total;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getcart();
  },
  created() {
    console.log(this.$route);
  },
};
</script>
