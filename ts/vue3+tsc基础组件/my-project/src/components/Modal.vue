<!-- 弹窗telport -->
<template>
<teleport to="#modal">
  <div id="center">弹窗</div>
</teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalDialog",
  props: {
    msg: String,
  },
});
</script>
<style scoped>
#center {
  position: fixed;
  width: 100px;
  height: 100px;
  border: 1px solid #333333;
  
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  background: #fff;
}
</style>