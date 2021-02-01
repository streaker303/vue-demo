<template>
    <div class="container" ref="objContainer" style="width: 50%"  @scroll="judge">
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
    name: "noReverse",
    data () {
        return {
            list: [],
            flag: true
        }
    },
    mounted () {
        this.list = pic;
        this.$nextTick(() => {
        })
        
    },
    /*先翻转最外面container，然后翻转每条消息；*/
    methods: {
        judge (event) {
            /*console.log(event.target.scrollTop)
            console.log(event.target.scrollHeight)*/
            if (event.target.scrollTop === 0 ) {
                this.add();
            }
        },
        add () {
            if (this.flag) {
                this.flag = false;
            } else {
                return ;
            }
            let top1 = document.querySelector('.container').scrollHeight;
            console.log(top1)
            setTimeout(() => {
                this.flag = true;
                this.list.unshift({'url': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3898744560,1913932667&fm=26&gp=0.jpg'});
                
            this.$nextTick(()=>{
                let top2 = document.querySelector('.container').scrollHeight;
                console.log(top2)
                console.log(top2-top1)
                console.log(this.$refs.objContainer.scrollTop)
                this.$refs.objContainer.scrollTop = this.$refs.objContainer.scrollTop + (top2 - top1)
                console.log(this.$refs.objContainer.scrollTop)
                
            })
            
            }, 1000)
        }
    }
    
}
</script>

<style scoped>
ul, li {
    list-style: none;
}

ul, li {
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
</style>