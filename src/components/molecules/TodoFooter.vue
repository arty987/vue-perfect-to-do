<script>
import {mapActions, mapGetters} from "vuex";
import AppButton from "@/components/atoms/AppButton.vue";

export default {
  name: "TodoFooter",
  components: {
    AppButton
  },
  methods: {
    ...mapActions([
      "displayAll",
      "displayCompleted",
      "displayActive",
      "clearCompleted",
    ])
  },
  computed: {
    ...mapGetters([
      "tasks",
      "activeCount"
    ])
  }
}
</script>

<template>
  <li v-if="tasks.length" class="list-group-item">
    <span>{{ activeCount }} items left</span>
    <AppButton @click="displayAll">All</AppButton>
    <AppButton @click="displayActive">Active</AppButton>
    <AppButton @click="displayCompleted">Completed</AppButton>
    <AppButton @click="clearCompleted">Clear completed</AppButton>
  </li>
</template>

<style scoped>
.list-group-item {
  border-top: none;
}
</style>