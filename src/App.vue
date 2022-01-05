<template>
    <router-view></router-view>
</template>

<script>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
html {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
body {
    font-family: 'Microsoft Yahei';
    margin: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar {
        //以下是修改滚动条样式的代码
        width: 4px;
        height: 4px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: rgba(64, 158, 255, 0.5);
    }
}
</style>
