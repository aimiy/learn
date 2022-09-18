<!--  -->
<template>
    <h2>{{ result }}</h2>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    // setup() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             return resolve({result:"suspense"})
    //         },2000)
    //     })
    // }
    async setup() {
        return await new Promise((resolve,reject) => {
            setTimeout(() => {
                return resolve({ result: "suspense" })
            }, 2000)
        })
    }
})
</script>
<style>
</style>