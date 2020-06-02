<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="menu_box">
        <a class="navbar-brand"
           href="#"><img src="~@images/猫.png" /></a>
        <div class="navbar-toggler"
             data-toggle="collapse"
             data-target="#navbarNavAltMarkup"
             aria-controls="navbarNavAltMarkup"
             aria-expanded="false"
             aria-label="Toggle navigation">
          <img src="~@images/head_portrait.jpg" />
        </div>
        <div class="collapse navbar-collapse"
             id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link"
               v-for="item in menuList"
               :key="item.title">
              <i class="iconfont"
                 :class="item.icon"
                 v-if="item.icon"></i>
              <span> {{item.title}} </span>
            </a>
          </div>
        </div>
        <div class="dropdown">
          <div class="navbar_toggler "
               id="dropdownMenuButton"
               data-toggle="dropdown">
            <img src="~@images/head_portrait.jpg" />
          </div>
          <div class="dropdown-menu"
               aria-labelledby="dropdownMenuButton">

            <a class="dropdown-item"
               href="#"
               @click="routeLink('/login')">登录</a>
            <a class="dropdown-item"
               @click="logOut"
               href="#">注销</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import api_login from '@api/login'
export default {
  data () {
    return {
      menuList: [
        {
          title: "首页",
        },
        {
          title: "音乐",
          icon: "icon-erji",
        },
      ],
    };
  },
  mounted () {

  },
  methods: {
    routeLink (src) {
      this.router.push(src);
    },
    // 注销
    logOut () {
      api_login.logOut().then(res => {
        if (res.data.code == 200) {
          this.$message({
            message: '注销成功',
            type: 'success'
          });
        }
      })
    }
  }
};
</script>

<style scoped lang="less" >
.navbar {
  height: 60px;
  background: #fff;
  padding: 0;
  display: block;
}
.navbar .menu_box {
  margin: 0 auto;
  max-width: 750px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand img {
  width: 60px;
}
.navbar-brand {
  padding: 0;
}
.collapse {
  width: auto;
  justify-content: flex-end;
}
.nav-link {
  cursor: pointer;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    border: none;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (max-width: 992px) {
  .dropdown {
    display: none;
  }
  .navbar_toggler {
    display: none;
  }
}
@media (max-width: 800px) {
  .navbar {
    padding: 0 12px;
  }
}
.navbar-toggler {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  overflow: hidden;
  border: 2px solid #afafaf73;
  cursor: pointer;
  padding: 0;
}
.navbar_toggler {
  margin-left: 20px;
  .navbar-toggler();
}
.dropdown-item {
  color: #7a7a7a;
}
</style>

