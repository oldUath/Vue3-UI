<template>
<div>
    <h1>Tab组件</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航22222">内容2</Tab>
    </Tabs>
</div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Tabs,
        Tab
    },
    setup() {
        const x = ref("导航22222")
        return {
            x
        }
    }
}
</script>
