<template>
  <div>{{ index }} - {{ source.text }}</div>
</template>

<script>
export default {
  name: 'item-component',
  props: {
    index: { // index of current item
      type: Number
    },
    source: { // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  div {
    background: #00b38a;
    border: 5px solid orange;
  }
</style>
