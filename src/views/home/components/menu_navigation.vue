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
};
</script>
<style scoped>
.menu_box {
  width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.menu_box img {
  width: 60px;
}
</style>
<style>
.menu .el-menu {
  border: none;
}
</style>
