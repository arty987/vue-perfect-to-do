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
      "activeCount"
    ])
  }
}
</script>

<template>
  <li>
    <span>{{ activeCount }} items left</span>
    <AppButton @click="displayAll">All</AppButton>
    <AppButton @click="displayActive">Active</AppButton>
    <AppButton @click="displayCompleted">Completed</AppButton>
    <AppButton @click="clearCompleted">Clear completed</AppButton>
  </li>
</template>

<style scoped>

</style>