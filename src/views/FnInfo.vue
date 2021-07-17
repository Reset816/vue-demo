<template>
  <div class="fn-info">
    <EnterPiece></EnterPiece>
    <DataInfo></DataInfo>
    <EnterBox></EnterBox>
  </div>
</template>
<script>
import EnterPiece from "@/views/fninfo/EnterPiece";
import DataInfo from "@/views/fninfo/DataInfo";
import EnterBox from "@/views/fninfo/EnterBox";

export default {
  components: { EnterPiece, DataInfo, EnterBox },
  name: "Fn-info",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.fn-info {
  width: 244px;
  float: right;
  background: #ffffff;
  padding-right: 14px;
}
</style>