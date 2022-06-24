<template>
  <div class="container">
    1231232
    {{num}}
    {{double}}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, computed } from "vue";
const num = ref(2);
const d = reactive({
  num:3,
  double: computed(() => num.value * 2),
});
const data = toRefs(d);
</script>

<style>
</style>