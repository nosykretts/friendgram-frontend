<template>
  <el-button v-if="!post.canDeletePost" type="text" class="follow-button" @click="handleToggleFollow">
    {{post.followedByMe ? 'Unfollow': 'Follow'}}
  </el-button >
</template>

<script>
export default {
  name: 'FollowButton',
  props: ['post'],
  methods: {
    handleToggleFollow() {
      this.$store.dispatch('post/toggleFollow', {
        userId: this.post.creator._id,
        followedByMe: this.post.followedByMe,
      })
    },
  },
}
</script>

<style scoped>

</style>
