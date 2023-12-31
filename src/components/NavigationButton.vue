<template>
  <n-space>

    <n-button strong secondary type="info">
      <slot></slot>
    </n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton } from 'naive-ui';
import { NSpace } from 'naive-ui/lib/space';
export default defineComponent({
  name: 'NavigationButton',
  components: {
    NButton,
    NSpace
  }
});
</script>

<style lang="scss" scoped></style>