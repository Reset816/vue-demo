<template>
    <Spin class="loading" fix>
        <Icon type="ios-loading" size="18" class="spin-icon-load" />
        <div>加载中..</div>
    </Spin>
</template>

<script>
    export default {
        name: "Loading",
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .spin-icon-load {
        animation: ani-spin 1s linear infinite;
    }

    @keyframes ani-spin {
        from {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(180deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 9999;
    }
</style>