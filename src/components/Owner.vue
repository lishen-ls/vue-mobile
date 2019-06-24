<template>
    <div id="owner" class="back animated fadeIn" @click="off">
        <div id="user" class="owner-list animated slideInRight">
            <div v-if="loginState" class="user-header">
                <img class="user-avatar" src="/user/default.jpeg">
                <span class="user-name">黑暗过会是晨曦</span>
            </div>
            <div class="user-header" v-else @click="login=true">
                <img class="user-avatar" src="/user/default.jpeg">
                <span class="user-name">登陆/注册</span>
            </div>
            <div class="user-item">
                <span class="fa fa-comment item-icon"></span>
                <span class="item-title" @click="myComment">我的评论</span>
            </div>
            <div class="user-item">
                <span class="fa fa-cog item-icon"></span>
                <span class="item-title">账户设置</span>
            </div>
            <div class="user-item" v-if="loginState">
                <span class="fa fa-sign-out item-icon"></span>
                <span class="item-title">退出登陆</span>
            </div>
            <div class="slogan">新闻如鲜果，过时不堪嚼</div>
        </div>
        <login v-if="login" @cancelLogin="login=false"></login>
    </div>
</template>
<script>
    import Login from '@/components/Login'
    export default {
        name: 'Owner',
        components: {
            'login': Login
        },
        data() {
            return {
                login: false,
                loginState: false
            }
        },
        methods: {
            off(e) {
                let owner = document.getElementById('owner');
                let user = document.getElementById('user');
                if (e.target == owner) {
                    owner.classList.remove('fadeIn');
                    user.classList.remove('slideInRight');
                    user.classList.add('slideOutRight');
                    owner.addEventListener('animationend', () => {
                        document.body.removeAttribute('style');
                        this.$emit('off');
                    });
                    owner.classList.add('fadeOut');
                }
            },
            myComment() {
                this.$router.push('/MyComment');
                let e = {
                    target: document.getElementById('owner')
                }
                this.off(e);
            }
        }
    }
</script>
<style>
    .slogan {
        font-size: 1rem;
        color: #c0c4cc;
        position: absolute;
        top: 50rem;
        left: 50%;
        margin-left: -5.5rem;
    }
</style>
<style scoped>
    .item-icon {
        color: #909399;
        width: 2rem;
        height: 6rem;
        font-size: 2rem;
        line-height: 6rem;
        margin: 0 1rem;
        vertical-align: top;
    }

    .item-title {
        display: inline-block;
        color: #909399;
        font-size: 1.5rem;
        line-height: 6rem;
        height: 6rem;
        width: calc(100% - 4.5rem);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        vertical-align: top;
    }

    .user-header {
        overflow: hidden;
        margin-bottom: 1rem;
        margin-top: 1rem;
        margin-left: 0.5rem;
    }

    .user-avatar {
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        height: 7rem;
        float: left;
    }

    .user-name {
        float: left;
        font-size: 1.5rem;
        color: #303133;
        font-weight: 600;
        height: 7rem;
        line-height: 7rem;
        margin-left: 1.5rem;
    }

    .back {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 201;
        height: 150%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        animation-duration: 300ms;
    }

    .owner-list {
        background-color: white;
        float: right;
        width: 80%;
        height: 100%;
        animation-duration: 300ms;
        box-shadow: -3px 0 5px rgba(0, 0, 0, 0.4);
        padding: 1.5rem;
    }
</style>