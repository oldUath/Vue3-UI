<template>
<div>
    <div>Button示例</div>
    <h1>类别</h1>
    <div>
        <Button theme="button">默认按钮</Button>
        <Button theme="link">Link连接</Button>
        <Button theme="text">文本</Button>
    </div>
    <h1>尺寸</h1>
    <div>
        <dir>
            <Button size="big">大按钮</Button>
            <Button>普通按钮</Button>
            <Button size="small">小按钮</Button>
        </dir>
        <dir>
            <Button theme="link" size="big">大连接</Button>
            <Button theme="link">普通连接</Button>
            <Button theme="link" size="small">小连接</Button>
        </dir>
        <dir>
            <Button theme="text" size="big">大文本</Button>
            <Button theme="text">普通文本</Button>
            <Button theme="text" size="small">小文本</Button>
        </dir>
    </div>

    <h1>等级</h1>
    <div>
        <dir>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </dir>
        <dir>
            <Button theme="link" level="main">主要链接</Button>
            <Button theme="link">普通链接</Button>
            <Button theme="link" level="danger">危险链接</Button>
        </dir>
        <dir>
            <Button theme="text" level="main">主要文字</Button>
            <Button theme="text">普通文字</Button>
            <Button theme="text" level="danger">危险文字</Button>
        </dir>
    </div>

    <h1>禁用</h1>
    <div>
        <dir>
            <Button disabled>禁用按钮</Button>
            <Button theme="link" disabled>禁用链接按钮</Button>
            <Button theme="text" disabled>禁用文本按钮</Button>
        </dir>
    </div>
    <h1>状态</h1>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>

</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return {
            onClick
        }
    }
}
</script>
