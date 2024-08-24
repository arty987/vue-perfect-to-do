<script>
export default {
  name: "TodoHeader",
}
</script>

<template>
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h1 class="heading">T O D O</h1>
    <img class="logo" alt="logo" src="../../assets/icons/logo.svg"/>
  </div>
</template>

<style scoped lang="scss">
.heading {
  color: white;
  font-weight: 650;
}

.logo {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(38deg) brightness(101%) contrast(104%);
  width: 30px;
  height: 30px;
}
</style>