<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <router-link><el-button>默认按钮</el-button></router-link>
      <router-link to="user"
        ><el-button type="primary">主要按钮</el-button></router-link
      >

      <el-button type="success">成功按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
