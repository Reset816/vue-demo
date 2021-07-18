<template>
  <!-- 面包屑区域 -->
  <div class="crumbs">
    <span>当前位置：</span>
    <a href="">首页</a>
    <span> > </span>
    <span>行业报告信息</span>
  </div>
</template>

<script>
export default {
  name: "Crumbs",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.crumbs {
  height: 46px;
  line-height: 46px;
  background: #ffffff;
  padding-left: 22px;
  span {
    font-size: 15px;
    color: #333;
  }
  a {
    display: inline-block;
    font-size: 15px;
    color: #2b5aaa;
  }
}
</style>