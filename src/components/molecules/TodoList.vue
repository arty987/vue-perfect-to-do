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
  <p v-if="!tasks.length" class="text-center text-white">No tasks have been added yet</p>
  <draggable :list="tasks" @start="drag = true" @end="drag = false" item-key="id">
    <template #item="{ element }">
      <TodoTask :task="element"/>
    </template>
  </draggable>
</template>