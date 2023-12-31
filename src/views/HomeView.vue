<template>
    <div class="px-10">
        <h1
            class="text-center mb-4 py-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Sản phẩm của chúng tôi</h1>
        <!-- ! products -->
        <div class="grid grid-cols-4 gap-4">

            <div v-for="(product, index) in products" :key="index" class="text-center">
                <n-card :title="formattedTitle(product.title)" class="h-96">
                    <template #cover>
                        <img :src="product.image" alt="product image" class="object-contain h-52">
                    </template>
                    <p class="text-blue-700 py-2 text-xl">
                        <span class="text-yellow-500">
                            $
                        </span>

                        {{ product.price }}
                    </p>
                    <div class="flex gap-4">

                        <router-link :to="`/detail/${product.id}`"
                            class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white  border border-green-500 hover:border-transparent rounded  py-1 px-2 grow">
                            <button>
                                chi tiết</button>
                        </router-link>

                        <button v-if="!isInBag(product)" v-on:click="addToBag(product)"
                            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded grow py-1 px-2">
                            Thêm
                        </button>
                        <button v-if="isInBag(product)" v-on:click="removeFromBag(product)"
                            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  border border-red-500 hover:border-transparent rounded grow py-1 px-2">Xóa
                        </button>
                    </div>
                </n-card>



            </div>
        </div>

    </div>
</template>

<script lang="ts">
import type { Product } from "types";
import useProductStore from '@/stores/productStore';
import { defineComponent } from 'vue';
import { NCard } from "naive-ui";


export default defineComponent({
    name: 'HomeView',
    components: {
        NCard
    },
    computed: {
        products() {
            const productStore = useProductStore();
            return productStore.products;
        },
        formattedTitle(): (title: string) => string {
            return (title: string) => {
                return title.length > 10 ? `${title.slice(0, 10)}...` : title;
            }
        }
    },
    methods: {
        addToBag(product: Product) {
            // đầu tiên ta thêm số lượng sản phẩm là 1, sau đó đẩy lên global state
            const newProduct = { ...product, quantity: 1 };
            // đẩy lên global state
            const productStore = useProductStore();
            productStore.addToBag(newProduct);
        },
        removeFromBag(product: Product) {
            const productID = product.id;
            //! đẩy lên global state
            const productStore = useProductStore();
            productStore.removeFromBag(productID);
        },
        isInBag(product: Product) {
            //b1: lấy giỏ hàng về từ global state
            const productStore = useProductStore();
            const cart = productStore.cart;
            //b2: check trong global state
            return cart.find(item => item.id == product.id)
        }
    }
});
</script>
<style scoped></style>