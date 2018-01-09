<template>
  <div class="comment-item">
    <p><strong>{{comment.creator.username}}</strong> {{comment.text}}</p>
  </div>
</template>


<script>

export default {
  name: 'CommentItem',
  props: ['comment'],
}
</script>


<style>
/* .comment-item{
  margin-bottom: 5px;
} */
</style>
