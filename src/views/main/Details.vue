<template>
  <div class="cont">
    <!-- 面包屑区域 -->
    <div class="crumbs">
      <span>当前位置：</span>
      <a href="">首页</a>
      <span> > </span>
      <span>行业报告信息</span>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 基础信息区域 -->
      <div class="base-info">
        <!-- 基础内容 -->
        <h1>
          樱花如雪春正好，不负春光不负卿 ——记国务院“互联网+督查”平台审看历史数据迁移工作圆满成功
        </h1>
        <div class="border">
          <div class="border-left">
            杨晓娟于&emsp;2020-04-07&emsp;&emsp;15:13:37发布
          </div>
          <div class="border-right">
            <i class="i1"></i><span>浏览量：</span><em>231</em>
            <i class="i2"></i><span>收藏量：</span><em>231</em>
          </div>
        </div>
        <div class="text">
          <span
            >&emsp;&emsp;这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分
            这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分，这里是内容部分
            这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分。这里是内容部分这里是内容部分这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分
            这里是，内容部分这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分
            这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，
            这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分这里是，内容部分这里是内容部分这里是内容部分这里是内容部分，
            这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分
            这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。</span
          >
        </div>
        <div class="text">
          <span
            >&emsp;&emsp;这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分
            这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分，这里是内容部分
            这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分
            这里是内容部分这里是内容部分。这里是内容部分这里是内容部分这里是内容部分这里是内容部分。</span
          >
        </div>
      </div>
      <!-- 额外信息区域 -->
      <div class="fn-info">
        <!-- 工作台 -->
        <div class="enter-piece">
          <div class="enter-left"><i></i><span>工作台</span></div>
          <div class="enter-right"><span>进入</span><i></i></div>
        </div>
        <!-- 数据展示 -->
        <div class="data-info">
          <div class="box clear">
            <div class="left-txt">
              <i class="icon1"></i><span>信息审批</span>
            </div>
            <div class="right-num"><em>8406</em><span>条</span></div>
          </div>
          <div class="box clear">
            <div class="left-txt">
              <i class="icon2"></i><span>报告审批</span>
            </div>
            <div class="right-num"><em>6</em><span>条</span></div>
          </div>
          <div class="box clear">
            <div class="left-txt">
              <i class="icon3"></i><span>谏言处置</span>
            </div>
            <div class="right-num"><em>6</em><span>条</span></div>
          </div>
        </div>
        <!-- 其他功能入口 -->
        <div class="enter-box">
          <ul>
            <li class="country"></li>
            <li class="provincial"></li>
            <li class="industry"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Details",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
/* 面包屑区域 */
/* 头部 */
/* 顶部 */
.header .headpiece {
  width: 100%;
  height: 34px;
  /* 垂直居中 */
  line-height: 34px;
  background-color: #f3f3f3;
}
.header .cont {
  width: 1200px;
  /* background-color: #f00; */
  margin: 0 auto;
}
.header .cont .welcome {
  font-size: 12px;
  color: #000;
  float: left;
}
.header .headpiece .personal {
  /* float: right; */
  text-align: right;
}
.header .headpiece .personal img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
/* logo区域 */
.header .logo-info {
  height: 112px;
}
.header .logo-info .logo {
  float: left;
  margin-top: 32px;
}
.header .logo-info .logo i {
  display: inline-block;
  width: 352px;
  height: 53px;
  background: url(../../assets/img/logo.png) no-repeat center;
}
.header .logo-info .search-box {
  float: right;
  width: 268px;
  height: 34px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 17px;
  margin-top: 43px;
}
.header .logo-info .search-box i {
  display: inline-block;
  vertical-align: middle;
}
.header .logo-info .search-box .search-icon {
  width: 19px;
  height: 20px;
  background-image: url(../../assets/img/search-icon.png);
  margin: 8px 11px 0 13px;
}
.header .logo-info .search-box .line {
  width: 1px;
  height: 18px;
  background-color: #000;
  margin-right: 10px;
  margin-top: 8px;
}
.header .logo-info .search-box input {
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  border: none;
  outline: none;
  width: 200px;
  margin-top: 7px;
  font-size: 14px;
  color: #333;
}
/* 菜单 */
.header .nav {
  height: 58px;
  line-height: 58px;
  background-color: #2b5aaa;
}
.header .nav li {
  font-size: 18px;
  color: #ffffff;
  display: inline-block;
  margin: 0 26px;
  padding: 0 25px;
  cursor: pointer;
}
.header .nav li.active,
.header .nav li:hover {
  background: #0c4c94;
}

/* 主体区域 */
.main {
  background: #f5f5f5;
  padding-top: 20px;
  padding-bottom: 32px;
}
/* 面包屑区域 */
.main .cont {
  width: 1200px;
  margin: 0 auto;
}
.main .crumbs {
  height: 46px;
  line-height: 46px;
  background: #ffffff;
  padding-left: 22px;
}
.main .crumbs span {
  font-size: 15px;
  color: #333;
}
.main .crumbs a {
  display: inline-block;
  font-size: 15px;
  color: #2b5aaa;
}
/* 内容 */
.main .content {
  margin-top: 20px;
  position: relative;
}
/* 基础信息区域 */
.main .base-info {
  width: 933px;
  display: inline-block;
  vertical-align: top;
  padding: 17px 24px 21px;
  box-sizing: border-box;
  background: #ffffff;
}

/* 基础内容 */
.main .base-info h1 {
  font-size: 18px;
  color: #000000;
  margin-bottom: 8px;
  margin-top: 14px;
  font-weight: bolder;
}
.main .base-info .border {
  margin-top: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid #d8d8d8;
}
.main .base-info .border-left {
  display: inline-block;
  font-size: 12px;
  vertical-align: top;
  color: #999999;
}
.main .base-info .border-right {
  display: inline-block;
  font-size: 12px;
  vertical-align: top;
  color: #999999;
  margin-left: 76px;
}
.main .base-info .border-right .i1 {
  background: url(../../assets/img/look.png);
  display: inline-block;
  width: 17px;
  height: 11px;
  margin-right: 9px;
}
.main .base-info .border-right .i2 {
  margin-left: 34px;
  display: inline-block;
  width: 13px;
  height: 11px;
  background: url(../../assets/img/like.png);
  margin-right: 9px;
}
.main .base-info .text {
  color: #333333;
  text-align: justify;
  line-height: 30px;
  font-size: 14px;
}

/* 额外信息区域 */
.main .fn-info {
  width: 244px;
  display: inline-block;
  vertical-align: top;
  margin-left: 16px;
  padding-top: 10px;
  padding-right: 14px;
  box-sizing: border-box;
  background: #fff;
}
/* 工作台 */
.main .fn-info .enter-piece {
  width: 100%;
  height: 37px;
  background: url(../../assets/img/work.png);
  color: #fff;
}
.main .fn-info .enter-left {
  float: left;
  margin: 7px 0 0 14px;
}
.main .fn-info .enter-left i {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  background: url(../../assets/img/work-icon.png);
  /* margin-right: 10px; */
}
.main .fn-info .enter-left span {
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  margin-left: 10px;
}
.main .fn-info .enter-right {
  float: right;
  margin: 8px 19px 0 0;
}
.main .fn-info .enter-right span {
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
}
.main .fn-info .enter-right i {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  background: url(../../assets/img/work-arrow.png);
  margin-left: 7px;
}
/* 数据展示 */
.main .data-info {
  margin-left: 14px;
  height: 134px;
  background: #e9f5ff;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-top: 14px;
  padding-top: 6px;
}
.main .data-info .box {
  padding: 0 18px 0 14px;
  margin: 13px 0;
}
.main .data-info .left-txt {
  float: left;
}
.main .data-info .left-txt i {
  display: inline-block;
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
.main .data-info .left-txt .icon1 {
  background: url(../../assets/img/data-1.png);
}
.main .data-info .left-txt .icon2 {
  background: url(../../assets/img/data-2.png);
}
.main .data-info .left-txt .icon3 {
  background: url(../../assets/img/data-3.png);
}
.main .data-info .left-txt span {
  font-size: 14px;
  color: #333333;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
}
.main .data-info .right-num {
  float: right;
}
.main .data-info .right-num em {
  display: inline-block;
  vertical-align: top;
  height: 26px;
  line-height: 26px;
  font-size: 26px;
  color: #2b5aaa;
}
.main .data-info .right-num span {
  font-size: 14px;
  color: #666666;
  margin-left: 3px;
  display: inline-block;
  vertical-align: top;
}
/* 其他功能入口 */
.main .enter-box {
  padding-left: 14px;
  padding-bottom: 14px;
  margin-top: 14px;
}
.main .enter-box li {
  height: 75px;
  cursor: pointer;
}
.main .enter-box .country {
  background: url(../../assets/img/other-1.png);
}
.main .enter-box .provincial {
  margin: 11px 0;
  background: url(../../assets/img/other-2.png);
}
.main .enter-box .industry {
  background: url(../../assets/img/other-3.png);
}
/* 底部区域 */
.footer {
  width: 100%;
  height: 134px;
  background: #f2f2f2;
  border-top: 2px solid #2b5aaa;
}
.footer p {
  font-size: 16px;
  color: #333333;
  text-align: center;
}
.footer p.mar-t20 {
  margin-top: 20px;
}
.footer p.mar-tb10 {
  margin: 10px 0;
}
.footer p span {
  margin: 0 9px;
}
</style>


