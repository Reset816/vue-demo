<template>
  <div class="header">
    <Headpiece></Headpiece>
    <Logoinfo></Logoinfo>
    <Nav></Nav>
  </div>
</template>
<script>
import Headpiece from "@/views/header/Headpiece";
import Logoinfo from "@/views/header/Logoinfo";
import Nav from "@/views/header/Nav";

export default {
  components: { Headpiece, Logoinfo, Nav },
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
</style>