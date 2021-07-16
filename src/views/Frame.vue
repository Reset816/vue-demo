<template>
  <div class="frame">
    <Header></Header>
<<<<<<< HEAD
    
=======
    <div class="main">
      <router-view />
    </div>
>>>>>>> b1b82fa2159dad12f2352119886e4ee0b7636c6d
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