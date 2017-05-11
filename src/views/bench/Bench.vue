<template>
  <div type="flex" class="bench" style="background: #ffffff">
    <el-row>
      <el-col :span="4">
        <router-link to="/market">
          <img src="../../assets/bench/b-1.png"/>
          <p>市场主体档案</p>
        </router-link>
      </el-col>
      <el-col :span="4">
        <router-link to="/stall">
          <img src="../../assets/bench/b-2.png"/>
          <p>经营户档案</p>
        </router-link>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-3.png"/>
          <p>采样信息录入</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-4.png"/>
          <p>检测信息录入</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-5.png"/>
          <p>大屏信息发布</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-6.png"/>
          <p>今日任务</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-7.png"/>
          <p>采样管理</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-8.png"/>
          <p>任务分配</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-9.png"/>
          <p>信息发布</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-10.png"/>
          <p>档案建档</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-11.png"/>
          <p>云课堂</p>
        </a>
      </el-col>
      <el-col :span="4">
        <a>
          <img src="../../assets/bench/b-12.png"/>
          <p>大屏管理</p>
        </a>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .el-row {
    margin-top: 40px;
    justify: center;

  }
  .el-col {
    text-align: center;
    margin-bottom: 40px;
    cursor: pointer;

  }
</style>