<template>
  <div>
    <virtual-list style="height: 400px; overflow-y: auto;"
    :data-key="'uid'"
    :data-sources="items"
    :data-component="itemComponent"
      :keeps="30"
    />
  </div>
</template>

<script>
import Item from './Item'
import VirtualList from 'vue-virtual-scroll-list'

export default {
  name: 'root',
  data () {
    return {
      itemComponent: Item,
      items: []
    }
  },
  created() {
    let i = 1
    let arr = []
    while(i<10000) {
      arr.push({
        uid: 'unique' + i,
        text: 'abc' + i
      })
      i++
    }
    this.items = arr
  },
  components: { 'virtual-list': VirtualList }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
div {
  height: 400px;
}
</style>
