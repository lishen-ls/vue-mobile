<template>
    <header class="shadow">
        <div style="position:relative">
            <span class="web-title" @click="goHome">鲜果</span>
            <span class="fa fa-navicon switch" @click="$emit('owner')"></span>
        </div>
        <nav>
            <ul @click="classify">
                <li class="nav-item" id="MainCon">总览</li>
                <li class="nav-item" id="IT">IT</li>
                <li class="nav-item" id="Digital">数码</li>
                <li class="nav-item" id="Software">软件</li>
                <li class="nav-item" id="Game">游戏</li>
                <li class="nav-item" id="iOS">iOS</li>
                <li class="nav-item" id="Android">安卓</li>
                <li class="nav-item" id="System">系统</li>
                <li class="nav-item" id="Intelligence">智能</li>
                <li class="nav-item" id="Science">科学</li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'NavMenu',
        data() {
            return {
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
                newRoot: '',
                nav: ''
            }
        },
        mounted() {
            this.nav = document.getElementsByTagName('nav')[0];
            let reg = /NewsContent/;
            let tag;
            if (reg.test(this.$route.path)) tag = '#' + this.$route.params.tag;
            else tag = '#' + this.$route.path.substring(1);
            if (document.querySelector(tag))
                document.querySelector(tag).classList.add('active');
            let rootPx = window.getComputedStyle(document.documentElement)['fontSize'];
            for (let i = 0; i < rootPx.length; i++) {
                if (rootPx[i] == 'p') break;
                this.newRoot += rootPx[i];
            }
            window.addEventListener('scroll', this.watch);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.watch);
        },
        methods: {
            classify(e) {
                if (e.target.tagName != 'LI') return;
                let tag = this.pathMap[e.target.innerHTML];
                let li = document.getElementsByTagName('li');
                for (let i = 0; i < li.length; i++) {
                    li[i].classList.remove('active');
                }
                e.target.classList.add('active');
                if (tag != 'MainCon') this.$emit('select');
                this.$router.push('/' + tag);

            },
            watch() {
                if (window.pageYOffset >= 5 * this.newRoot) {
                    this.nav.classList.add('fixed', 'shadow');
                } else {
                    this.nav.classList.remove('fixed', 'shadow');
                }
            },
            goHome(){
                let li=document.getElementsByTagName('li');
                for (let i = 0; i < li.length; i++) {
                    li[i].classList.remove('active');
                }
                document.getElementById('MainCon').classList.add('active');
                this.$router.push('/MainCon');
            }
        }
    }
</script>

<style scoped>
    .switch {
        position: absolute;
        right: 0;
        font-size: 2.6rem;
        line-height: 5rem;
        height: 5rem;
        color: #909399;
        margin-right: 1rem;
    }

    .fixed {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 640px;
    }

    header {
        height: 8rem;
        width: 100%;
        max-width: 640px;
        background-color: #FFFFFF;
        overflow: visible;
    }

    .web-title {
        font-size: 2.6rem;
        line-height: 5rem;
        height: 5rem;
        letter-spacing: 0.3rem;
        color: #409eff;
        margin: 0 1.3rem;
    }

    nav {
        overflow-x: scroll;
        scrollbar-width: none;
        background-color: white;
        z-index: 100;
    }

    nav::-webkit-scrollbar {
        display: none;
    }

    .shadow {
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.03);
    }

    ul {
        list-style: none;
        overflow: hidden;
        width: 50rem;
        padding: 0;
        margin: 0 1rem 0 1rem;
    }

    .nav-item {
        width: 5rem;
        height: 3rem;
        padding: 0.6rem;
        line-height: 1.9rem;
        font-size: 1.6rem;
        color: #606266;
        float: left;
        text-align: center;
    }

    .active {
        color: #409eff;
    }

    .active::after {
        content: '';
        height: 0.3rem;
        background-color: #409eff;
        width: 1rem;
        bottom: 0;
        display: block;
        margin: 0 auto;
        margin-top: 0.3rem;
    }
</style>