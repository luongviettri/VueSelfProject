import { defineStore } from "pinia";
import axios from "axios";
const useProductStore = defineStore("product", {
  state: () => ({
    products: JSON.parse(localStorage.getItem("products")) || [], //! khai báo product là 1 mảng rỗng
    cart: JSON.parse(localStorage.getItem("cart")) || [] //! giỏ hàng
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      this.products = response.data;
    },
    addToBag(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    removeFromBag(productID) {
      this.cart = this.cart.filter((product) => product.id !== productID);
    }
  }
});
export default useProductStore;
