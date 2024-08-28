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
    <div class="d-flex flex-row align-items-center">
      <AppCheckbox :checked="task.completed" @change="reverseCompleted(task)"/>
      <div :class="[
            'task-title',
            { 'completed': task.completed }
          ]">
        {{ task.title }}
      </div>
    </div>
    <AppButton @click="removeTask(task)" class="btn-close"/>
  </li>
</template>

<style scoped lang="scss">
.list-group-item {
  border-right: none;
  border-left: none;

  &:hover > .app-button {
    display: block;
  }
}

.app-button {
  display: none;
}

.task-title {
  width: 390px;
  margin-inline: 10px;
  word-break: break-all;

  &.completed {
    text-decoration: line-through;
    text-decoration-thickness: from-font;
    color: lightgrey;
  }
}
</style>