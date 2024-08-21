<script>
import {mapActions} from "vuex";

export default {
  name: "TodoItem",
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions([
      'removeTask',
      'reverseCompleted',
    ])
  }
}
</script>

<template>
  <li>
    <input
        type="checkbox"
        :checked="task.completed"
        @change="reverseCompleted(task)"
    />
    {{ task.title }}
    <button
        type="button"
        @click="removeTask(task)"
    >
      X
    </button>
  </li>
</template>

<style scoped>

</style>