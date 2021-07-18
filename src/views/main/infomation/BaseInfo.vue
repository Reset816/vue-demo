<template>
  <div class="base-info">
    <!-- 标题 -->
    <Public-tel></Public-tel>
    <!-- 基础内容 -->
    <Base-content></Base-content>
    <!-- 分页 -->
    <Paging></Paging>
  </div>
</template>

<script>
import PublicTel from "@/views/main/infomation/base-info/PublicTel";
import BaseContent from "@/views/main/infomation/base-info/BaseContent";
import Paging from "@/views/main/infomation/base-info/Paging";

export default {
  name: "BaseInfo",
  components: {
    PublicTel,
    BaseContent,
    Paging,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.base-info {
  width: 933px;
  height: 841px;
  display: inline-block;
  vertical-align: top;
  padding: 17px 24px 21px;
  box-sizing: border-box;
  background: #ffffff;
}
</style>