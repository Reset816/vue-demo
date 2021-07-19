<template>
  <div class="content">
    <Base_info></Base_info>
    <FnInfo></FnInfo>
  </div>
</template>

<script>
import Base_info from "@/views/main/Details/Base_info";
import FnInfo from "@/views/FnInfo";

export default {
  name: "Content",
  components: {
    Base_info,
    FnInfo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  position: relative;
}
</style>