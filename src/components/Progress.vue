<template>
    <div class="d-flex justify-content-around w-50 mx-auto mb-10">
      <div class="d-flex flex-column align-items-center">
        <div
          class="d-flex align-items-center justify-content-center circle rounded-circle border mb-2"
          :class="{'progress-active':step ==='1'}"
        >
          1
        </div>
        <p>購物車</p>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div
          class="d-flex align-items-center justify-content-center circle rounded-circle border mb-2"
          :class="{'progress-active':step ==='2'}"
        >
          2
        </div>
        <p>填寫資訊</p>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div
          class="d-flex align-items-center justify-content-center circle rounded-circle border mb-2"
          :class="{'progress-active':step ==='3'}"
        >
          3
        </div>
        <p>確認訂單</p>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div
          class="d-flex align-items-center justify-content-center circle rounded-circle border mb-2"
          :class="{'progress-active':step ==='4'}"
        >
          4
        </div>
        <p>完成購物</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    step: String,
  },
};
</script>
