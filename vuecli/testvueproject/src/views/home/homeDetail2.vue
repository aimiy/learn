<template>
  <div>detail2</div>
</template>

<script>
export default {
    name:"homeDetail2",
  data() {
    return {};
  },
  methods: {
    getList() {
      console.log("发送请求2");
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style>
</style>