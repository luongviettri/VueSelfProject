<template>
  <div class="flex">
    <div class="flex-auto">
      <p class="text-5xl text-center text-red-500 py-10">
        Cửa hàng xịn nhất thế giới
      </p>
    </div>

    <div class="flex-auto ">
      <div class="flex text-xl text-center text-green-500 py-10 ">
        <router-link to="/">

          <button class="flex-auto">Trang chủ</button>
        </router-link>

        <button class="flex-auto">Tài khoản</button>

        <router-link to="/cart">
          <button class="flex-auto">Giỏ hàng
            <span class="text-red-600">
              {{ this.cart }}
            </span>
          </button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import useProductStore from '@/stores/productStore.js';

export default {
  name: 'Navigation',
  computed: {
    cart() {
      const productStore = useProductStore();
      const length = productStore.cart.length;
      return length;
    }
  }

};
</script>

<style lang="scss" scoped></style>