<script>
import AppCheckbox from "@/components/atoms/AppCheckbox.vue";
import AppInput from "@/components/atoms/AppInput.vue";

export default {
  name: "TodoHeader",
  components: {
    AppInput,
    AppCheckbox
  },
}
</script>

<template>
  <li class="list-group-item d-flex justify-content-start align-items-center">
    <AppCheckbox :disabled="true"/>
    <AppInput/>
  </li>
</template>

<style scoped>
.list-group-item {
  margin-bottom: 20px;
  border-bottom-right-radius: var(--bs-border-radius);
  border-bottom-left-radius: var(--bs-border-radius);
}
</style>