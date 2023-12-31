<template>
  <header class="px-5">
    <navigation />
  </header>
  <RouterView />
</template>

<script >

import { RouterLink, RouterView } from 'vue-router';
import useProductStore from "./stores/productStore"
import axios from 'axios';
import Navigation from './components/Navigation.vue';




export default {

  name: 'App.vue',
  components: {
    Navigation
  },

  created() {
    const productStore = useProductStore();
    productStore.fetchProducts();
  },
  mounted() {

    const store = useProductStore();
    store.$subscribe((mutation, state) => {
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('products', JSON.stringify(state.products));
    });

  }

}

</script>

<style scoped></style>

