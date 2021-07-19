<template>
  <div class="enter-piece">
    <div class="enter-left"><i></i><span>工作台</span></div>
    <div class="enter-right"><span>进入</span><i></i></div>
  </div>
</template>
<script>
export default {
  name: "EnterPiece",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.enter-piece {
  width: 100%;
  height: 37px;
  background: url(../../assets/img/workbench-bg.png) no-repeat;
  color: #fff;

  .enter-left {
    float: left;
    margin: 7px 0 0 14px;
    i {
      display: inline-block;
      vertical-align: middle;
      width: 18px;
      height: 18px;
      background: url(../../assets/img/workbench-icon.png) no-repeat;
      /* margin-right: 10px; */
    }

    span {
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      vertical-align: middle;
      margin-left: 10px;
    }
  }
  .enter-right {
    float: right;
    margin: 8px 19px 0 0;

    span {
      font-size: 12px;
      display: inline-block;
      vertical-align: middle;
    }
    i {
      display: inline-block;
      vertical-align: middle;
      width: 10px;
      height: 10px;
      background: url(../../assets/img/arrow-icon.png);
      margin-left: 7px;
    }
  }
}
</style>