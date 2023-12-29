<template>
    <div>
        <el-button type="primary" @click="openDialog">打开dialog</el-button>
        <el-button type="primary" @click="updateList">更新list</el-button>
        {{ list }}
        <div v-for="(item, index) of list" :key="index">
            {{ item }}
        </div>
        <div ref="remove">测试dialog</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [0, 1, 2, 3],
        };
    },
    computed: {},
    methods: {
        openDialog() {
            const element = this.$refs.remove;
            element.parentNode.removeChild(element);
        },
        updateList() {
            this.list.push(this.list.length)
        }
    },
    created() { },
    mounted() { },
    components: {}
}
</script>
<style lang='less' scoped></style>