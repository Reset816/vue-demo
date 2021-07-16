<template>
  <div class="nav">
    <ul class="cont">
      <li class="nav-txt">首页</li>
      <li class="nav-txt">工作动态</li>
      <li class="nav-txt">行业报告信息</li>
      <li class="nav-txt">药品短缺清单</li>
      <li class="nav-txt">药企停产信息</li>
      <li class="nav-txt">协同联络单位</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style lang="less" scoped>
.nav {
  height: 58px;
  line-height: 58px;
  background: #2B5AAA;

  .cont {
    width: 1200px;
    margin: 0 auto;
  }

  li {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    margin: 0 26px;
    padding: 0 25px;
    cursor: pointer;
  }

  li.active,
  li:hover {
    background: #0C4C94;
  }

}

</style>