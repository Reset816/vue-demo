<template>
  <div id="app">
    <router-view />
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import Loading from "@/components/loading/Loading";

export default {
  name: "App",
  components: {
    Loading,
  },
  data() {
    return {};
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100%;
}
</style>