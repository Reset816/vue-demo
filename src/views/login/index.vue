<template>
    <div class="login">
        登录页
    </div>
</template>

<script>
    import {
        LOGIN
    } from "@/store/mutation-types";
    import {
        setStore
    } from "@/utils/tools";
    import loginApi from "@/api/login";

    export default {
        name: "LoginView",
        data() {
            return {
                formData: {
                    grant_type: "password",
                    scope: "read",
                    client_id: "0",
                    client_secret: "test"
                }
            };
        },
        methods: {
            handleSubmit(valid, {
                username,
                password,
                captcha
            }) {
                if (valid) {
                    this.$loading(true);
                    loginApi
                        .auth({
                            ...self.formInline,
                            username,
                            password: secret.MD5(password),
                            captcha,
                            ...this.formData
                        })
                        .then(res => {
                            if (res.code == 200) {
                                let _token = res.data.access_token;
                                this.$store.commit(LOGIN, _token);
                                setStore("token", _token);
                                this.$router.push({
                                    path: '/frame/home'
                                });
                            } else {
                                this.$Message.error("登录失败，请刷新重试");
                                this.$loading(false);
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            this.$Message.error("账号或密码错误");
                            this.$loading(false);
                        });
                }
            },
            handleGetCaptcha() {
                console.log('获取验证码！');
            },
        }
    };
</script>

<style lang="less" scoped>
    .login {
        width: 400px;
        margin: 50px auto 0;
    }

    .login-captcha .ivu-btn {
        padding: 0;
    }

    .login-captcha .ivu-btn img {
        height: 28px;
        position: relative;
        top: 4px;
    }
</style>