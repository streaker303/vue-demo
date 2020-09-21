<template>
    <div class="container">
        <input v-model="num" v-writing class="put-box" type="text"  />
        <ul class="menu">
            <li v-for="(item, index) in menuList" :key="index" class="menu-item">{{item}}{{index+1}}</li>
        </ul>
        <ul class="goods">
            <li v-for="(item, index) in goodsList" :key="index" class="menu-item">{{item}}{{index+1}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "input",
    data () {
        return {
            num: '',
            menuList: ["菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单","菜单"],
            goodsList: ["商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品"]
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
