<template>
  <div class="data-info">
    <div class="box clear">
      <div class="left-txt"><i class="icon1"></i><span>信息审批</span></div>
      <div class="right-num"><em>8406</em><span>条</span></div>
    </div>
    <div class="box clear">
      <div class="left-txt"><i class="icon2"></i><span>报告审批</span></div>
      <div class="right-num"><em>6</em><span>条</span></div>
    </div>
    <div class="box clear">
      <div class="left-txt"><i class="icon3"></i><span>谏言处置</span></div>
      <div class="right-num"><em>6</em><span>条</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Data-info",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.data-info {
  margin-left: 14px;
  height: 134px;
  background: #e9f5ff;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-top: 14px;
  padding-top: 6px;

  .box {
    padding: 0 18px 0 14px;
    margin: 13px 0;

    .left-txt {
      float: left;

      i {
        display: inline-block;
        width: 22px;
        height: 22px;
        vertical-align: middle;
      }

      .icon1 {
        background: url(../../assets/img/data-icon1.png);
      }

      .icon2 {
        background: url(../../assets/img/data-icon2.png);
      }

      .icon3 {
        background: url(../../assets/img/data-icon3.png);
      }

      span {
        font-size: 14px;
        color: #333333;
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
        margin-left: 8px;
      }
    }
    .right-num {
      float: right;

      em {
        display: inline-block;
        vertical-align: top;
        height: 26px;
        line-height: 26px;
        font-size: 26px;
        color: #2b5aaa;
      }

      span {
        font-size: 14px;
        color: #666666;
        margin-left: 3px;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}
</style>