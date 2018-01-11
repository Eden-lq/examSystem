<template>
    <div>
        <Login v-if="!hasLogined" @onLogin="onLogin"></Login>
        <home v-else :loginInfo="loginInfo" @onLogout="onLogout"></home>
    </div>
</template>

<script>
    import Test from './pages/Test.vue'
    import Login from "~/pages/Login.vue";

    export default {
        name: 'app',
        components: {
            Login,
            Test
        },
        data: function () {
            return {
                hasLogined: false,
                loginInfo: null,
            }
        },
        methods: {
            onLogin: function (loginInfo) {
                this.loginInfo = loginInfo;
                this.hasLogined = true;
            },
            onLogout: function () {
                this.hasLogined = false;
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    /************ 提示信息 ************/
    .el-notification {
        border-radius: 2px;
    }

</style>
