<template>
  <div id="app">
    <TheHeader />
    <CContainer fluid class="px-4">
      <router-view :key="$route.path" />
    </CContainer>
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
