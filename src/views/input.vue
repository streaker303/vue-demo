<template>
    <div class="container">
        <input v-model="num" v-writing class="put-box" type="text"  />
        <ul class="menu">
            <li class="menu-item"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "input",
    data () {
        return {
            num: '',
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
