<template>
  <div class="container pt-17">
    <Progress step="3" />
  </div>
  <div class="container mt-15 mb-17">
    <div class="row bg-linear rounded p-8">
      <h3 class="text-center mb-10">確認訂單</h3>
      <div class="col-6 offset-3">
        <div class="row mb-8">
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">下單日期：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{orderDate}}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">訂單編號：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{ order.id }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">顧客姓名：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{user.name}}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">聯絡電話：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{user.tel}}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">電子郵件：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{user.email}}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">地址：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{user.address}}</p>
           <p v-if="order.message" class="col-4 fw-bold mb-4 pb-4 border-bottom">備註：</p>
          <p v-if="order.message" class="col-8 mb-4 pb-4 border-bottom">{{order.message}}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">訂單金額：</p>
          <p
            class="col-8 mb-4 pb-4 border-bottom d-flex align-items-center justify-content-between"
          >
            NT${{ order.total }}
            <!-- <a
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              class="lh-1"
            >
              <span class="material-icons"> arrow_drop_down_circle </span></a
            > -->
          </p>
          <!-- <div class="collapse" id="collapseExample">
            <p class="fw-bold mb-6">購買商品</p>
            <div class="row align-items-center mb-4">
              <div class="col-6">
                <p>商品詳情</p>
              </div>

              <div class="col-3">
                <p>數量</p>
              </div>
              <div class="col-3">
                <p>小計</p>
              </div>
            </div>
            <div v-for="item in cart" :key="item.id" class="row align-items-center mb-5">
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
          </div> -->
        </div>

        <router-link
          :to="{ name:'final',params: { order: orderID}}"
          class="w-100 text-white btn btn-lg btn-secondary secondary-hover shadow"
          >確認訂單</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue';

export default {
  data() {
    return {
      orderDate: '',
      orderID: '',
      order: {},
      user: {},
    };
  },
  components: {
    Progress,
  },
  methods: {
    getOrder(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.order = res.data.order;
            const date = new Date(res.data.order.create_at * 1000).toISOString().split('T');
            [this.orderDate] = date;
            this.user = res.data.order.user;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },
  created() {
    this.orderID = this.$route.params.order;
    console.log(this.$route);
    this.getOrder(this.orderID);
  },
};
</script>
