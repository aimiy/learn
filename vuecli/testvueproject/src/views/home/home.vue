<template>
  <div>
    <button @click="toDetail">去详情</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    toDetail() {
      this.$router.push("/homeDetail");
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouterEnter");
    next(vm => {
      if (from.path !== "/homeDetail") {
        // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
        console.log(vm)
        console.log("mounted");
    console.log("发送列表请求");
      }
    });
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    console.log("发送列表请求");
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  }
};
</script>

<style>
</style>