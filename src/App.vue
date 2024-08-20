<template>
  <AppHeader/>
  <AppMain/>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";

export default {
  name: 'App',
  components: {
    AppMain,
    AppHeader
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
