<template>
    <div>
        <div style="width: 500px;height: 200px;border: 1px solid red;margin: 0 auto;background: greenyellow">
            <Sidentify :identifyCode="Code.identifyCode" :color="Code.color" style="width: 100%;height: 100%"></Sidentify>
        </div>
        <div>{{Code.identifyCode}}</div>
        <button @click="refreshCode">刷新</button>
    </div>
</template>

<script>
import Sidentify
    from './identify'//自定义验证码
export default {
    name: "yzm",
    components: {
        Sidentify,
    },
    data () {
        return {
            Code: {
                color:"",
                identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                //identifyCodes: "1234567890",
                //identifyCodes: "1",
                identifyCode: "1234",
            },
        }
    },
    mounted() {
        this.refreshCode()
    },
    methods: {
        // 生成随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        //随机生成验证码
        refreshCode() {
            this.Code.identifyCode = ''; //清空前一个验证码
            this.makeCode(this.Code.identifyCodes, 4)
        },
    
        // 生成四位随机验证码
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.Code.identifyCode += this.Code.identifyCodes[this.randomNum(0, this.Code.identifyCodes.length)]
            }
        },
    }
}
</script>

<style scoped>

</style>
