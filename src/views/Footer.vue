<template>
  <div class="footer">
    <p class="mar-t20">
      <span>本站由国家药品监督管理局主办</span
      ><span>版权所有：国家药品监督管理局</span>
    </p>
    <p class="mar-tb10">
      <span>网站标识码：bm0001</span><span>备案号：京ICP备12345678号</span>
    </p>
    <p>
      <span>地址：北京市西城区展览路北露园1号</span><span>邮编：100037</span
      ><span>电话：68331122</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 134px;
  background: #f2f2f2;
  border-top: 2px solid #2b5aaa;

  p {
    font-size: 16px;
    color: #333333;
    text-align: center;

    span {
      margin: 0 9px;
    }
  }

  p.mar-t20 {
    margin-top: 20px;
  }

  p.mar-tb10 {
    margin: 10px 0;
  }
}
</style>