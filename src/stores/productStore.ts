import { defineStore } from "pinia";
import axios from "axios";

import type { Product, Cart, State } from "../../types";

const useProductStore = defineStore("product", {
  state: (): State => ({
    products: JSON.parse(localStorage.getItem("products") || "[]"), //! khai báo product là 1 mảng rỗng
    cart: JSON.parse(localStorage.getItem("cart") || "[]") //! giỏ hàng
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      this.products = response.data;
    },
    addToBag(product: Cart) {
      this.cart.push(product);
      console.log(this.cart);
    },
    removeFromBag(productID: number) {
      this.cart = this.cart.filter((product) => product.id !== productID);
    }
  }
});
export default useProductStore;
