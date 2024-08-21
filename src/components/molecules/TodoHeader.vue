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
  <li>
    <AppCheckbox :disabled="true"/>
    <AppInput/>
  </li>
</template>

<style scoped>

</style>