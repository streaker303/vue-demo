<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            <a href="">{{$t('m.project')}}</a>
            <a href="" style="margin: 0 20px">{{$t('m.menu')}}</a>
            <button @click="toggle">语言切换</button>
            <button style="margin:0 10px" @click="skin">皮肤切换</button>
            <button @click="go">to-Bar</button>
            <button style="margin:0 10px" @click="toMap">Map</button>
            <button style="margin:0 10px 0 0" @click="toScroll">scroll</button>
            <button style="margin:0 10px 0 0" @click="emotion">emotion</button>
            <button style="margin:0 10px 0 0" @click="input">input</button>
            <button style="margin:0 10px 0 0" @click="excel">excel</button>
            <button style="margin:0 10px 0 0" @click="goAnimate">vue动画</button>
            <button style="margin:0 10px 0 0" @click="goReverse">不抖动插入</button>
            <button style="margin:0 10px 0 0" @click="goCar">小球购物车</button>
            <button style="margin:0 10px 0 0" @click="goCoder">coder</button>
            <button style="margin:0 10px 0 0" @click="goSknew">sknew</button>
            <button style="margin:0 10px 0 0" @click="goLoading">Loading...</button>
            <button style="margin:0 10px 0 0" @click="goYzm">验证码</button>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    // components: {
    //   HelloWorld
    // }
    data () {
        return {}
    },
    mounted () {


    },
    methods: {
        toggle () {
            console.log(this.$i18n.locale);
            switch (this.$i18n.locale) {
                case 'zh-CN':
                    this.$i18n.locale = 'en-US';
                    break;

                default:
                    this.$i18n.locale = 'zh-CN';
                    break;
            }
        },
        skin () {
            let x = document.getElementById('toogle-style');
            console.log(x.href);
            switch (x.href.includes('theme1')) {
                case true:
                    x.href = './css/theme2.css';
                    break;
                case false:
                    x.href = './css/theme1.css';
                    break;
            }
        },
        go () {
            this.$router.push('/about');
        },
        toMap () {
            this.$router.push('/map')
        },
        toScroll () {
            this.$router.push('/scroll')
        },
        emotion () {
            this.$router.push('/emotion')
        },
        input () {
            this.$router.push('/input')
        },
        excel () {
            this.$router.push('/excel')
        },
        goAnimate () {
            this.$router.push('/vue/animate')
        },
        goReverse () {
            this.$router.push('/reverse')
        },
        goCar () {
            this.$router.push('/shopCar')
        },
        goCoder () {
            this.$router.push('/coder')
        },
        goSknew () {
            this.$router.push('/sknew')
        },
        goLoading () {
            this.$router.push('/loading')
        },
        goYzm () {
            this.$router.push('/yzm')
        }
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .home {
        transform: translate(0,0);
    }
</style>
