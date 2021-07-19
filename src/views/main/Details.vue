<template>
  <div class="details">
    <Crumbs></Crumbs>
    <Content></Content>
  </div>
</template>

<script>
import Crumbs from "@/views/main/Details/Crumbs";
import Content from "@/views/main/Details/Content";

export default {
  components: {
    Crumbs,
    Content,
  },
  name: "Details",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.details {
  width: 1200px;
  /* background-color: #f00; */
  margin: 0 auto;
}
</style>