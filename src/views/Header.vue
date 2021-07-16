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
/* 主体内容区域样式 */

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
}

.main .crumbs span {
  font-size: 15px;
  color: #333;
}

.main .crumbs .mar-l22 {
  margin-left: 22px;
}

.main .crumbs a {
  display: inline-block;
  font-size: 15px;
  color: #2b5aaa;
}

.main .content {
  margin-top: 20px;
  position: relative;
  /* height: 795px; */
}

/* 第一种左右布局方法 */

.main .fn-clear1 .base-info {
  width: 936px;
  height: 795px;
  background: #f00;
  float: left;
}

.main .fn-clear1 .fn-info {
  width: 244px;
  height: 400px;
  background: #f0f;
  float: right;
}

//
//
///* 第二种左右布局方法 */
//
//.main .fn-clear2 .base-info {
//  width: 936px;
//  height: 795px;
//  background: #f00;
//  float: left;
//}
//
//.main .fn-clear2 .fn-info {
//  height: 400px;
//  background: #f0f;
//  margin-left: 956px;
//}
//
//
///* 第三种左右布局方法 */
//
//.main .fn-clear3 .base-info {
//  width: 936px;
//  height: 795px;
//  background: #f00;
//  position: absolute;
//  top: 0;
//  left: 0;
//}
//
//.main .fn-clear3 .fn-info {
//  width: 244px;
//  height: 400px;
//  background: #f0f;
//  position: absolute;
//  top: 0;
//  right: 0;
//}
//
//
///* 第四种左右布局方法 */
//
//.main .fn-clear4 .base-info {
//  width: 936px;
//  /* height: 795px; */
//  display: inline-block;
//  vertical-align: top;
//  padding: 17px 24px 21px;
//  box-sizing: border-box;
//  background: #fff;
//}
//
//.main .fn-clear4 .fn-info {
//  width: 244px;
//  /* height: 400px; */
//  display: inline-block;
//  vertical-align: top;
//  margin-left: 16px;
//  padding-top: 10px;
//  padding-right: 14px;
//  box-sizing: border-box;
//  background: #fff;
//}

.public-tel {
  height: 32px;
  border-bottom: 1px solid #d8d8d8;
}

.public-tel span {
  display: inline-block;
}

.public-tel .big-size {
  font-size: 18px;
  color: #1a65b9;
  height: 100%;
  border-bottom: 1px solid #1a65b9;
}

.public-tel .small-size {
  font-size: 13px;
  color: #333;
  vertical-align: 2px;
  margin-left: 4px;
}

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
}

.main .table-info table {
  width: 100%;
}

.main .table-info th {
  height: 50px;
  background: #eff4fa;
  font-size: 14px;
  color: #333333;
  text-align: center;
}

.main .table-info td {
  text-align: center;
  height: 42px;
  font-size: 14px;
}

.main .table-info tr:nth-child(2n) {
  background: #f8f8f8;
}

.main .bg-f8 {
  /* background: #F8F8F8; */
}

.main .paging {
  text-align: center;
  margin-top: 30px;
}

.main .paging li {
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

.main .paging li.active {
  background: #2b5aaa;
  color: #fff;
  border-color: #2b5aaa;
}

.main .paging .no-border {
  border: none;
}

.main .paging .no-pad {
  padding: 0;
}

.main .paging .text {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  text-align: center;
}

.main .paging .jump {
  color: #333;
}

.main .paging .btn {
  width: 74px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  cursor: pointer;
}

.main .fn-info .enter-piece {
  width: 100%;
  height: 37px;
  background: url(../assets/img/workbench-bg.png);
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
  background: url(../assets/img/workbench-icon.png);
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
  background: url(../assets/img/arrow-icon.png);
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
  background: url(../assets/img/data-icon1.png);
}

.main .data-info .left-txt .icon2 {
  background: url(../assets/img/data-icon2.png);
}

.main .data-info .left-txt .icon3 {
  background: url(../assets/img/data-icon3.png);
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
  background: url(../assets/img/country-list-img.png);
}

.main .enter-box .provincial {
  margin: 11px 0;
  background: url(../assets/img/provincial-list-img.png);
}

.main .enter-box .industry {
  background: url(../assets/img/industry-report-img.png);
}

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