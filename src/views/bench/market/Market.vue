<template>
  <section>
    <el-row class="container">
      <el-col :span="16">
        <div>
          <h3>市场信息</h3>
          <div>
            市场名称：{{marketInfo.name}}
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import { marketInfo } from '../../../api/api';

  export default {
    data() {
      return {
        marketId: '101010001',
        marketInfo: {}
      }
    },
    methods: {
      getMarketInfo: function (id) {
        marketInfo(id).then((res) => {
          this.marketInfo = res.data.result
        });
      }
    },
    mounted() {
      this.getMarketInfo(this.marketId);
    }
  }

</script>

<style></style>