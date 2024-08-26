<script>
import AppCheckbox from "@/components/atoms/AppCheckbox.vue";
import AppInput from "@/components/atoms/AppInput.vue";

export default {
  name: "TodoHeader",
  components: {
    AppInput,
    AppCheckbox
  },
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
    },
  }
}
</script>

<template>
  <li class="list-group-item d-flex justify-content-start align-items-center">
    <AppCheckbox :disabled="true"/>
    <AppInput placeholder="Please type your task here..."
              v-model="inputValue"
              @enter="addTask"
              @esc="clearInputValue"/>
  </li>
</template>

<style scoped>
.list-group-item {
  margin-bottom: 20px;
  border-bottom-right-radius: var(--bs-border-radius);
  border-bottom-left-radius: var(--bs-border-radius);
}
</style>