<template>
  <div>
    <NavMenu @select="restart" @owner="show" v-show="menuShow"></NavMenu>
    <router-view v-if="start"></router-view>
    <totop v-show="totop"></totop>
    <owner v-if="swOwner" @off="swOwner=false"></owner>
  </div>
</template>
<script>
  import Owner from '@/components/Owner'
  import NavMenu from '@/components/NavMenu'
  import ToTop from '@/components/ToTop'
  export default {
    name: 'App',
    components: {
      'NavMenu': NavMenu,
      'totop': ToTop,
      'owner': Owner
    },
    data() {
      return {
        totop: false,
        start: true,
        swOwner: false,
        menuShow: true
      }
    },
    mounted() {
      // window.alert('移动端页面暂时未全部完成，仅实现了一部分功能，可通过浏览器切换至桌面版访问桌面版网站');
      window.addEventListener('scroll', this.watch);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.watch);
    },
    methods: {
      watch() {
        if (window.pageYOffset >= 300)
          this.totop = true;
        else {
          this.totop = false;
        }
      },
      restart() {
        this.start = false;
        this.$nextTick(() => {
          this.start = true;
        });
      },
      show() {
        this.swOwner = true;
        document.body.setAttribute('style', 'overflow:hidden');
      }
    }
  }
</script>

<style>
  html {
    font-size: 2.7vw;
    background-color: #ebeef5;
  }

  @media screen and (min-width:640px) {
    html {
      font-size: 62.5%;
      padding: 0 calc((100% - 640px)/2)
    }
  }

  body {
    background-color: white !important;
    position: absolute;
    overflow-y: scroll;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }
</style>