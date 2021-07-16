<template>
  <div class="logo-info">
    <div class="cont">
      <div class="logo">
        <i></i>
      </div>
      <div class="search-box">
        <i class="search-icon"></i><i class="line"></i><input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo-info",
};
</script>

<style lang="less" scoped>
.logo-info {
  height: 112px;

  .cont {
    width: 1200px;
    margin: 0 auto;

    .logo {
      float: left;
      margin-top: 31px;

      i {
        display: inline-block;
        width: 352px;
        height: 53px;
        background: url(../../assets/img/logo.png) no-repeat center;
      }
    }

    .search-box {
      float: right;
      width: 268px;
      height: 34px;
      background: #ffffff;
      border: 1px solid #d3d3d3;
      border-radius: 17px;
      margin-top: 43px;

      i {
        display: inline-block;
        vertical-align: middle;
      }

      .search-icon {
        width: 19px;
        height: 20px;
        background: url(../../assets/img/search-icon.png);
        margin: 8px 11px 0 13px;
      }

      .line {
        width: 1px;
        height: 18px;
        background: #d8d8d8;
        margin-right: 10px;
        margin-top: 8px;
      }

      input {
        display: inline-block;
        vertical-align: middle;
        height: 18px;
        border: none;
        outline: none;
        margin-top: 7px;
        width: 200px;
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>