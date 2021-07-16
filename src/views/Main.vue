<template>
  <div class="main">
    <div class="cont">
      <!-- 面包屑 -->
      <div class="crumbs">
        <span class="mar-l22">当前位置：</span>
        <a href="">首页</a>
        <span> > </span>
        <span>行业报告信息</span>
      </div>
      <!-- 内容 -->
      <div class="content clear fn-clear4">
        <!-- 基础信息 -->
        <div class="base-info">
          <!-- 标题 -->
          <div class="public-tel1">
            <span class="big-size"
              >樱花如雪春正好，不负春光不负卿 ——记国务院“互联网+督查”平台审看历史数据迁移工作圆满成功</span
            >
          </div>
          <div class="public-tel2">
            <span class="author">杨晓娟于</span>
            <span class="time">2020-04-07 15:13:37发布</span>
            <span class="browse"><i></i>浏览量：231</span>
            <span class="Collection"><i></i>收藏量：231</span>
          </div>
          <!-- form表单 -->
          <div class="form-info"></div>
          <!-- table表格 -->
          <div class="content1">
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp;
              这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。
            </p>
          </div>
          <div class="content2">
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp;
              这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分，这里是内容部分这里是内容部分这里是内容部分这里是内容部分。这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是，内容部分这里是内容部分这里是内容部分这里是内容部分.
            </p>
          </div>
          <!-- 分页 -->
        </div>
        <!-- 功能栏 -->
        <div class="fn-info">
          <!-- 进入工作台 -->
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
          <!-- 其他功能入口快 -->
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
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.main {
  background: #f5f5f5;
  padding-top: 20px;
  padding-bottom: 40px;
}

.main .cont {
  width: 1200px;
  margin: 0 auto;
}

.main .crumbs {
  height: 46px;
  line-height: 46px;
  background: #fff;
  /* padding-left: 22px; */
  span {
    font-size: 15px;
    color: #333;
  }

  .mar-l22 {
    margin-left: 22px;
  }

  a {
    display: inline-block;
    font-size: 15px;
    color: #2b5aaa;
  }
}

.main .content {
  margin-top: 20px;
  position: relative;
  /* height: 795px; */
}

/* 第一种左右布局方法 */

// .main .fn-clear1 .base-info {
//   width: 936px;
//   height: 795px;
//   background: #f00;
//   float: left;
// }

// .main .fn-clear1 .fn-info {
//   width: 244px;
//   height: 400px;
//   background: #f0f;
//   float: right;
// }

// /* 第二种左右布局方法 */

// .main .fn-clear2 .base-info {
//   width: 936px;
//   height: 795px;
//   background: #f00;
//   float: left;
// }

// .main .fn-clear2 .fn-info {
//   height: 400px;
//   background: #f0f;
//   margin-left: 956;
// }

// /* 第三种左右布局方法 */

// .main .fn-clear3 .base-info {
//   width: 936px;
//   height: 795px;
//   background: #f00;
//   position: absolute;
//   top: 0;
//   left: 0;
// }

// .main .fn-clear3 .fn-info {
//   width: 244px;
//   height: 400px;
//   background: #f0f;
//   position: absolute;
//   top: 0;
//   right: 0;
// }

/* 第四种左右布局方法 */

.main .fn-clear4 .base-info {
  width: 936px;
  /* height: 795px; */
  display: inline-block;
  vertical-align: top;
  padding: 17px 24px 21px;
  box-sizing: border-box;
  background: #fff;
}

.main .fn-clear4 .fn-info {
  width: 244px;
  /* height: 400px; */
  display: inline-block;
  vertical-align: top;
  margin-left: 16px;
  padding-top: 10px;
  padding-right: 14px;
  box-sizing: border-box;
  background: #fff;
}

.public-tel1 {
  height: 32px;
  /*border-bottom: 1px solid #D8D8D8;*/
  span {
    display: inline-block;
  }

  .big-size {
    font-style: PingFang SC;
    font-size: 18px;
    color: #000000;
    height: 100%;
    font-weight: 600;
    /*border-bottom: 1px solid #EEEEEE;*/
  }
}

.public-tel2 {
  margin-top: 20px;
  height: 32px;
  border-bottom: 1px solid #d8d8d8;
  .browse {
    margin-left: 50px;
    width: 119px;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0.23px;
    font-weight: 400;
    /*border-bottom: 1px solid #EEEEEE;*/
    i {
      margin-bottom: -3px;
      margin-right: 10px;
      display: inline-block;
      height: 13px;
      width: 17px;
      background: url(../images/browse.png);
      /*border-bottom: 1px solid #EEEEEE;*/
    }
  }

  .Collection {
    margin-left: 100px;
    width: 113px;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0.23px;
    font-weight: 400;
    /*border-bottom: 1px solid #EEEEEE;*/
    i {
      margin-bottom: -3px;
      margin-right: 10px;
      display: inline-block;
      height: 12px;
      width: 14px;
      background: url(../images/collection.png);
      /*border-bottom: 1px solid #EEEEEE;*/
    }
  }
}

/* .public-tel2 span {
    display: inline-block;
} */

.main .content1 {
  margin-top: 18px;
  width: 885px;
  height: 270px;
  font-family: PingFangSC-Regular;
  font-size: 135px;
  color: #333333;
  letter-spacing: 0;
  text-align: justify;
  line-height: 30px;
  p {
    font-family: PingFangSC-Regular;
    font-size: 13.5px;
    color: #333333;
    letter-spacing: 0;
    text-align: justify;
    line-height: 30px;
    font-weight: 400;
  }
}

.main .content2 {
  margin-top: 6px;
  width: 885px;
  height: 150px;
  font-family: PingFangSC-Regular;
  font-size: 135px;
  color: #333333;
  letter-spacing: 0;
  text-align: justify;
  line-height: 30px;
  p {
    font-family: PingFangSC-Regular;
    font-size: 13.5px;
    color: #333333;
    letter-spacing: 0;
    text-align: justify;
    line-height: 30px;
    font-weight: 400;
  }
}

/* .public-tel .small-size {
    font-size: 13px;
    color: #333;
    vertical-align: 2px;
    margin-left: 4px;
} */

.main .fn-clear4 .base-info form {
  position: relative;
}

.main .fn-clear4 .base-info label {
  display: block;
  font-size: 14px;
  color: #333333;
}

.main .fn-clear4 .base-info .mar-t28 {
  margin-top: 28px;
  margin-bottom: 38px;
}

.main .fn-clear4 .base-info .mar-l60 {
  margin-left: 60px;
}

.main .fn-clear4 .base-info span,
.main .fn-clear4 .base-info .form-info input {
  display: inline-block;
  vertical-align: middle;
}

.main .fn-clear4 .base-info .form-info input {
  margin-right: 8px;
  width: 15px;
  height: 15px;
}

.main .fn-clear4 .base-info select {
  width: 225px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  outline: none;
  padding: 0 10px;
}

.main .base-info .form-info .btn {
  position: absolute;
  right: 80px;
  bottom: 0px;
}

.main .base-info .form-info .btn input {
  width: 90px;
  height: 38px;
  background: #2b5aaa;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
}

.main .table-info {
  margin-top: 20px;
  table {
    width: 100%;
  }

  th {
    height: 50px;
    background: #eff4fa;
    font-size: 14px;
    color: #333333;
    text-align: center;
  }

  td {
    text-align: center;
    height: 42px;
    font-size: 14px;
  }

  tr:nth-child(2n) {
    background: #f8f8f8;
  }
}

.main .bg-f8 {
  /* background: #F8F8F8; */
}

.main .paging {
  text-align: center;
  margin-top: 30px;
  li {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    vertical-align: middle;
    padding: 0 13px;
    font-size: 14px;
    color: #222;
    margin: 0 1px;
  }

  li.active {
    background: #2b5aaa;
    color: #fff;
    border-color: #2b5aaa;
  }

  .no-border {
    border: none;
  }

  .no-pad {
    padding: 0;
  }

  .text {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #e7e7e7;
    border-radius: 2px;
    text-align: center;
  }

  .jump {
    color: #333;
  }

  .btn {
    width: 74px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    cursor: pointer;
  }
}

.main .fn-info .enter-piece {
  width: 100%;
  height: 37px;
  background: url(../images/workbench-bg.png);
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
  background: url(../images/workbench-icon.png);
  /* margin-right: 10px; */
}

.main .fn-info .enter-left span {
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
}

.main .fn-info .enter-right {
  float: right;
}

.main .fn-info .enter-right {
  margin: 11px 19px 0 0;
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
  background: url(../images/arrow-icon.png);
  margin-left: 7px;
}

.main .data-info {
  margin-left: 14px;
  height: 134px;
  background: #e9f5ff;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-top: 14px;
  padding-top: 6px;
  .box {
    padding: 0 18px 0 14px;
    margin: 13px 0;
  }

  .left-txt {
    float: left;
  }

  .left-txt i {
    display: inline-block;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }

  .left-txt .icon1 {
    background: url(../images/data-icon1.png);
  }

  .left-txt .icon2 {
    background: url(../images/data-icon2.png);
  }

  .left-txt .icon3 {
    background: url(../images/data-icon3.png);
  }

  .left-txt span {
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }

  .right-num {
    float: right;
  }

  .right-num em {
    display: inline-block;
    vertical-align: top;
    height: 26px;
    line-height: 26px;
    font-size: 26px;
    color: #2b5aaa;
  }

  .right-num span {
    font-size: 14px;
    color: #666666;
    margin-left: 3px;
    display: inline-block;
    vertical-align: top;
  }
}

.main .enter-box {
  padding-left: 14px;
  padding-bottom: 14px;
  margin-top: 14px;
  li {
    height: 75px;
    cursor: pointer;
  }

  .country {
    background: url(../images/country-list-img.png);
  }

  .provincial {
    margin: 11px 0;
    background: url(../images/provincial-list-img.png);
  }

  .industry {
    background: url(../images/industry-report-img.png);
  }
}
</style>