<template>
  <div>
    <h1>关于页</h1>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: '关于 - SEO优化',
  meta: [
    { name: 'description', content: '这是关于页的SEO描述' }
  ]
})
</script>