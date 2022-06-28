<!-- 封装普适的dropdown组件 -->
<template>
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false" @click="dropdownClick">
            {{ title }}
        </button>
        <ul class="dropdown-menu" :class="{'isShow':isShow}">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
let isShow = ref(false)
const dropdownClick = () => {
    isShow.value = !isShow.value
    console.log(isShow)
}
</script>
<style>
.isShow {
    display: block!important;
}
</style>