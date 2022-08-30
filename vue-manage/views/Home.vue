<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header> <CommonHeade></CommonHeade></el-header>
      <CommonTag></CommonTag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeade from '../src/components/CommonHeade.vue'
import CommonTag from '../src/components/CommonTag.vue'

export default {
  name: 'Home',
  components: {
    CommonAside,
    CommonHeade,
    CommonTag,
  },
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
  margin: 0;
  padding: 0;
}
</style>
>
