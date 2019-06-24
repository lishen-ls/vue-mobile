<template>
  <div id="login" class="login-back animated fadeIn">
    <span class="fa fa-close close" @click="cancel"></span>
    <p class="login-title">鲜果</p>
    <div v-if="login" class="login-box">
      <div class="login-item">
        <span class="fa fa-user input-icon"></span>
        <input class="input" id="username" type="text" placeholder="请输入你的用户名">
      </div>
      <div class="login-item">
        <span class="fa fa-key input-icon"></span>
        <input class="input" id="password" type="password" placeholder="请输入你的密码">
      </div>
      <div class="login-item">
        <span class="sw-login" @click="login=false">没有账号？去注册 ></span>
      </div>
      <div class="login-item">
        <input type="button" class="login-button" value="立即登录" @click="login">
      </div>
    </div>
    <div v-else>
      <div class="login-item">
        <span class="fa fa-user input-icon"></span>
        <input class="input" id="username" type="text" placeholder="请输入你的用户名">
      </div>
      <div class="login-item">
        <span class="fa fa-key input-icon"></span>
        <input class="input" id="password" type="password" placeholder="请输入你的密码">
      </div>
      <div class="login-item">
        <span class="fa fa-key input-icon"></span>
        <input class="input" id="password" type="password" placeholder="重复输入你的密码">
      </div>
      <div class="login-item">
        <span class="sw-login" @click="login=true">已有帐号？去登录 ></span>
      </div>
      <div class="login-item">
        <input type="button" class="login-button" value="立即注册">
      </div>
    </div>
    <div class="slogan">新闻如鲜果，过时不堪嚼</div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      login: true,
      username: "",
      password: ""
    };
  },
  methods: {
    cancel() {
      let login = document.getElementById("login");
      login.classList.remove("fadeIn");
      login.addEventListener("animationend", () => {
        this.$emit("cancelLogin");
      });
      login.classList.add("fadeOut");
    },
    login() {}
  }
};
</script>
<style scoped>
.login-button {
  width: 20rem;
  height: 4rem;
  font-size: 1.5rem;
  border: 1px solid #dcdfe6;
  margin: 0 calc((100% - 20rem) / 2);
  font-family: "Microsoft YaHei";
  color: #606266;
}

.login-title {
  color: #409eff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.sw-login {
  color: #606266;
  font-size: 1.2rem;
  float: right;
  height: 3rem;
  line-height: 3rem;
}

.login-box {
  width: 24rem;
}

.login-item {
  margin: 1rem 0;
  overflow: hidden;
}

.input-icon {
  color: #c0c4cc;
  font-size: 2rem;
  position: absolute;
  line-height: 4rem;
  margin-left: 1rem;
}

.input {
  outline-style: none;
  border-width: 0 0 1px 0;
  height: 4rem;
  line-height: 3rem;
  font-size: 1.7rem;
  width: 100%;
  padding-left: 3.3rem;
  font-family: "Microsoft YaHei";
}

.input::placeholder {
  color: #c0c4cc;
  font-size: 1.5rem;
  font-family: "Microsoft YaHei";
}

.login-back {
  background-color: white;
  height: 150%;
  width: 100%;
  z-index: 202;
  position: fixed;
  animation-duration: 200ms;
  padding: 5rem calc((100% - 24rem) / 2);
}

.close {
  font-size: 2.6rem;
  color: #909399;
  position: fixed;
  right: 0;
  top: 0;
  margin-right: 2rem;
  margin-top: 2rem;
}
</style>