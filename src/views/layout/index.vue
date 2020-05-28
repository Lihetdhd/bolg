<template>
  <div id="layouy">
    <header>
      <Menu></Menu>
    </header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu_navigation";
export default {
  components: {
    Menu,
  },
  data () {
    return {};
  },
};
</script>
<style scoped>
header {
  box-shadow: 1px 1px 25px 0 #f0f0f0;
}
#layouy {
  height: 100vh;
}
.content {
  height: calc(100vh - 60px);
  overflow: auto;
}
</style>
