<template>
  <div class="menu">
    <div class="menu_box">
      <img src="~@images/猫.png" />
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" v-for="menu in menuList" :key="menu">
          <span slot="title">{{ menu.title }}</span>
          <i class="iconfont" v-if="menu.icon" :class="menu.icon"></i>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="menu_right">
      <el-dropdown trigger="click">
        <div class="head_portrait el-dropdown-link">
          <img src="~@images/head_portrait.jpg" />
          <i></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>登录</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
  mounted() {},
};
</script>
<style scoped>
.menu {
  display: flex;
}
.menu_box {
  width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.menu_box img {
  width: 60px;
}
.menu_right {
  display: flex;
  align-items: center;
  margin-right: 80px;
}
.head_portrait {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  overflow: hidden;
  border: 2px solid #afafaf73;
  cursor: pointer;
}
</style>
<style>
.menu .el-menu {
  border: none;
}
</style>
