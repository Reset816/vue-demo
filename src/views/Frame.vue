<template>
  <div class="frame">
    <Header></Header>
    <div class="main">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/views/Header";
import Footer from "@/views/Footer";

export default {
  name: "Frame",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.frame {
  .main {
    background: #f5f5f5;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
</style>