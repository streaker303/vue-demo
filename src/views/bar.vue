<template>
    <div class="outer1">
        <div class="wrapper">
            <div class="inner" v-for="(item, index) in charData" :key="index"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bar',
    props: ['charData'],
    data() {
        return {
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
    .outer1 {
        width: 170px;
        height: 10px;
        overflow: hidden;
        border: 2px solid #00b38a;
        font-size: 0;
    }

    .wrapper {
        width:0;
        height: 10px;
        overflow: hidden;
        animation: ani 2s forwards;
    }
    .inner {
        display: inline-block;
        width: 1px;
        margin: 0 1px;
        height: 10px;
        background: orange;
        
        transform: skewX(30deg);
    }

    @keyframes ani {
        0% {
            width: 0;
        }

        100% {
            width: 100%;
        }
    }

</style>