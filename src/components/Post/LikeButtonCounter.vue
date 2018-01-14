<template>
  <div>
    <span>{{post.likes.length}} Likes</span>  
    <el-button type="text" v-if="post.canLikePost" @click="handleToggleLike">{{this.post.likedByMe ? 'Unlike' : 'Like'}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'LikeButtonCounter',
  props: ['post'],
  methods: {
    handleToggleLike() {
      this.$store.dispatch('post/toggleLike', {
        postId: this.post._id,
        likedByMe: this.post.likedByMe,
      })
    },
  },
}
</script>

<style>

</style>
