<template>
  <div>
    <h2>Post Title</h2>
    <h4>PostId {{ $route.params.postId }}</h4>
    <p>article</p>
  </div>
</template>

<script>
name: 'BlogPost'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>