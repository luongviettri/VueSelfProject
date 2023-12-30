<template>
    <div class="px-10">
        <h1 class="text-center  py-10">Bảng sản phẩm</h1>

        <!-- !table -->
        <div class="text-center">
            <div class="py-5 text-blue-500">
                <p>Ten san pham</p>
                <p>Gia tien</p>
            </div>

        </div>

    </div>
</template>

<script>

import axios from "axios";


export default {
    name: 'HomeView',
    created() {

        // axios.get("https://fakestoreapi.com/products").then((response) => {
        //     console.log(response.data);
        // });
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>
<style scoped></style>