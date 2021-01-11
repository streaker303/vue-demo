<template>
    <div class="outer">
        <bar :charData="list"></bar>
    </div>
</template>

<script>
import bar from '@/views/bar.vue'
export default {
    name: 'sknew',
    components: {
        bar
    },
    data() {
        return {
            list: 20
        };
    },
    computed: {
        },
    watch: {
    },
    methods: {
    }
}

</script>

<style scoped>
    .outer {
        height: 100%;
        border: 20px solid pink;
        box-sizing: border-box;
    }
</style>