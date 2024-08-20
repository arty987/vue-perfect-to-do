<script>
export default {
  name: "TodoItem",
  props: {
    msg: String
  }
}
</script>

<template>
  <li>
    <input type="checkbox"/>
    {{ msg }}
    <button type="button">X</button>
  </li>
</template>

<style scoped>

</style>