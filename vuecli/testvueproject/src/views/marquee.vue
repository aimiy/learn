<template>
  <div class="marquee-wrap" ref="marquee-wrap">
    <div ref="marquee" class="marquee" :class="{'toLeftAnimation':animation}">
      <span v-for="(item,index) in marqueenList" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marqueenList: [],
      animation: false
    };
  },
  methods: {
    getTexts() {
      this.marqueenList = [
        "文字一文字一文字一文字一文字一文字一文字一文字一文字一文字一",
        "文字二文字二文字二文字二文字二文字二文字二",
        "sfafsf"
      ];
      this.$nextTick(() => {
        const DOM_MARQUEE_WRAP = this.$refs["marquee-wrap"];
        const DOM_MARQUEE = this.$refs["marquee"];
        if (DOM_MARQUEE.scrollWidth > DOM_MARQUEE_WRAP.offsetWidth) {
          this.animation = true;
          DOM_MARQUEE.style.animationDuration =
            (DOM_MARQUEE.scrollWidth / 100) * 2 + "s";
        }
      });
    }
  },
  mounted() {
    this.getTexts();
  }
};
</script>

<style scoped>
.marquee-wrap {
  width: 100%;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-wrap .marquee {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
.toLeftAnimation {
  animation: toLeftAnimation 30s infinite linear;
  -webkit-animation: toLeftAnimation 30s infinite linear;
}
@keyframes toLeftAnimation {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>