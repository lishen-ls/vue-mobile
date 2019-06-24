<template>
    <div class="top-box" @click="top">
        <i class="fa fa-angle-up"></i>
    </div>
</template>
<script>
export default {
    name:'ToTop',
    methods:{
        top(){
            window.scroll(0,0);
        }
    }
}
</script>
<style scoped>
    .top-box{
        position: fixed;
        bottom: 5rem;
        right: 2rem;
        width: 4.5rem;
        height: 4.5rem;
        background-color: rgba(0,0,0,0.2);
        z-index: 100;
        text-align: center;
    }
    i{
        font-size: 4rem;
        color: #f2f6fc;
        line-height: 4rem;
    }
</style>
