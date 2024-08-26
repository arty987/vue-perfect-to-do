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
  <main class="app-main">
    <h1 class="app-header">T O D O</h1>
    <ul class="list-group">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </ul>
  </main>
</template>

<style scoped>
.app-main {
  width: 500px;
  margin-inline: auto;
  margin-bottom: 100px;
  margin-top: -250px;
}

.app-header {
  color: white;
  font-weight: 650;
  margin-bottom: 40px;
}
</style>