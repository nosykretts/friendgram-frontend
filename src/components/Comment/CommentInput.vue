<template>
  <el-input placeholder="Add a comment..." class="comment-input" @keyup.enter.native="submitComment" v-model="commentText"></el-input>
</template>


<script>
export default {
  name: 'CommentInput',
  props: ['postId'],
  data() {
    return {
      commentText: '',
    }
  },
  methods: {
    submitComment(e) {
      const commentText = this.commentText
      e.target.value = ''
      this.$store.dispatch('post/createComment', {
        postId: this.postId,
        text: commentText,
      })
    },
  },
}
</script>


<style>
.comment-input > .el-input__inner{
  border:none !important;
  padding: 0;
}
</style>
