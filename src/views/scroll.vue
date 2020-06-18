<template>
  <div class="outer">
      <div class="inner">
          <div class="box"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
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
* {
    margin: 0;
    padding: 0;
}
.outer {
    width: 100% !important;
    height: 100% !important;
    overflow-y: auto;
}
.inner{
    height: 1200px;
    background: greenyellow;
    overflow-y: auto;
}
/* .box {
    width: 1000px;
    height: 1300px;
    background: orange;
} */

/*滚动条样式*/
/*修改滚动条样式*/
div::-webkit-scrollbar{
  width:7px;
  height:7px;
  /**/
}
div::-webkit-scrollbar-track{
	padding:0 3px;
  background: #010205;
  /*rgb(239, 239, 239);*/
  border-radius:8px;
}
div::-webkit-scrollbar-thumb{
  background: #01e9ff;
  border-radius:14px;
}
div::-webkit-scrollbar-thumb:hover{
  background: #01e9ff;
}
div::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>