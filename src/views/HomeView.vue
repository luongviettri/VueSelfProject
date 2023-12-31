<template>
    <div class="px-10">
        <h1 class="text-center  py-10">Bảng sản phẩm</h1>

        <!-- ! products -->
        <div v-for="(product, index) in this.products" :key="index" class="text-center">
            <div class="py-5 text-blue-500">
                <div class=" w-20 h-20 mx-auto pb-40">
                    <img class="object-contain" :src="product.image" alt="product image">
                </div>
                <h1 class="text-2xl">{{ product.title }}</h1>
                <p class="text-red-400 py-2">${{ product.price }}</p>

                <!-- Thông tin sản phẩm -->
                <router-link :to="`/detail/${product.id}`">
                    <button
                        class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mx-5">Xem
                        chi tiết</button>
                </router-link>


                <button v-if="!isInBag(product)" v-on:click="addToBag(product)"
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Thêm vào giỏ hàng
                </button>
                <button v-if="isInBag(product)" v-on:click="removeFromBag(product)"
                    class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Xóa
                    khỏi giỏ hàng</button>
            </div>

        </div>

    </div>
</template>

<script>

import axios from "axios";
import useProductStore from '@/stores/productStore';

export default {
    name: 'HomeView',

    data() {
        return {

        };
    },
    computed: {
        products() {
            const productStore = useProductStore();
            return productStore.products;
        }
    },
    methods: {
        addToBag(product) {
            // đầu tiên ta thêm số lượng sản phẩm là 1, sau đó đẩy lên global state
            const newProduct = { ...product, quantity: 1 };
            // đẩy lên global state
            const productStore = useProductStore();
            productStore.addToBag(newProduct);
        },
        removeFromBag(product) {
            const productID = product.id;
            //! đẩy lên global state
            const productStore = useProductStore();
            productStore.removeFromBag(productID);
        },
        isInBag(product) {
            //b1: lấy giỏ hàng về từ global state
            const productStore = useProductStore();
            const cart = productStore.cart;
            //b2: check trong global state
            return cart.find(item => item.id == product.id)
        }
    }
};
</script>
<style scoped></style>