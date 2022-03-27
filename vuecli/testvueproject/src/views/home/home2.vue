<template>
  <div>
    <button @click="toDetail">去详情2</button>
  </div>
</template>

<script>
export default {
    name:"home2",
  methods: {
    toDetail() {
      this.$router.push("/homeDetail2");
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouterEnter");
    next();
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    console.log("发送列表请求2");
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  }
};
</script>

<style>
</style>