<template>
  <el-card :body-style="{ padding: '0px' }">
    <div slot="header" class="post-card-header">
      <user-avatar :user="post.creator"/>
      <div class="card-header-right">
        <el-button v-if="post.canDeletePost" @click="handleDelete" class="delete-post-button" type="text" icon="el-icon-delete" size="small"/>
      </div>  
    </div>
    <img :src="post.photoUrl" class="image">
    <div style="padding: 14px;">
      <post-caption :post="post"/>
      <comment-list :post="post"/>
      <comment-input :postId="post._id"/>
    </div>
  </el-card>
</template>

<script>
import CommentList from '@/components/Comment/CommentList'
import CommentInput from '@/components/Comment/CommentInput'
import PostCaption from '@/components/Post/PostCaption'
import UserAvatar from '@/components/User/UserAvatar'

export default {
  name: 'PostCardItem',
  props: ['post'],
  components: {
    CommentList,
    PostCaption,
    CommentInput,
    UserAvatar,
  },
  methods: {
    handleDelete() {
      this.$store.dispatch('post/deletePost', {
        // eslint-disable-next-line no-underscore-dangle
        postId: this.post._id,
      })
    },
  },
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.post-card-header{
  display: flex;
  justify-content: space-between;
}

.el-card {
  box-shadow: none;
  border: 1px solid #e6e6e6;
  margin-bottom: 60px;
}
.card-header-right{
  display: flex;

  background: rgb(255, 255, 255);
}

.delete-post-button{
  padding: 3px 0;
}
.delete-post-button > i {
  font-size: 30px !important;
}
</style>
