<template>
  <!-- 基础内容 -->
  <div class="base-content">
    <ul>
      <!-- a标签只是为了有个鼠标悬停效果，无实际意义 -->
      <a>
        <li
          class="content-txt"
          :class="{ active: activeId == content.id }"
          v-for="content in List"
          :key="content.id"
          @click="Click(content)"
        >
          <h2>{{ content.title }}</h2>
          <span>{{ content.cont }}</span>
          <div class="border">
            <div class="border-left">{{ content.time }}</div>
            <div class="border-right">
              <i class="i1"></i><em>{{ content.look }}</em> <i class="i2"></i
              ><em>{{ content.look }}</em>
            </div>
          </div>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseContent",
  data() {
    return {
      activeId: "",
      List: [
        {
          id: "0",
          title:
            "樱花如雪春正好，不负春光不负卿 ——记国务院“互联网+督查”平台审看历史数据迁移工作圆满成功",
          cont: "这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分这里是内容部分…",
          time: "发布时间：2020-04-07",
          look: "231",
          like: "231",
          path: "/frame/report_details",
        },
        {
          id: "1",
          title: "标题标题标题标题标题标题标题标题标题标题标题标题",
          cont: "中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…",
          time: "发布时间：2021-01-22",
          look: "231",
          like: "231",
        },
        {
          id: "2",
          title: "标题标题标题标题标题标题标题标题标题标题标题标题",
          cont: "中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…",
          time: "发布时间：2021-01-22",
          look: "231",
          like: "231",
        },
        {
          id: "3",
          title: "标题标题标题标题标题标题标题标题标题标题标题标题",
          cont: "中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…",
          time: "发布时间：2021-01-22",
          look: "231",
          like: "231",
        },
        {
          id: "4",
          title: "标题标题标题标题标题标题标题标题标题标题标题标题",
          cont: "中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…",
          time: "发布时间：2021-01-22",
          look: "231",
          like: "231",
        },
      ],
    };
  },
  methods: {
    Click(content) {
      this.activeId = content.id;
      if (content.path) {
        this.$router.push({
          path: content.path,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* 基础内容 */
.base-content {
  li {
    border-bottom: 1px solid #d8d8d8;
    h2 {
      font-size: 16px;
      color: #000000;
      margin-bottom: 8px;
      margin-top: 14px;
      font-weight: bold;
    }
    span {
      height: 48px;
      font-size: 14px;
      color: #333333;
      text-align: justify;
      line-height: 24px;
    }
    .border {
      margin-top: 12px;
      padding-bottom: 14px;
      .border-left {
        display: inline-block;
        font-size: 12px;
        vertical-align: top;
        color: #666666;
      }
      .border-right {
        display: inline-block;
        font-size: 12px;
        vertical-align: top;
        color: #666666;
        margin-left: 625px;
        .i1 {
          background: url(../../../../assets/img/look.png);
          display: inline-block;
          width: 17px;
          height: 11px;
          margin-right: 9px;
        }
        .i2 {
          margin-left: 34px;
          display: inline-block;
          width: 13px;
          height: 11px;
          background: url(../../../../assets/img/like.png);
          margin-right: 9px;
        }
      }
    }
  }
}
</style>