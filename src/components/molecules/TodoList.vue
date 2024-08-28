<script>
import TodoTask from "@/components/molecules/TodoTask.vue";
import {mapGetters} from "vuex";
import draggable from "vuedraggable";

export default {
  name: "TodoList",
  data() {
    return {
      drag: false,
    }
  },
  components: {
    TodoTask,
    draggable
  },
  computed: {
    ...mapGetters([
      "tasks"
    ])
  }
}
</script>

<template>
  <div class="task-container">
    <div v-if="!tasks.length" class="no-tasks-list-item">No tasks to display</div>
    <draggable :list="tasks" @start="drag = true" @end="drag = false" item-key="id">
      <template #item="{ element }">
        <TodoTask :task="element"/>
      </template>
    </draggable>
  </div>
</template>

<style scoped lang="scss">
.task-container {
  height: 250px;
  overflow-y: auto;
  border-top-right-radius: var(--bs-border-radius);
  border-top-left-radius: var(--bs-border-radius);
  border-left: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
  border-right: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
  background-color: white;
}

.no-tasks-list-item {
  height: 100%;
  align-content: center;
  text-align: center;
}
</style>