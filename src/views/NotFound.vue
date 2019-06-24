<template>
    <div>
        <div class="status-code">404</div>
        <div class="status">Page Not Found</div>
        <p class="jump">{{time}}秒后自动跳转到首页</p>
    </div>
</template>
<script>
    export default {
        name: 'NotFound',
        data() {
            return {
                time: 5
            }
        },
        created() {
            let timer = setInterval(() => {
                if (this.time == 0) {
                    clearInterval(timer);
                    this.$router.push('/MainCon');
                } else {
                    this.time--;
                }

            }, 1000);
        }
    }
</script>
<style scoped>
    .status-code {
        margin-top: 3rem;
        font-size: 10rem;
        color: #909399;
        text-align: center;
    }

    .status {
        font-size: 3rem;
        color: #909399;
        text-align: center;
    }

    .jump {
        margin-top: 10rem;
        font-size: 1rem;
        text-align: center;
        color: #909399;
    }
</style>