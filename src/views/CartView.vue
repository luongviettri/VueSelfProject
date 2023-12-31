<template>
  <div v-if="cart.length == 0">
    <h1>Giỏ hàng rỗng</h1>
  </div>

  <div v-else>

    <div v-for="(product, index) in cart" :key="index">
      <div class="border-double border-4 border-indigo-600 py-5 my-2 flex">
        <p class="mx-2">{{ product.title }}</p>
        <p class="mx-2">{{ product.price }}</p>
        <p class="mx-2"> {{ product.quantity }}</p>
        <div class="mx-2 flex">
          <button :disabled="product.quantity <= 1" v-on:click="product.quantity--" class="mx-2">-
          </button>
          <button v-on:click="product.quantity++" class="mx-2">+</button>
          <button @click="removeFromBag(product)">Xóa khỏi giỏ hàng</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">

import useProductStore from '@/stores/productStore';

import type { Product } from 'types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView',
  computed: {
    cart() {
      const productStore = useProductStore();
      return productStore.cart;
    }
  },
  methods: {
    removeFromBag(product: Product) {
      const productID = product.id;
      //! đẩy lên global state
      const productStore = useProductStore();
      productStore.removeFromBag(productID);
    }
  }
});
</script>
