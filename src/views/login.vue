<template>
  <div class="login">
    <div class="keep-auto">
      <star></star>
    </div>
    <div class="bg">
      <transition name="forms">
        <div class="login-box"
             v-show="formShow">
          <div class="title">
            <label>登录</label>
          </div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">手机号</label>
              <i class="iconfont icon-yonghu"></i>
              <input class="form-control"
                     type="text"
                     id="phone"
                     v-model="phone"
                     onkeyup="value=value.replace(/[^\d]/g,'')"
                     maxlength="11" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">密码</label>
              <i class="iconfont icon-mima"></i>
              <input type="password"
                     class="form-control"
                     id="password"
                     v-model="password" />
            </div>
            <div class="form-group">
              <button type="button"
                      class="btn btn-primary"
                      @click="login">登录</button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import star from "@components/star";
import login from "@api/login";
export default {
  components: {
    star,
  },
  data () {
    return {
      phone: "",
      password: "",
      formShow: false,
    };
  },
  mounted () {
    this.formShow = true;
  },
  methods: {
    login () {
      let params = { phone: this.phone, password: this.password };
      login
        .getToken(params)
        .then((res) => {
          if (res.data.code == 200) {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.login-foxed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bg {
  .login-foxed();
  z-index: 10;
}
.login {
  .login-foxed();
  background: url("~@images/login.jpg") no-repeat;
  background-size: 100% 100%;
}
@color: #fff;
.login-box {
  z-index: 10;
  color: @color;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  border-radius: 5px;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 90%;
  max-height: 345px;
  max-width: 345px;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
  padding: 0 40px;
}
.go {
  height: 45px;
  background: #1f4474;
  text-align: center;
  margin-top: 8px;
  width: 100%;
  border: none;
  color: @color;
  position: relative;
}
.title {
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
}
form {
  margin-top: 15px;
}
.form-group input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ccc;
  background: rgba(0, 0, 0, 0);
  outline: none;
  color: @color;
  box-shadow: none;
  border-radius: 0;

  text-align: center;
}
input:-internal-autofill-selected {
  -webkit-text-fill-color: #fff;
  transition: background-color 5000s ease-out 0.5s;
}
.forms-enter-active,
.forms-leave-active {
  transition: all 1s ease;
}

.forms-enter,
.forms-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.keep-auto {
  width: 100%;
  height: 50%;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.go:hover {
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
}
.form-group {
  position: relative;
}
.form-group i {
  position: absolute;
  margin: auto;
  bottom: 0;
  left: 0;
  font-size: 18px;
}
.btn-primary {
  margin-top: 12px;
  width: 100%;
}
</style>
