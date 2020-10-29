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
        // 判断aside是否显示，把asideVisible的值封装到一个盒子里
        const asideVisible = ref(false);
        provide('asideVisible', asideVisible) //set
    }
}
</script>
