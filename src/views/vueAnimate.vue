<template>
   <div class="container">
       <button @click="flag = !flag">单个开关</button>
       <button @click="add" style="margin: 0 20px">加</button>
       <button @click="reduce">减</button>
       <transition name="fade">
           <ul class="list" v-if="flag">
               <li class="list-item"></li>
               <li class="list-item"></li>
               <li class="list-item"></li>
               <li class="list-item"></li>
               <li class="list-item"></li>
               <li class="list-item"></li>
               <li class="list-item"></li>
               <li class="list-item"></li>
           </ul>
       </transition>
       <transition-group name="list">
           <p style="height: 30px;background: yellow;margin-bottom: 10px" v-for="(item,index) in arr" :key="index">12</p>
       </transition-group>
   </div>
</template>

<script>
export default {
    name: 'emotion',
    data() {
        return {
            flag: true,
            flag2: true,
            arr: [1,2]
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
        add () {
            this.arr.push(1);
        },
        reduce () {
            this.arr.pop();
        }
    }
}

</script>

<style scoped>
.container {
    width: 1200px;
    height: 800px;
    background: #01e9ff;
}
.list-item {
    margin: 10px 0;
    height: 30px;
    background: palevioletred;
}
.fade-enter-active, .fade-leave-active {
    transition: all 5s;
    /*transform: translateX(10px); //不会停在此处，因为动画结束后，类名消失*/
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(150px);
}


.list-enter-active, .list-leave-active {
    transition: all 2s;
}
.list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-150px);
}
</style>