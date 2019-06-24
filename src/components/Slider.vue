<template>
    <yd-slider autoplay="3000" :show-pagination="false">
        <yd-slider-item v-for="item in items" :key="item.newsId">
            <router-link :to="'/NewsContent'+pathMap[item.firstTag]+'/'+item.newsId" target="_blank">
                <img :src="'/newsSrc/'+item.newsId+'-1.jpg'">
                <div class="im-title">
                    <p>{{item.title}}</p>
                </div>
            </router-link>
        </yd-slider-item>
    </yd-slider>
</template>
<script>
    export default {
        name: 'Slider',
        data() {
            return {
                items: [],
                pathMap: {
                    'IT': '/IT',
                    '数码': '/Digital',
                    '软件': '/Software',
                    '游戏': '/Game',
                    'iOS': '/iOS',
                    '安卓': '/Android',
                    '系统': '/System',
                    '智能': '/Intelligence',
                    '科学': '/Science'
                }
            }
        },
        async mounted() {
            try {
                let res = await this.$ajax.get('/api/getImNews').catch(e => {});
                for (var i = 0; i < res.data.length; i++) {
                    this.items.push(res.data[i]);
                }
            } catch {

            }
        }
    }
</script>
<style scoped>
    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 15rem;
    }

    .im-title {
        z-index: 10;
        height: 3rem;
        width: calc(100% - 1rem);
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .im-title p {
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin: 0;
        line-height: 3rem;
        height: 3rem;
        padding: 0 1rem
    }
</style>
<style>
    .yd-slider-item {
        padding: 0.5rem 0.5rem 0 0.5rem;
    }
</style>