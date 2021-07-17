<template>
  <div class="enter-box">
    <ul>
      <li class="country"></li>
      <li class="provincial"></li>
      <li class="industry"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Enter-box",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.enter-box {
  padding-left: 14px;
  padding-bottom: 14px;
  margin-top: 14px;
  li {
    height: 75px;
    cursor: pointer;
  }
  .country {
    background: url(../../assets/img/country-list-img.png) no-repeat;
  }
  .provincial {
    margin: 11px 0;
    background: url(../../assets/img/provincial-list-img.png) no-repeat;
  }
  .industry {
    background: url(../../assets/img/industry-report-img.png) no-repeat;
  }
}
</style>