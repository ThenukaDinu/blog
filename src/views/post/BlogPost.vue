<template>
  <div>
    <h2>Post Title</h2>
    <h4>PostId {{ postId }}</h4>
    <p>article</p>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    postId: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>