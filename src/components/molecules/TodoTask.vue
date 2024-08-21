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
  <li>
    <AppCheckbox :checked="task.completed" @change="reverseCompleted(task)"/>
    <div>{{ task.title }}</div>
    <AppButton @click="removeTask(task)">X</AppButton>
  </li>
</template>

<style scoped>

</style>