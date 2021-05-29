<template>
  <div id="app">
    <TheHeader />
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: "BlogApp",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/scss/blogApp";
</style>
