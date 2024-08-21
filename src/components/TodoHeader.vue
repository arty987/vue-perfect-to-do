<script>
export default {
  name: 'TodoHeader',
  props: {
    placeholder: {
      type: String,
      default: 'Title...',
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    addTask() {
      if (this.inputValue.trim()) {
        this.$store.dispatch('addTask', this.inputValue);
        this.inputValue = '';
      }
    },
    clearInputValue() {
      this.inputValue = '';
    }
  }
}
</script>

<template>
  <li>
    <input
        type="checkbox"
        disabled
    />
    <input
        type="text"
        :placeholder="placeholder"
        v-model="inputValue"
        @keyup.enter="addTask"
        @keyup.esc="clearInputValue"
    />
  </li>
</template>

<style scoped>

</style>