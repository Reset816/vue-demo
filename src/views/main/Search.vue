<template>
  <div class="search">
    <!-- 面包屑 -->
    <div class="crumbs">
      <span class="mar-l22">当前位置：</span>
      <a href="">首页</a>
      <span> > </span>
      <span>药品短缺清单</span>
    </div>
    <!-- 内容 -->
    <div class="content clear fn-clear4">
      <!-- 基础信息 -->
      <div class="base-info">
        <!-- 标题 -->
        <div class="public-tel">
          <span class="big-size"
            >短缺药品<span class="small-size">综合查询</span></span
          >
        </div>
        <!-- form表单 -->
        <div class="form-info">
          <form action="">
            <label for="" class="mar-t28">
              <span>请选择查询级别：</span>
              <input type="radio" name="leve" id="" value="" />国家级
              <input
                type="radio"
                name="leve"
                id=""
                value=""
                class="mar-l60"
              />省级
            </label>
            <label for="" class="mar-t28">
              <span>请选择查询级别：</span>
              <input type="radio" name="leve1" id="" value="" />国家级
              <input
                type="radio"
                name="leve1"
                id=""
                value=""
                class="mar-l60"
              />省级
            </label>
            <label for="">
              <span>请选择查询级别：</span>
              <select name="" id="">
                <option value="">2019年</option>
                <option value="">2020年</option>
                <option value="">2021年</option>
              </select>
            </label>
            <label for="" class="btn">
              <input type="button" name="" id="" value="查询" />
            </label>
          </form>
        </div>
        <!-- table表格 -->
        <div class="table-info">
          <!-- <table>
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>品种名称</th>
                                <th>剂型</th>
                                <th>生产企业</th>
                                <th>停产时间</th>
                                <th>复产时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr class="bg-f8">
                                <td>2</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr class="bg-f8">
                                <td>4</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>阿斯匹灵</td>
                                <td>片剂</td>
                                <td>佛慈制药六厂</td>
                                <td>2018-02-09</td>
                                <td>2019-02-09</td>
                                <td>查看</td>
                            </tr>
                        </tbody>
                    </table> -->
          <Table :columns="columns1" :data="data1">
            <template slot-scope="{ row, index }" slot="action">
              <span>查看</span>
            </template>
          </Table>
        </div>
        <!-- 分页 -->
        <div class="paging">
          <!-- <ul>
                        <li class="prev">上一页</li>
                        <li>1</li>
                        <li>2</li>
                        <li class="active">6</li>
                        <li class="no-border">...</li>
                        <li>9</li>
                        <li class="next">下一页</li>
                        <li class="jump no-border">跳转到</li>
                        <li class="no-border no-pad">
                            <input class="text" type="text" name="" id="">
                        </li>
                        <li class="no-border no-pad">
                            <input type="button" class="btn" name="" id="" value="确定">
                        </li>
                    </ul> -->
          <Page :total="100" show-elevator />
        </div>
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
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      columns1: [
        {
          type: "index",
          title: "序号",
          width: 70,
          align: "center",
        },
        {
          title: "品种名称",
          key: "name",
        },
        {
          title: "剂型",
          key: "type",
        },
        {
          title: "生产企业",
          key: "company",
        },
        {
          title: "停产时间",
          key: "time1",
        },
        {
          title: "复产时间",
          key: "time2",
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
        },
      ],
      data1: [
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
        {
          name: "阿斯匹灵",
          type: "片剂",
          company: "佛慈制药六厂",
          time1: "2018-02-09",
          time2: "2019-02-09",
        },
      ],
    };
  },
  methods: {
    show(index) {
      console.log("查看" + index);
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  width: 1200px;
  margin: 0 auto;

  .crumbs {
    height: 46px;
    line-height: 46px;
    background: #fff;
    /* padding-left: 22px; */
  }

  .crumbs span {
    font-size: 15px;
    color: #333;
  }

  .crumbs .mar-l22 {
    margin-left: 22px;
  }

  .crumbs a {
    display: inline-block;
    font-size: 15px;
    color: #2b5aaa;
  }

  .content {
    margin-top: 20px;
    position: relative;
    /* height: 795px; */
  }

  .fn-clear4 .base-info {
    width: 936px;
    /* height: 795px; */
    display: inline-block;
    vertical-align: top;
    padding: 17px 24px 21px;
    box-sizing: border-box;
    background: #fff;
  }

  .fn-clear4 .fn-info {
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

  .fn-clear4 .base-info form {
    position: relative;
  }

  .fn-clear4 .base-info label {
    display: block;
    font-size: 14px;
    color: #333333;
  }

  .fn-clear4 .base-info .mar-t28 {
    margin-top: 28px;
    margin-bottom: 38px;
  }

  .fn-clear4 .base-info .mar-l60 {
    margin-left: 60px;
  }

  .fn-clear4 .base-info span,
  .fn-clear4 .base-info .form-info input {
    display: inline-block;
    vertical-align: middle;
  }

  .fn-clear4 .base-info .form-info input {
    margin-right: 8px;
    width: 15px;
    height: 15px;
  }

  .fn-clear4 .base-info select {
    width: 225px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #d3d3d3;
    border-radius: 2px;
    outline: none;
    padding: 0 10px;
  }

  .base-info .form-info .btn {
    position: absolute;
    right: 80px;
    bottom: 0px;
  }

  .base-info .form-info .btn input {
    width: 90px;
    height: 38px;
    background: #2b5aaa;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .table-info {
    margin-top: 20px;
  }

  .table-info table {
    width: 100%;
  }

  .table-info th {
    height: 50px;
    background: #eff4fa;
    font-size: 14px;
    color: #333333;
    text-align: center;
  }

  .table-info td {
    text-align: center;
    height: 42px;
    font-size: 14px;
  }

  .table-info tr:nth-child(2n) {
    background: #f8f8f8;
  }

  .paging {
    text-align: center;
    margin-top: 30px;
  }

  .paging li {
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

  .paging li.active {
    background: #2b5aaa;
    color: #fff;
    border-color: #2b5aaa;
  }

  .paging .no-border {
    border: none;
  }

  .paging .no-pad {
    padding: 0;
  }

  .paging .text {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #e7e7e7;
    border-radius: 2px;
    text-align: center;
  }

  .paging .jump {
    color: #333;
  }

  .paging .btn {
    width: 74px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    cursor: pointer;
  }

  .fn-info .enter-piece {
    width: 100%;
    height: 37px;
    background: url(../../assets/img/workbench-bg.png);
    color: #fff;
  }

  .fn-info .enter-left {
    float: left;
    margin: 7px 0 0 14px;
  }

  .fn-info .enter-left i {
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    background: url(../../assets/img/workbench-icon.png);
    /* margin-right: 10px; */
  }

  .fn-info .enter-left span {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    vertical-align: middle;
    margin-left: 10px;
  }

  .fn-info .enter-right {
    float: right;
  }

  .fn-info .enter-right {
    margin: 11px 19px 0 0;
  }

  .fn-info .enter-right span {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
  }

  .fn-info .enter-right i {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    background: url(../../assets/img/arrow-icon.png);
    margin-left: 7px;
  }

  .data-info {
    margin-left: 14px;
    height: 134px;
    background: #e9f5ff;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    margin-top: 14px;
    padding-top: 6px;
  }

  .data-info .box {
    padding: 0 18px 0 14px;
    margin: 13px 0;
  }

  .data-info .left-txt {
    float: left;
  }

  .data-info .left-txt i {
    display: inline-block;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }

  .data-info .left-txt .icon1 {
    background: url(../../assets/img/data-icon1.png);
  }

  .data-info .left-txt .icon2 {
    background: url(../../assets/img/data-icon2.png);
  }

  .data-info .left-txt .icon3 {
    background: url(../../assets/img/data-icon3.png);
  }

  .data-info .left-txt span {
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }

  .data-info .right-num {
    float: right;
  }

  .data-info .right-num em {
    display: inline-block;
    vertical-align: top;
    height: 26px;
    line-height: 26px;
    font-size: 26px;
    color: #2b5aaa;
  }

  .data-info .right-num span {
    font-size: 14px;
    color: #666666;
    margin-left: 3px;
    display: inline-block;
    vertical-align: top;
  }

  .enter-box {
    padding-left: 14px;
    padding-bottom: 14px;
    margin-top: 14px;
  }

  .enter-box li {
    height: 75px;
    cursor: pointer;
  }

  .enter-box .country {
    background: url(../../assets/img/country-list-img.png);
  }

  .enter-box .provincial {
    margin: 11px 0;
    background: url(../../assets/img/provincial-list-img.png);
  }

  .enter-box .industry {
    background: url(../../assets/img/industry-report-img.png);
  }
}
</style>