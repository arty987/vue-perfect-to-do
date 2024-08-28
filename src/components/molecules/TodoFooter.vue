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
    ]),
    ...mapGetters({
      currentFilter: 'filter'
    })
  },
  created() {
    this.filters = filters;
  }
}
</script>

<template>
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <span>{{ activeCount }} items left</span>
    <div>
      <AppButton v-for="filter in filters"
                 :key="filter"
                 @click="setFilter(filter)"
                 :class="{ active: filter === currentFilter }">
        {{ filter }}
      </AppButton>
    </div>
    <AppButton @click="clearCompleted">Clear completed</AppButton>
  </li>
</template>

<style scoped lang="scss">
.list-group-item {
  font-size: 13px;
  color: grey;
}

.app-button {
  border: none;
  background: none;
  color: inherit;

  &:hover {
    color: black;
  }
}

.active {
  color: blue;
}
</style>