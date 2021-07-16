<template>
  <div class="nav">
    <ul class="cont">
      <li
        class="nav-txt"
        :class="{ active: activeId == nav.id }"
        v-for="nav in navList"
        :key="nav.id"
        @click="handleClick(nav)"
      >
        {{ nav.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeId: "",
      navList: [
        {
          id: "nav0",
          title: "首页",
        },
        {
          id: "nav1",
          title: "工作动态",

        },
        {
          id: "nav2",
          title: "行业报告信息",
          path: "/frame/info",
        },
        {
          id: "nav3",
          title: "药品短缺清单",





        },
        {
          id: "nav4",
          title: "药企停产信息",
        },
        {
          id: "nav5",
          title: "药品综合查询",
          path: "/frame/search",
        },
      ],
    };
  },
  methods: {
    handleClick(nav) {
      this.activeId = nav.id;
      if (nav.path) {
        this.$router.push({
          path: nav.path,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 58px;
  line-height: 58px;
  background: #2b5aaa;

  .cont {
    width: 1200px;
    margin: 0 auto;
  }

  li {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    margin: 0 26px;
    padding: 0 25px;
    cursor: pointer;
  }

  li.active,
  li:hover {
    background: #0c4c94;
  }
}
</style>
