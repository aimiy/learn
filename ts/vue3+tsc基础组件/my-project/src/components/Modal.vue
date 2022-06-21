<!-- 弹窗telport -->
<template>
  <teleport to="#modal">
    <div id="center" v-if="visible">弹窗
      <button @click="$emit('closeModal')">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "ModalDialog",
  props: {
    msg: String,
    visible: Boolean,
  },
  emits: {
    "close-modal": null,
  },
  methods: {},
  setup(props, context) {
    context.emit("close-modal");
    const data = reactive({
      v:false
    })
    data.v = true
    console.log(data.v)
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