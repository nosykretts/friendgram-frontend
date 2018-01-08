<template>
  <div>
      <div v-if="!editing" class="caption-flex">
        <p><strong>{{post.creator.username}}</strong> {{caption}} <el-button @click="handleEditClick" type="text" v-if="post.canEditPost">Edit</el-button></p>
        <div class="edit-caption-button">
          
          <!-- <el-button @click="handleEditClick" type="text" icon="el-icon-edit"/> -->
        </div>
      </div>
      <div v-if="editing">
          <p style="margin:0;">
            <el-button type="text" @click="handleSaveClick">Save</el-button>  <el-button @click="handleCancelClick" type="text">Cancel</el-button>
          </p>
        <el-input
          class="caption-input"
          type="textarea"
          autosize
          v-model="caption"
          :autosize="{ minRows: 2, maxRows: 5}"
          placeholder="Update your caption..."
        ></el-input>
        <br>  
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'PostCaption',
  props: ['post'],
  data(){
    return {
      editing : false,
      caption : this.post.caption
    }
  },
  methods: {
    handleEditClick(){
      this.editing = true
    },
    handleSaveClick(){
      if(this.post.caption == this.caption){
        this.editing = false
        return
      }
      this.editing = false
      this.$store.dispatch('post/updateCaption', {
        postId: this.post._id,
        caption: this.caption
      })
    },
    handleCancelClick(){
      this.editing = false
    },
  }
}
</script>

<style>
.caption-flex{
  display: flex;
  /* background : red; */
  justify-content: space-between;
}
.caption-flex:hover .edit-caption-button{
  visibility: inherit;
}
.edit-caption-button{
  visibility: hidden;
}
.caption-input {
  margin-bottom: 10px;
}
.el-textarea__inner{
  border : none;
  padding-left : 0;
  padding-right: 0;
}
</style>