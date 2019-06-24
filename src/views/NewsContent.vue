<template>
    <div style="background-color:white">
        <div>
            <p id="title">{{title}}</p>
            <p id="about" v-html="about"></p>
        </div>
        <div id='content' v-html="newsContent" v-lazy-container="{select:'img'}"></div>
    </div>
</template>
<script>
    export default {
        name: 'NewsContent',
        data() {
            return {
                title: '',
                about: '',
                newsContent: '',
                permitComment: 'loading',
                // pathMap: {
                //     'IT': 'IT',
                //     'Digital': '数码',
                //     'Software': '软件',
                //     'Game': '游戏',
                //     'iOS': 'iOS',
                //     'Android': '安卓',
                //     'System': '系统',
                //     'Intelligence': '智能',
                //     'Science': '科学'
                // }
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
                },
            }
        },
        async created() {
            let res = await this.$ajax.get('/api/getNewsContent', {
                params: {
                    newsId: this.$route.params.id
                }
            });
            if (res.data.success) {
                let newTime = new Date(res.data.attr.newsTime);
                this.newsContent = res.data.content;
                this.title = res.data.attr.title;
                this.about =
                    `时间：${newTime.getFullYear()}-${newTime.getMonth()+1}-${newTime.getDate()} 
            ${newTime.getHours()}:${newTime.getMinutes()}:${newTime.getSeconds()}&nbsp&nbsp 来源：${res.data.attr.origin}`;
                document.title = res.data.attr.title + ' - 鲜果';
                // this.$store.state.news.praiseNum = res.data.attr.praiseNum;
                // this.$store.state.news.commentNum = res.data.attr.commentNum;
                // this.$store.state.news.firstTag = res.data.attr.firstTag;
                // this.$store.state.news.secondTag = res.data.attr.secondTag;
                document.getElementById('MainCon').classList.remove('active');
                document.getElementById(this.pathMap[res.data.attr.firstTag]).classList.add('active');
                this.permitComment = res.data.attr.permitComment;
            } else {
                this.$router.push('/NotFound');
            }
        },
        updated() {
            let iframe = document.getElementsByTagName('iframe');
            for (let i = 0; i < iframe.length; i++) {
                iframe[i].removeAttribute('width');
                iframe[i].removeAttribute('height');
            }
        }
    }
</script>
<style>
    .appStore {
        border: 1px solid #e6e6e6;
        padding: 1rem;
        overflow: hidden;
    }
    .fn-right {
        float: right;
        display: none;
    }

    .fn-left {
        float: left;
    }

    .appStore p {
        display: none;
    }

    dl.fn-left {
        width: calc(100% - 110px - 2rem);
        text-align: start;
        margin-left: 1rem;
    }

    dl.fn-left dt {
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    dl.fn-left dd {
        margin: 0;
        font-size: 1.3rem;
    }

    .appStore-type {
        margin: 0.5rem 0 1rem 0 !important;
        font-size: 1rem;
        color: #76787a;
    }

    #content iframe {
        width: 100%;
        height: 190px;
    }

    #content h2 {
        font-size: 2rem;

    }

    #content h3 {
        font-size: 1.7rem;
    }

    #content figcaption {
        font-size: 1.3rem;
    }

    .app-card {
        border: 1px solid #e6e6e6;
        padding: 1rem;
    }

    .app-card-left {
        width: 5rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .app-card-right {
        height: 5rem;
        width: calc(100% - 6.5rem);
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .app-title {
        font-size: 1rem;
        margin: 1rem 0 0 0;
    }

    .download-group {
        position: absolute;
        bottom: 1rem;
    }

    .app-download {
        margin-right: 1rem;
    }

    #content {
        padding: 0 2rem;
    }

    #content a {
        color: #409eff;
    }

    #content td {
        border: 1px solid rgba(0, 0, 0, 0.07);
        padding: 1rem 0.5rem;
        line-height: 1.6rem;
        font-size: 1.6rem;
    }

    #content table {
        border-spacing: 0;
        border-collapse: collapse;
        margin: 0 auto;
    }

    hr {
        margin: 1rem 1rem;
    }

    #content tr:nth-child(2n) {
        background-color: #f2f6fc;
    }

    #content tr:first-child {
        background-color: #409eff;
        text-align: center;
        color: white;
    }

    #content img {
        max-width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.03);
    }

    #content p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 2.5rem;
        text-align: justify;
        margin: 1.2rem 0;
    }

    #title {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        margin: 2rem 2rem 1rem 2rem;
        line-height: 3rem;
        color: #303133;
    }

    #about {
        font-size: 1rem;
        margin-bottom: 1rem;
        text-align: center;
        color: #909399;
    }
</style>