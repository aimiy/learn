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
import { onMounted, ref } from 'vue';

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
const dropdownRef = ref()
onMounted(() => {
    const mouseClick = (e: MouseEvent) => {
        console.log(e.target)
        console.log(dropdownRef.value)
        console.log()
        const isClick = dropdownRef.value.contains(e.target)
        if(!isClick){
            isShow.value = false

        }
    }
    document.addEventListener('click', mouseClick)
})
</script>
<style>
.isShow {
    display: block !important;
}
</style>