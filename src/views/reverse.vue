<template>
    <div class="container">
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
    }
    
}
</script>

<style scoped>

</style>