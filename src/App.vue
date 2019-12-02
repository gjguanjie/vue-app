<template>
  <div id="app">
    <div class="input">
      <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
    </div>
    <el-button type="primary" size="mini" @click="btnClick" prefix-icon="user">{{$t('confirm')}}</el-button>
    <span>111<svg-icon icon-class="user"/>0000</span>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'APP',
  methods: {
    btnClick: function () {
      this.$alert('提示')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /deep/ .el-button--primary {
    width: 1.5rem;
    height: 0.5rem;
    background-color: red;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#nprogress .bar {
  background: blue !important; //自定义颜色
}
.input {
  width: 10rem;
  height: 1rem;
}
</style>
