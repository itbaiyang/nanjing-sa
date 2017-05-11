<template>
  <section>
    <el-row>
      <el-col :span="16">
        <div class="today-data box-shadow-2">
          <h3>今日数据</h3>
          <ul>
            <li style="background: #1abb9c">
              <el-col :span="16">
                <div class="today-data-text">
                  <div>检测数量</div>
                  <div>123</div>
                </div>
              </el-col>
              <el-col :span="8"><div class="home-icon home-icon-2"></div></el-col>
            </li>
            <li style="background: #00b0f0">
              <el-col :span="16">
                <div class="today-data-text">
                  <div>检测数量</div>
                  <div>123</div>
                </div>
              </el-col>
              <el-col :span="8"><div class="home-icon home-icon-3"></div></el-col>
            </li>
            <li style="background: #82abba">
              <el-col :span="16">
                <div class="today-data-text">
                  <div>检测数量</div>
                  <div>123</div>
                </div>
              </el-col>
              <el-col :span="8"><div class="home-icon home-icon-4"></div></el-col>
            </li>
            <li style="background: #ff4f4f">
              <el-col :span="16">
                <div class="today-data-text">
                  <div>检测数量</div>
                  <div>123</div>
                </div>
              </el-col>
              <el-col :span="8"><div class="home-icon home-icon-4"></div></el-col>
            </li>
          </ul>
        </div>
        <div class="month-rank box-shadow-2">
          <h3>月检测执行排行榜</h3>
          <div>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="task box-shadow-2">
          <h3 v-on:click="animateTotal(80)">年度任务统计</h3>
          <div>
            <div class="canvas-container">
              <canvas width="200" id="canvas1" height="200"></canvas>
            </div>
            <div class="row num">
              <div class="col-md-6">年度任务量：1</div>
              <div class="col-md-6">已完成总量：2</div>
              <div class="col-md-6">未完成总量：3</div>
              <div class="col-md-6">任务完成率：4<span ng-show="maxProcess">%</span></div>
            </div>
          </div>
        </div>
        <div class="messages box-shadow-2">
          <h3>食安资讯</h3>
          <ul>
            <li>123</li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <div class="box-shadow-2" style="position: relative; height:300px; margin-right:10px;">
          <h3 class="firTitle">本月食品安全变化趋势</h3>
          <div class="canvasWrap" style="padding: 20px 30px 5px;">
          <canvas id="lineChart" width="418" height="100"></canvas>
            <img style="margin-top:-70px;">
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="box-shadow-2" style="height:300px;margin-left:10px;">
          <h3>食安学习</h3>
          <ul>
            <li>123</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import waveLoading from '../assets/js/waveLoading.min.js'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      waveLoading() {
        console.log('submit!');
      },
      animateTotal(percent) {
        var canvas = document.getElementById('canvas1');
        var progress = 0;
        var maxProcess = percent;
        var step = 0.2;
        var stoped = false;
        waveLoading.init({
          speed:1,
          showText: true,
          callback: function() {
          }
        });
        waveLoading.draw();
        (function loading() {
          waveLoading.setProgress(progress);
          progress += step;
          if (progress <= maxProcess) {
            requestAnimationFrame(loading);
          } else if (progress = maxProcess + 0.1) {
            waveLoading.setProgress(maxProcess)
          } else {
            progress = 0;
          }
        })();
      }
    },
    mounted() {
    }
  }

</script>

<style scoped>
  .today-data {
    height: 130px;
    margin-right: 10px;
  }
  .today-data h3, .month-rank h3, .task h3, .messages h3 {
    padding-left: 15px;
    line-height: 40px;
    font-size: 14px;
    border-bottom: 1px solid #e4e4e4;
    font-weight: 400;
    margin: 0;
  }
  .today-data ul{
    margin: 0px 15px;
    padding: 15px 0;
  }
  .today-data li{
    width: 21%;
    height: 60px;
    margin-left: 2%;
    margin-right: 2%;
    padding: 8px 0;
    float: left;
    border-radius: 6px;
  }
  .box-shadow-2 {
    box-shadow: 0 1px 1px 1px rgba(224,224,224, .8);
    border: 1px solid #e0e0e0;
    margin-top: 10px;
    border-radius: 2px;
  }
  .today-data-text {
    border-right: 1px solid #fff;
    height: 44px;
    color: #fff;
    text-align: right;
    padding-right: 10px;
  }
  .today-data-text div {
    height: 22px;
    line-height: 22px;
  }
  .home-icon {
    height: 44px;
  }
  .home-icon-1 {
    background: url('../assets/home/dask-port.png')no-repeat center;
  }
  .home-icon-2 {
    background: url('../assets/home/testNum.png')no-repeat center;
  }
  .home-icon-3 {
    background: url('../assets/home/hege.png')no-repeat center;
  }
  .home-icon-4 {
    background: url('../assets/home/message1.png')no-repeat center;
  }


  .month-rank {
    margin-right: 10px;
    height: 520px;
  }
  .task {
    margin-left: 10px;
    height: 350px;
  }
  .messages {
    margin-left: 10px;
    height: 300px;
  }
</style>