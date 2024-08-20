<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: "AppMain",
  components: {
    TodoFooter,
    TodoList,
    TodoHeader
  }
}
</script>

<template>
  <main>
    <h1>T O D O</h1>
    <ul>
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </ul>
  </main>
</template>

<style scoped>

</style>