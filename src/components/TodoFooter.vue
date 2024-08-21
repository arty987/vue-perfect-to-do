<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TodoFooter",
  methods: {
    ...mapActions([
      'displayAll',
      'displayCompleted',
      'displayActive',
      'clearCompleted',
    ])
  },
  computed: {
    ...mapGetters([
      'activeCount'
    ])
  }
}

</script>

<template>
  <li>
    <span>{{ activeCount }} items left</span>
    <button
        type="button"
        @click="displayAll">
      All
    </button>
    <button
        type="button"
        @click="displayActive">
      Active
    </button>
    <button
        type="button"
        @click="displayCompleted">
      Completed
    </button>
    <button
        type="button"
        @click="clearCompleted">
      Clear completed
    </button>
  </li>
</template>

<style scoped>

</style>