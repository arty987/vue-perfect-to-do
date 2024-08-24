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
  emits: [
    "enter",
    "esc",
    "update:modelValue"
  ],
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
      class="app-input"
      :placeholder="placeholder"
      maxlength="150"
      :value="modelValue"
      @input="handleInput"
      @keyup.enter="handleEnter"
      @keyup.esc="handleEsc"
  />
</template>