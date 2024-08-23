<script>
import {mapActions, mapGetters} from "vuex";
import AppButton from "@/components/atoms/AppButton.vue";
import {filters} from "@/constants/constants";

export default {
  name: "TodoFooter",
  components: {
    AppButton
  },
  methods: {
    ...mapActions([
      "setFilter",
      "clearCompleted",
    ])
  },
  computed: {
    ...mapGetters([
      "tasks",
      "activeCount"
    ])
  },
  created() {
    this.filters = filters;
  }
}
</script>

<template>
  <li v-if="tasks.length" class="list-group-item">
    <span>{{ activeCount }} items left</span>
    <AppButton v-for="filter in filters"
               :key="filter"
               @click="setFilter(filter)">
      {{ filter }}
    </AppButton>
    <AppButton @click="clearCompleted">Clear completed</AppButton>
  </li>
</template>

<style scoped>
.list-group-item {
  border-top: none;
}
</style>