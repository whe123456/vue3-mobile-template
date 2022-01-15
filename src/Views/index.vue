<template>
  <header></header>
  <Tabs v-model="active">
    <Tab title="课程介绍"
      >三节课是一所互联网人的在线大学。三节课一方面通过在线学习引擎来为互联网行业批量输送合格人才，另一方面也投入较重资源为整个互联网行业培养潜在的行业精英。
      [1]
      从2016年1月起，三节课以产品和运营为切入点，主打互联网热点人物事件专业分析解读，并通过内容入口集聚粉丝，开展多层次的互联网职业培训，获得了一大批互联网从业者的关注。从1月份发展至今，三节课平台已经聚集近20万粉丝，用户月学习人次达到5万规模。</Tab
    >
    <Tab title="课程目录">内容 2</Tab>
  </Tabs>
  <footer class="footerInfo">
    <Button type="primary">主要按钮</Button>
  </footer>
</template>
<script lang="ts" setup>
import { Tab, Tabs, Button } from 'vant'
import { ref } from 'vue'
const active = ref(2)
</script>
<style lang="scss" scoped>
.footerInfo {
  width: 100%;
  height: 72px;
  background: #ffffff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
