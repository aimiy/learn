<template>
  <div>
    <h1>首页</h1>
    <NuxtLink to="/about">跳转到关于页</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: '首页 - SEO优化',
  meta: [
    { name: 'description', content: '这是首页的SEO描述' }
  ]
})
</script>