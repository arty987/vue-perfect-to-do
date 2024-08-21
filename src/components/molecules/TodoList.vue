<script>
import TodoTask from "@/components/molecules/TodoTask.vue";
import {mapGetters} from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoTask
  },
  computed: {
    ...mapGetters([
      "tasks"
    ])
  }
}
</script>

<template>
  <TodoTask
      v-for="task in tasks"
      :key="task.id"
      :task="task"
  />
</template>

<style scoped>

</style>