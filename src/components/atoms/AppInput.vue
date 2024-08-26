<script>
export default {
  name: "AppInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleEnter() {
      this.$emit("enter");
    },
    handleEsc() {
      this.$emit("esc");
    },
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<template>
  <input
      type="text"
      :placeholder="placeholder"
      maxlength="150"
      :value="modelValue"
      @input="handleInput"
      @keyup.enter="handleEnter"
      @keyup.esc="handleEsc"
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