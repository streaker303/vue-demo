<template>
    <div class="container">
        <button @click="add" style="position: fixed;z-index: 10">新增记录</button>
        <div class="inner">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import pic from './database/picture.json'
export default {
    name: "reverse",
    data () {
        return {
            list: []
        }
    },
    mounted () {
        console.log(pic)
        this.list = pic;
    },
    methods: {
        add() {
            setTimeout(()=>{
                this.list.unshift({'url': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3898744560,1913932667&fm=26&gp=0.jpg'})
            },1000)
        }
    }
    
}
</script>

<style scoped>
    ul,li {
        list-style: none;
    }
    ul,li {
        width: 100%;
    }
    .container {
        width: 800px;
        height: 600px;
        border: 5px solid deeppink;
        margin: 0 auto;
        overflow-y: scroll;
        position: relative;
    }
    img {
        width: 100%;
    }
    .inner {
        transform: rotateZ(180deg);
        /*margin-top: 20px;*/
    }
    li {
        transform: rotateZ(180deg);
    }
</style>