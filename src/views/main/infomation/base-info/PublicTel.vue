<template>
  <!-- 标题 -->
  <div class="public-tel">
    <span class="big-size"
      >短缺药品行业<span class="small-size">报告</span></span
    >
  </div>
</template>
<script>
export default {
  name: "PublicTel",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.public-tel {
  height: 32px;
  border-bottom: 1px solid #d8d8d8;
  span {
    display: inline-block;
  }
  .big-size {
    font-size: 18px;
    color: #1a65b9;
    height: 100%;
    border-bottom: 1px solid #1a65b9;
  }
  .small-size {
    font-size: 13px;
    color: #333;
    vertical-align: 2px;
    margin-left: 4px;
  }
}
</style>