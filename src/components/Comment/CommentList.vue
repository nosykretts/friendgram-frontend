<template>
  <div>
    <comment-item v-for="comment in post.comments" :key="comment._id" :comment="comment"/>
    <hr style="margin-top:5px; margin-top:5px'">
    
  </div>
</template>


<script>
import CommentItem from './CommentItem'

export default {
  name: 'CommentList',
  props: ['post'],
  components: { CommentItem },
}
</script>


<style>

</style>
