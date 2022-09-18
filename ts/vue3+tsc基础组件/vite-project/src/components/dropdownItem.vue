<!-- dropdown内部的 -->
<template>
    <li>
        <a class="dropdown-item" :class="{'disabled':disabled}" href="#">
            <slot></slot>
        </a>

    </li>
</template>

<script setup lang='ts'>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>
<style>
</style>