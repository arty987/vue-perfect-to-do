<script>
import AppMain from "@/components/organisms/AppMain.vue";
import AppHeader from "@/components/atoms/AppHeader.vue";

export default {
  name: "AppContent",
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>