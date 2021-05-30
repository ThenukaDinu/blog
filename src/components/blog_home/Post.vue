<template>
  <CCol md="3">
    <CCard bodyWrapper textColor="red">
      <CCardHeader
        align="center"
        class="h4"
      >{{ `${post.postTitle.substring(0,50)}${post.postTitle.length > 50 && '...'}` }}</CCardHeader>
      <CCardBody>
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
  border: 1px solid gray;
  &:hover .card-header {
    opacity: 0.93;
  }
  &:hover .card-footer {
    opacity: 0.93;
  }
  &:hover {
    opacity: 0.93;
    border: 0.5px solid #fff;
  }
}

.card-footer:hover {
  cursor: pointer;
}
</style>