<script>
import TodoHeader from "@/components/molecules/TodoHeader.vue";
import TodoList from "@/components/molecules/TodoList.vue";
import TodoFooter from "@/components/molecules/TodoFooter.vue";

export default {
  name: "AppMain",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
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