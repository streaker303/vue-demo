<template>
  <div style="width:100%;height:100%;background: skyblue"></div>
</template>

<script>
import LoadingBar from './loadingBar';
	LoadingBar.config({
	   color: '#5cb85c',
	   failedColor:'#ff3c3c',
	   height:6,
	})
export default {
  name: 'bar',
  data() {
    return {
    };
  },
  created () {
      LoadingBar.start();
      setTimeout(()=>{
      LoadingBar.finish();
      },2000)
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};

</script>

<style scoped>

</style>