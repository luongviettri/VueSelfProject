<template>
  <div class="text-center py-20 px-20">
    <p>{{ product.title }}</p>
    <p> <span class="text-yellow-400">$</span> {{ product.price }}</p>
  </div>
</template>

<script>

import useProductStore from '@/stores/productStore';

export default {
  name: 'DetailView',
  computed: {
    product() {
      const productStore = useProductStore();
      const id = this.$route.params.id;
      const productDetail = productStore.products.find(product => product.id == id);
      return productDetail;
    }
  }
};
</script>

<style  scoped></style>