
<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ColumnList, { ColumnProps } from "./components/ColumnList.vue"
import GlobalHeader, { userProps } from "./components/GlobalHeader.vue"
const list: ColumnProps[] = [
  { id: 1, title: "某某专栏", description: "描述", avatar: "assets/logo.png" },
  { id: 2, title: "某某专栏", description: "描述", avatar: "assets/logo.png" },
  { id: 3, title: "某某专栏", description: "描述", avatar: "assets/logo.png" },
  { id: 4, title: "某某专栏", description: "描述", avatar: "" }
];
const user: userProps = {
  isLogin: true,
  name: "fuym"
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css'
</style>
