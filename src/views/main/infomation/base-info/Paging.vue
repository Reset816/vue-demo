<template>
  <!-- 分页 -->
  <div class="paging">
    <ul>
      <li class="prev">上一页</li>
      <li>1</li>
      <li>2</li>
      <li class="active">6</li>
      <li class="no-border">...</li>
      <li>9</li>
      <li class="next">下一页</li>
      <li class="jump no-border">跳转到</li>
      <li class="no-border no-pad">
        <input class="text" type="text" name="" id="" />
      </li>
      <li class="no-border no-pad">
        <input type="button" class="btn" name="" id="" value="确定" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Paging",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
/* 分页  */
.paging {
  text-align: center;
  margin-top: 30px;
  li {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    vertical-align: middle;
    padding: 0 13px;
    font-size: 14px;
    color: #222;
    margin: 0 1px;
    .active {
      background: #2b5aaa;
      color: #fff;
      border-color: #2b5aaa;
    }
  }
  .no-border {
    border: none;
  }
  .no-pad {
    padding: 0;
  }
  .text {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #e7e7e7;
    border-radius: 2px;
    text-align: center;
  }
  .jump {
    color: #333;
  }
  .btn {
    width: 74px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>