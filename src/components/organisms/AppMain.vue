<script>
import TodoHeader from "@/components/molecules/TodoHeader.vue";
import TodoList from "@/components/molecules/TodoList.vue";
import TodoFooter from "@/components/molecules/TodoFooter.vue";
import TodoInput from "@/components/molecules/TodoInput.vue";

export default {
  name: "AppMain",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<template>
  <main class="app-main">
    <TodoHeader/>
    <ul class="list-group">
      <TodoInput/>
      <div class="shadow-lg rounded">
        <TodoList/>
        <TodoFooter/>
      </div>
    </ul>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  width: 500px;
  margin-inline: auto;
  margin-bottom: 100px;
  margin-top: -250px;
}
</style>