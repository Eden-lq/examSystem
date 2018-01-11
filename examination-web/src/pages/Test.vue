<template>
    <div class="test">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '这是测试页面'
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-weight: normal;
    }
</style>
