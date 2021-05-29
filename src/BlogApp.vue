<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "BlogApp",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/scss/blogApp";
</style>
