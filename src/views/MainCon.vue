<template>
    <div>
        <slider></slider>
        <newscard></newscard>
    </div>
</template>
<script>
    import Slider from '@/components/Slider'
    import NewsCard from '@/components/NewsCard'
    export default {
        name: 'MainCon',
        components: {
            'slider': Slider,
            'newscard':NewsCard
        }
    }
</script>