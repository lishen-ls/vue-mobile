<template>
    <div class="news-list">
        <div v-for="item in items" class="news-item">
            <router-link class="news-card" :to="'/NewsContent/'+item.firstTag+'/'+item.newsId" target="_blank">
                <img v-lazy="'/newsSrc/'+item.newsId+'-0.jpg'" class="news-img"></img>
                <div class="news-title">
                    <p>{{item.title}}</p>
                    <span class="news-time">{{item.time}}</span>
                    <span class="news-comment">{{item.commentNum}}评论</span>
                </div>
            </router-link>
        </div>
        <p class="more">{{loadingVis}}</p>
    </div>
</template>
<script>
    import ut from '@/ut'
    export default {
        name: 'NewsCard',
        props: {
            tag: {
                default: '',
                loading: true
            }
        },
        data() {
            return {
                items: [],
                startIndex: 0,
                loading: true,
                pathMap: {
                    '总览': 'MainCon',
                    'IT': 'IT',
                    '数码': 'Digital',
                    '软件': 'Software',
                    '游戏': 'Game',
                    'iOS': 'iOS',
                    '安卓': 'Android',
                    '系统': 'System',
                    '智能': 'Intelligence',
                    '科学': 'Science'
                }
            }
        },
        mounted() {
            this.once();
            window.addEventListener('scroll', this.watch);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.watch);
        },
        computed: {
            loadingVis() {
                return this.loading ? '正在加载...' : '加载更多'
            }
        },
        methods: {
            watch() {
                if (document.body.scrollHeight <= window.pageYOffset + window.innerHeight + 200 && this.loading ==
                    false) {
                    this.more();
                }
            },
            async once() {
                this.loading = true;
                let res = await this.$ajax.get('/api/getNewsList', {
                    params: {
                        startIndex: this.startIndex,
                        firstTag: this.tag
                    }
                }).catch(e => {});
                for (let i = 0; i < res.data.length; i++) {
                    let newTime = new Date(res.data[i].newsTime);
                    res.data[i].time = ` ${newTime.getFullYear()}-${newTime.getMonth()+1}-${newTime.getDate()} 
                    ${newTime.getHours()}:${newTime.getMinutes()}:${newTime.getSeconds()}`;
                    res.data[i].firstTag = this.pathMap[res.data[i].firstTag];
                    this.items.push(res.data[i]);
                }
                this.startIndex += res.data.length;
                this.loading = false;
            },
            more: ut.debounce(async function () {
                this.loading = true;
                let res = await this.$ajax.get('/api/getNewsList', {
                    params: {
                        startIndex: this.startIndex,
                        firstTag: this.tag
                    }
                }).catch(e => {});
                for (let i = 0; i < res.data.length; i++) {
                    let newTime = new Date(res.data[i].newsTime);
                    res.data[i].time = ` ${newTime.getFullYear()}-${newTime.getMonth()+1}-${newTime.getDate()} 
                    ${newTime.getHours()}:${newTime.getMinutes()}:${newTime.getSeconds()}`;
                    res.data[i].firstTag = this.pathMap[res.data[i].firstTag];
                    this.items.push(res.data[i]);
                }
                this.startIndex += res.data.length;
                this.loading = false;
            }, 100)
        }
    }
</script>
<style scoped>
.news-list{
    background-color: white;
}
    .more {
        line-height: 2rem;
        font-size: 1.5rem;
        text-align: center;
        color: #909399;
        padding-bottom: 1.5rem;
    }

    .news-item {
        margin: 1rem 1.5rem;
    }

    .news-card {
        display: flex;
    }

    .news-img {
        height: 7rem;
        width: 11rem;
        object-fit: cover;
        object-position: center;
        margin: 0 1rem 1rem 0;
        border-radius: 2%;
        border: 1px solid rgba(0, 0, 0, 0.02);
    }

    .news-title {
        width: calc(100% - 11rem);
        position: relative;

    }

    .news-title p {
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        font-size: 1.4rem;
        line-height: 1.6rem;
        text-align: justify;
        color: #303133;
    }

    .news-time {
        float: left;
        position: absolute;
        bottom: 1rem;
        color: #c0c4cc;
    }

    .news-comment {
        position: absolute;
        bottom: 1rem;
        right: 0;
        color: #c0c4cc;
    }
</style>