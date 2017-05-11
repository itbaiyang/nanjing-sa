<template>
  <div id="app">
    <transition name="fade"
    mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }

</script>

<style lang="scss">
  body {
    margin: 0px;
    padding: 0px;
    /*background: url(assets/bg1.jpg) center !important;
    background-size: cover;*/
    // background: #1F2D3D;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  body,ol,ul,li,p,div,h1,h2,h3,h4,h5,h6,form,input,textarea,select,span,table,tr,th,td,dl,dt,dd {
    margin:0;padding:0;
    font-family: OneNikeCurrency, 'TradeGothicW01-BoldCn20 675334', Helvetica, Arial, 'Heiti SC', 'ST Heiti', 华文黑体, 'Microsoft YaHei', 雅黑体, SimHei, 黑体, sans-serif;
    box-sizing: border-box;
  }
  ol, ul, li {
    list-style: none;
  }
  #app {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }

  .el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }

  .toolbar {
    background: #f2f2f2;
    padding: 10px;
    //border:1px solid #dfe6ec;
    margin: 10px 0px;
    .el-form-item {
      margin-bottom: 10px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>