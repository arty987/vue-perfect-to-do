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
      placeholder="Please type your task here..."
      v-model="inputValue"
      maxlength="150"
      @keyup.enter="addTask"
      @keyup.esc="clearInputValue"
  />
</template>

<style scoped>
input {
  width: 100%;
  margin-left: 10px;
  outline: none;
  border: none;
}
</style>