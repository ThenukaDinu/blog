<template>
  <div class="mt-5 pt-3">
    <CRow>
      <Post v-for="(post, index) in Posts" :key="index" :post="post" />
    </CRow>
  </div>
</template>

<script>
import blogHomeMixin from "@/assets/scripts/mixins/blogHome.mixin.js";
import Post from "@/components/blog_home/Post";
export default {
  name: "Home",
  mixins: [blogHomeMixin],
  components: {
    Post
  }
};
</script>

<style lang="scss">
</style>