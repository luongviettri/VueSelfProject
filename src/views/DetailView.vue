<template>
  <div class="text-center py-20 px-20" v-if="product">
    <p>{{ product.title }}</p>
    <p><span class="text-yellow-400">$</span> {{ product.price }}</p>
  </div>
</template>

<script lang="ts">

import type { Product } from "../../types"

import { defineComponent } from 'vue';
import useProductStore from '@/stores/productStore';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'DetailView',
  computed: {
    product(): Product | undefined {
      const productStore = useProductStore();
      const route = useRoute(); // Use useRoute to get the current route
      const id: number = Number(route.params.id); // Access params from the route
      const productDetail = productStore.products.find(product => product.id == id);
      return productDetail;
    }
  }
});
</script>

<style  scoped></style>