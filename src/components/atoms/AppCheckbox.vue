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
      class="app-checkbox"
      :disabled="disabled"
      :checked="checked"
  />
</template>

<style scoped lang="scss">
.app-checkbox {
  appearance: none;
  width: 25px;
  height: 25px;
  -webkit-mask: url('../../assets/icons/checkbox-blank-circle.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask: url('../../assets/icons/checkbox-blank-circle.svg') no-repeat center;
  mask-size: contain;
  background: #dee2e6;

  &:checked {
    background: linear-gradient(120deg, rgba(38, 121, 180, 0.65), rgba(128, 43, 193, 0.64));
    -webkit-mask: url('../../assets/icons/checkbox-checked-circle.svg') no-repeat center;
    -webkit-mask-size: contain;
    mask: url('../../assets/icons/checkbox-checked-circle.svg') no-repeat center;
    mask-size: contain;
  }

  &:hover {
    cursor: pointer;

    &:not([disabled]) {
      background: linear-gradient(120deg, rgba(38, 121, 180, 0.65), rgba(128, 43, 193, 0.64));
    }
  }
}
</style>