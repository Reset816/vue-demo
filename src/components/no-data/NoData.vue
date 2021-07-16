<template>
    <div class="no-data">{{ text }}</div>
</template>
<script>
    export default {
        name: "NoData",
        props: {
            text: {
                type: String,
                default: '暂无数据'
            }
        },
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .no-data {
        width: 357px;
        height: 330px;
        line-height: 34px;
        margin: 0 auto;
        padding-top: 296px;
        background: url(../../assets/img/no-data.png) center 30px no-repeat;
        text-align: center;
        font-size: 28px;
        color: #999;
    }
</style>