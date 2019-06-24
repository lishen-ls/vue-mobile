<template>
    <newscard :tag="path"></newscard>
</template>
<script>
    import NewsCard from '@/components/NewsCard'
    export default {
        name: 'Classify',
        components: {
            'newscard': NewsCard
        },
        data(){
            return{
                path:'',
                pathMap: {
                    'IT': 'IT',
                    'Digital': '数码',
                    'Software': '软件',
                    'Game': '游戏',
                    'iOS': 'iOS',
                    'Android': '安卓',
                    'System': '系统',
                    'Intelligence': '智能',
                    'Science': '科学'
                }
            }
        },
        created(){
            this.path=this.pathMap[this.$route.path.substring(1)];
        },
        
    }
</script>