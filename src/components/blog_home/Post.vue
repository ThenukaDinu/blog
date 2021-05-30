<template>
  <CCol md="3">
    <CCard bodyWrapper textColor="red">
      <CCardHeader
        align="center"
        class="h4"
      >{{ `${post.postTitle.substring(0,50)}${post.postTitle.length > 50 && '...'}` }}</CCardHeader>
      <CCardBody>
        <div class="pb-3">
          <CImg :src="`https://picsum.photos/1024/480/?image=${post.postId+11}`"  fluid/>
        </div>
        <div>{{ post.postContents[0].content.substring(0,150) }}</div>
      </CCardBody>
      <CCardFooter
        align="right"
        class="h5"
        @click="fullPost(post.postId)"
      >click hear to read more...</CCardFooter>
    </CCard>
  </CCol>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    fullPost(postId) {
      console.log(postId);
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  border: 1px solid rgb(187, 187, 187);
  &:hover .card-header {
    opacity: 0.93;
  }
  &:hover .card-footer {
    opacity: 0.93;
  }
  &:hover {
    opacity: 0.93;
    border-color: #000;
  }
}

.card-footer:hover {
  cursor: pointer;
}
.post-image {
}
</style>