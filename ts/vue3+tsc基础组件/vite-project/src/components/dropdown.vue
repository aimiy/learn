<!-- 封装普适的dropdown组件 -->
<template>
    <div class="dropdown" ref="dropdownRef">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false" @click="dropdownClick">
            {{ title }}
        </button>
        <ul class="dropdown-menu" :class="{ 'isShow': isShow }">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup lang='ts' setupContext>
import { onMounted, ref, watch } from 'vue';
import useClickOutside from '../hooks/useClickOutside';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
let isShow = ref(false)
const dropdownClick = () => {
    isShow.value = !isShow.value
}
const dropdownRef = ref()
const isClickOutside = useClickOutside(dropdownRef)
watch(isClickOutside, () => {
    if(isShow.value && isClickOutside.value){
        isShow.value = !isShow.value
    }
})
</script>
<style>
.isShow {
    display: block !important;
}
</style>