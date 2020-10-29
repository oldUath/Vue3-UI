<template>
<router-view />
</template>

<script lang="ts">
import {
    provide,
    ref
} from 'vue'
export default {
    name: 'App',
    setup() {
        //获取屏幕的宽度，如果是大于500则就直接显示
        const width = document.documentElement.clientWidth;
        console.log(width)

        // 判断aside是否显示，把asideVisible的值封装到一个盒子里
        const asideVisible = ref(width <= 500 ? false : true);
        provide('asideVisible', asideVisible) //set
    }
}
</script>
