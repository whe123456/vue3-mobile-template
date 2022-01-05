<template>
    <div class="ourVersion_partner">
        <img src="@/assets/images/mobile/index/img1.png" />
        <img src="@/assets/images/mobile/index/img2.png" />
        <img src="@/assets/images/mobile/index/img3.png" />
    </div>
    <div class="ourVersion">
        <div class="versionMsg">
            <div class="versionList">
                <div class="versionTitle">
                    <img src="@/assets/images/mobile/index/nowNews.png" />
                </div>
                <div class="versionNews">
                    <div
                        class="versionNewsList"
                        v-for="(item, index) in dataInfo.news"
                        :key="index"
                        @click="goDetail(item.news_id)"
                    >
                        <div class="newsImg">
                            <img :src="item.cover" alt="" />
                        </div>
                        <div class="newsDetail">
                            <div class="title">
                                {{ item.title }}
                            </div>
                            <div class="date">
                                {{ item.publishe_time }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
</script>
<style lang="scss" scoped>
</style>
