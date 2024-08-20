<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  }
}
</script>

<template>
  <TodoItem msg="Meet George"/>
  <TodoItem msg="Hit the gym"/>
  <TodoItem msg="Buy eggs"/>
  <TodoItem msg="Read a book"/>
  <TodoItem msg="Organize office"/>
</template>

<style scoped>

</style>