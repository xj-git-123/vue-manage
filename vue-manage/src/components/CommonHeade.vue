<template>
  <header>
    <div class="l-content">
      <el-button
        @click="handleMenu"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeade',
  data() {
    return {
      userImg: require('../assets/images/user.png'),
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
}
</script>

<style lang="less" scope>
header {
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  color: white;
  margin-top: 20px;
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  float: right;
  display: flex;
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: -80px;
  }
}
</style>
