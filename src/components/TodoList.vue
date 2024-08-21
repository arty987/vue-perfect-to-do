<script>
import TodoItem from "@/components/TodoItem.vue";
import {mapGetters} from "vuex";

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters([
      'tasks'
    ])
  }
}
</script>

<template>
  <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
  />
</template>

<style scoped>

</style>