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
                你好！{{ user.name }}
            </span>
            <div class="collapse navbar-collapse" id="navbarID">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
export interface userProps {
    isLogin: boolean;
    name?: string;
    id?:number;
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