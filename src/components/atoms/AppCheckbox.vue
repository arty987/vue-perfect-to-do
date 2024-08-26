<script>
export default {
  name: "AppCheckbox",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <input
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
  />
</template>