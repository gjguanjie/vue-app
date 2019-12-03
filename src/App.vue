<template>
  <div id="app" ref="app">
    <div class="input-group">
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
      <div class="input">
        <el-input type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="user"></el-input>
      </div>
    </div>
    <el-button type="primary" @click="btnClick" prefix-icon="user">{{$t('confirm')}}</el-button>
    <el-button type="primary" @click="btnClick" prefix-icon="user">{{$t('confirm')}}</el-button>
    <svg-icon icon-class="user"/>
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
  },
  mounted () {
    const height = window.getComputedStyle(this.$refs.app).height
    console.log(height)
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
  .input {
    /deep/ .el-button--primary {
      /*width: 1.5rem;*/
      /*height: 0.5rem;*/
      background-color: red;
  }
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
.input-group {
  display: flex;
  flex-direction: row;
}
.input {
  width: 4rem;
}
</style>
