<template>
  <div class="headpiece">
    <div class="cont">
      <div class="welcome">欢迎进入短缺药品综合服务平台</div>
      <div class="personal">
        <img src="../../assets/img/personal-icon.png" alt=""><span>张三</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headpiece"
}
</script>

<style lang="less" scoped>
.headpiece {
  width: 100%;
  height: 34px;
  line-height: 34px;
  background-color: #f3f3f3;

  .cont {
    width: 1200px;
    margin: 0 auto;
  }

  .welcome {
    font-size: 12px;
    color: #000;
    float: left;
  }

  .personal {
    float: right;

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }
  }

}
</style>