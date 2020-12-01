<template>
    <div>
        <coder_inner ref="coder" v-if="flag" v-model="content" :options="cmOptions" class="code"></coder_inner>
        <button @click="click1">1111111</button>
    </div>
</template>

<script>
import coder_inner from "@/views/coder_inner";
export default {
    name: "coder",
    data () {
        return {
            content: '',
            cmOptions: '',
            flag: false
        }
    },
    components: {
        coder_inner
    },
    methods: {
        click1 () {
            console.log(this.content)
            this.flag = !this.flag;
        }
    }
}
</script>

<style scoped>
.code {
    width:70%;padding:0;
    text-align:left;
    font-size: 11pt;
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}


</style>