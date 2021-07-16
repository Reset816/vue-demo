<template>
  <div class="search-engine">
    <div class="cont">
      <div class="picture">
        <i></i>
      </div>
      <div class="content clear">
        <div class="base-info">
          <div class="public-tel">
            <span class="big-size"
              >短缺药品综合搜索<span class="small-size">引擎</span></span
            >
          </div>
          <div class="search-box">
            <select placeholder="请输入查询信息"></select>
            <input type="search" placeholder="请输入查询信息" />
            <button class="b1">搜索</button>
            <button class="b2">高级搜索</button>
          </div>
          <div class="message1">
            <span class="title">标题</span>
            <p>
              中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…
            </p>
            <span class="time">发布时间：2021-01-28</span>
          </div>
          <div class="message1">
            <span class="title">标题</span>
            <p>
              中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…
            </p>
            <span class="time">发布时间：2021-01-28</span>
          </div>
          <div class="message1">
            <span class="title">标题</span>
            <p>
              中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…
            </p>
            <span class="time">发布时间：2021-01-28</span>
          </div>
          <div class="message1">
            <span class="title">标题</span>
            <p>
              中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…
            </p>
            <span class="time">发布时间：2021-01-28</span>
          </div>
          <div class="message1">
            <span class="title">标题</span>
            <p>
              中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…
            </p>
            <span class="time">发布时间：2021-01-28</span>
          </div>
          <div class="paging">
            <ul>
              <li class="prev">上一页</li>
              <li>1</li>
              <li>2</li>
              <li class="active">6</li>
              <li class="no-border">...</li>
              <li>9</li>
              <li class="next">下一页</li>
              <li class="jump no-border">跳转到</li>
              <li class="no-border no-pad">
                <input class="text" type="text" />
              </li>
              <li class="no-border no-pad">
                <input type="button" class="btn" name="" id="" value="确定" />
              </li>
            </ul>
          </div>
        </div>
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
  name: "Search-engine",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.search-engine {
  background: #f5f5f5;
  padding-bottom: 32px;

  .cont {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;

    .picture i {
      display: block;
      background: url("../../assets/img/picture.png");
      width: 1200px;
      height: 140px;
      opacity: 0.73;
    }
    .content {
      margin-top: 20px;

      .base-info {
        width: 933px;
        padding: 19px 24px 40px 24px;
        float: left;
        box-sizing: border-box;
        background: #ffffff;

        .public-tel {
          height: 32px;
          border-bottom: 1px solid #d8d8d8;

          span {
            display: inline-block;
          }
          .big-size {
            font-size: 18px;
            color: #1a65b9;
            height: 100%;
            border-bottom: 1px solid #1a65b9;
            padding-left: 20px;
          }

          .small-size {
            font-size: 13px;
            color: #333;
            vertical-align: 2px;
            margin-left: 4px;
          }
        }
        .search-box {
          margin-left: 36px;
          margin-top: 20px;

          select {
            /*margin-left: 36px;*/
            /*margin-top: 20px;*/

            width: 226px;
            height: 38px;
            border: 1px solid #d3d3d3;
            border-radius: 2px;
          }

          input {
            margin-left: 21px;
            width: 306px;
            height: 38px;
            background: #ffffff;
            border: 1px solid #d3d3d3;
            border-radius: 2px;
            padding-left: 14px;
            font-size: 14px;
          }

          .b1 {
            margin-left: 17px;
            height: 38px;
            width: 90px;
            background: #2b5aaa;
            border-radius: 4px;

            text-align: center;

            font-size: 16px;
            color: #ffffff;
            letter-spacing: 0;
            font-weight: 500;
          }

          .b2 {
            margin-left: 18px;
            width: 122px;
            height: 38px;
            background: #2b5aaa;
            border-radius: 4px;

            text-align: center;

            font-size: 16px;
            color: #ffffff;
            letter-spacing: 0;
            font-weight: 500;
          }
        }
        .message1 {
          padding-top: 14px;
          border-bottom: 1px solid #eeeeee;

          .title {
            display: block;
            margin-bottom: 8px;
            /*padding-bottom: 8px;*/
            /*todo*/
            font-size: 16px;
            font-weight: bold;
            color: #000000;
            letter-spacing: 0;
          }

          p {
            margin-bottom: 8px;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0;
            text-align: justify;
            line-height: 24px;
            font-weight: 400;
          }

          .time {
            display: block;
            margin-bottom: 14px;
            font-size: 12px;
            color: #777777;
            text-align: justify;
          }
        }

        .paging {
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
            &.active {
              background: #2b5aaa;
              color: #fff;
              border-color: #2b5aaa;
            }
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
      }

      .fn-info {
        width: 244px;
        float: right;
        background: #ffffff;

        .enter-piece {
          width: 100%;
          height: 37px;
          background: url(../../assets/img/workbench-bg.png) no-repeat;
          color: #fff;

          .enter-left {
            float: left;
            margin: 7px 0 0 14px;
            i {
              display: inline-block;
              vertical-align: middle;
              width: 18px;
              height: 18px;
              background: url(../../assets/img/workbench-icon.png) no-repeat;
              /* margin-right: 10px; */
            }

            span {
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              vertical-align: middle;
              margin-left: 10px;
            }
          }
          .enter-right {
            float: right;
            margin: 11px 19px 0 0;
            span {
              font-size: 12px;
              display: inline-block;
              vertical-align: middle;
            }

            i {
              display: inline-block;
              vertical-align: middle;
              width: 10px;
              height: 10px;
              background: url(../../assets/img/arrow-icon.png);
              margin-left: 7px;
            }
          }
        }

        .data-info {
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

            .left-txt {
              float: left;

              i {
                display: inline-block;
                width: 22px;
                height: 22px;
                vertical-align: middle;
              }

              .icon1 {
                background: url(../../assets/img/data-icon1.png);
              }

              .icon2 {
                background: url(../../assets/img/data-icon2.png);
              }

              .icon3 {
                background: url(../../assets/img/data-icon3.png);
              }

              span {
                font-size: 14px;
                color: #333333;
                font-weight: bold;
                display: inline-block;
                vertical-align: middle;
                margin-left: 8px;
              }
            }
            .right-num {
              float: right;

              em {
                display: inline-block;
                vertical-align: top;
                height: 26px;
                line-height: 26px;
                font-size: 26px;
                color: #2b5aaa;
              }

              span {
                font-size: 14px;
                color: #666666;
                margin-left: 3px;
                display: inline-block;
                vertical-align: top;
              }
            }
          }
        }

        .enter-box {
          padding-left: 14px;
          padding-bottom: 14px;
          margin-top: 14px;
          li {
            height: 75px;
            cursor: pointer;
          }
          .country {
            background: url(../../assets/img/country-list-img.png) no-repeat;
          }
          .provincial {
            margin: 11px 0;
            background: url(../../assets/img/provincial-list-img.png) no-repeat;
          }
          .industry {
            background: url(../../assets/img/industry-report-img.png) no-repeat;
          }
        }
      }
    }
  }
}
</style>