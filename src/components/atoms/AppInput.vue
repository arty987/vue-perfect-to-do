<script>
export default {
  name: "AppInput",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    addTask() {
      const inputValue = this.inputValue.trim();
      if (inputValue) {
        this.$store.dispatch("addTask", inputValue);
        this.inputValue = "";
      }
    },
    clearInputValue() {
      this.inputValue = "";
    }
  }
}
</script>

<template>
  <input
      type="text"
      placeholder="Title..."
      v-model="inputValue"
      @keyup.enter="addTask"
      @keyup.esc="clearInputValue"/>
</template>

<style scoped>

</style>