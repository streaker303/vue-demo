<template>
    <div class="container" v-infinite-scroll="add" infinite-scroll-delay="1000" dir="rtl" ref="objContainer" style="width: 50%">
        <div class="inner">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.url" alt="">{{ index }}
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
        var that = this;
        var isFirefox = navigator.userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器;
        var addEvent = (function () {
                if (window.addEventListener) {
                    return function (el, sType, fn, capture) {
                        el.addEventListener(sType, fn, (capture));
                    };
                } else if (window.attachEvent) {
                    return function (el, sType, fn, capture) {
                        el.attachEvent("on" + sType, fn);
                    };
                } else {
                    return function () {
                    };
                }
            })(),
            stopEvent = function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }
            },
            // isFirefox 是伪代码，大家可以自行实现
            mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel";
        // object 是伪代码，你需要注册 Mousewheel 事件的元素
        
        this.$nextTick(() => {
            addEvent(that.$refs.objContainer, mousewheel, function (event) {
                var e = event || window.event;
                stopEvent(e);
                if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
                    console.log(e.wheelDelta)
                    if (e.wheelDelta > 0) { //当滑轮向上滚动时
                        //事件
                        that.$refs.objContainer.scrollTop = that.$refs.objContainer.scrollTop + 120;
                    }
                    if (e.wheelDelta < 0) { //当滑轮向下滚动时
                        //事件
                        that.$refs.objContainer.scrollTop = that.$refs.objContainer.scrollTop - 120;
                    }
                } else if (e.detail) { //Firefox滑轮事件
                    console.log('e.detail', e.detail)
                    if (e.detail > 0) { //当滑轮向上滚动时
                        //事件
                        that.$refs.objContainer.scrollTop = that.$refs.objContainer.scrollTop - 120;
                    }
                    if (e.detail < 0) { //当滑轮向下滚动时
                        //事件
                        that.$refs.objContainer.scrollTop = that.$refs.objContainer.scrollTop + 120;
                    }
                }
            }, false);
        })
        
    },
    /*先翻转最外面container，然后翻转每条消息；*/
    methods: {
        add () {
            setTimeout(() => {
                this.list.push({'url': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3898744560,1913932667&fm=26&gp=0.jpg'});
                let top = document.querySelector('.inner').clientHeight;
                // document.querySelector('.container').scrollTop = top;
                console.log(top)
            }, 0)
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

.container {
    transform: rotateZ(180deg);
    /*margin-top: 20px;*/
}

li {
    transform: rotateZ(180deg);
}
</style>