<script>
import {mapActions} from "vuex";
import AppCheckbox from "@/components/atoms/AppCheckbox.vue";
import AppButton from "@/components/atoms/AppButton.vue";

export default {
  name: "TodoTask",
  components: {
    AppButton,
    AppCheckbox
  },
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions([
      "removeTask",
      "reverseCompleted",
    ])
  }
}
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <AppCheckbox :checked="task.completed" @change="reverseCompleted(task)"/>
    <div class="task-title">{{ task.title }}</div>
    <AppButton @click="removeTask(task)">X</AppButton>
  </li>
</template>

<style scoped>
.list-group-item:first-child {
  border-top-right-radius: var(--bs-border-radius);
  border-top-left-radius: var(--bs-border-radius);
}

.task-title {
  width: 100%;
  margin-inline: 10px;
  word-break: break-all;
}
</style>