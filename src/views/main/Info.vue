<template>
  <div class="info">
    <Crumbs></Crumbs>
    <div class="content">
      <BaseInfo></BaseInfo>
      <FnInfo></FnInfo>
    </div>
  </div>
</template>

<script>
import Crumbs from "@/views/main/infomation/Crumbs";
import BaseInfo from "@/views/main/infomation/BaseInfo";
import FnInfo from "@/views/FnInfo";

export default {
  name: "Infomation",
  components: {
    Crumbs,
    BaseInfo,
    FnInfo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.info {
  width: 1200px;
  margin: 0 auto;
  /* 内容 */
  .content {
    margin-top: 20px;
    position: relative;
  }
}
</style>