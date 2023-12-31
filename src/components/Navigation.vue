<template>
  <div class="flex flex-row h-20 my-4 items-center">
    <div class="basis-1/6">

      <img class="w-full h-full object-contain max-h-20"
        src="https://img.freepik.com/premium-photo/best-way-predict-future-is-create-it-motivational-quote-letter-board-cactus-succulent-flower-white-table-concept-inspirational-quote-day-front-view_75163-2981.jpg"
        alt="logo image">
    </div>

    <div class="grow">



      <n-space vertical>
        <n-input size="large" round placeholder="Tìm kiếm gì đó" />
      </n-space>
    </div>
    <div class="basis-1/5 ">
      <div class="flex  text-center text-green-500 justify-end  ">
        <!-- <button class="flex-auto"></button> -->

        <navigation-button>
          <router-link to="/">
            Trang chủ
          </router-link>
        </navigation-button>

        <navigation-button>
          Tài khoản
        </navigation-button>

        <navigation-button>
          <router-link to="/cart">
            <div class="flex items-center">
              <n-icon size="30">
                <bag-outline />
              </n-icon>

              <span class="text-red-600 relative  " style="top: -18px; left:-5px" v-if="cartLength > 0">
                {{ cartLength }}
              </span>
            </div>
          </router-link>
        </navigation-button>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavigationButton from '@/components/NavigationButton.vue';
import useProductStore from '@/stores/productStore';
import { GameControllerOutline, GameController, BagOutline } from '@vicons/ionicons5'
import { defineComponent } from 'vue';
import { NSpace } from 'naive-ui/lib/space';
import { NInput } from 'naive-ui/lib/input';
import { NIcon } from 'naive-ui/lib/icon'

export default defineComponent({
  name: 'Navigation',
  components: {
    NSpace,
    NInput,
    NavigationButton,
    GameController,
    GameControllerOutline,
    NIcon,
    BagOutline
  },
  computed: {
    cartLength() {
      const productStore = useProductStore();
      const length = productStore.cart.length;
      return length;
    }
  }

});
</script>

<style lang="scss" scoped></style>