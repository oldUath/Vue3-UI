<template>
<div>Dialog 示例</div>
<h1>弹窗示例</h1>
<Button @click="toggle">toogle</Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancle="f2">
    <template v-slot:title>
        <h2>具名插槽</h2>
    </template>
    <template v-slot:content>
        <p>第一行</p>
        <p>第八行</p>
    </template>
</Dialog>
<h1>示例2</h1>
<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import {
    ref,
    h
} from 'vue'
import {
    openDialog
} from '../lib/openDialog'
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value
        };
        const f1 = () => {
            return false;
        };
        const f2 = () => {};
        const showDialog = () => {
            openDialog({
                title: h('strong', {}, '标题'),
                content: '你好',
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog
        }
    }
}
</script>
