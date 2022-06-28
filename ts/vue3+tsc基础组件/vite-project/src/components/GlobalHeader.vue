<!-- header -->
<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">专栏</a>
            <span v-if="!user.isLogin">
                <button type="button" class="btn btn-outline-light mx-2 btn-sm">注册</button>
                <button type="button" class="btn btn-outline-light btn-sm">登录</button>
            </span>
            <span v-else>
                <dropdown :title="`你好！${user.name}`">
                    <dropdownItem disabled>新建文章</dropdownItem>
                    <dropdownItem>编辑资料</dropdownItem>
                    <dropdownItem>退出登录</dropdownItem>
                </dropdown>
            </span>
        </div>
    </nav>
</template>

<script setup lang='ts'>
import dropdown from './dropdown.vue';
import dropdownItem from './dropdownItem.vue'
import { PropType } from 'vue';
export interface userProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}
const props = defineProps({
    user: {
        type: Object as PropType<userProps>,
        required: true
    }
})
</script>
<style>
</style>