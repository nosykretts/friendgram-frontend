<template>
   <div>
      <el-upload
        class="avatar-uploader"
        action=""
        :auto-upload="false"
        :on-change="fileInputChanged"
        :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
  
      <el-input placeholder="Add caption..." v-model="caption" />
 
      <el-button type="primary" @click="handleSubmit" style="width:100%; margin-top: 20px;">Save</el-button>
   </div>
</template>

<script>
export default {
  name: 'PostCreateForm',
  data(){
    return {
      imageUrl : '',
      caption : '',
      file : null,
    }
  },
  methods: {
  fileInputChanged(file, fileList){
    console.log('fileinputchanged')
    this.imageUrl = URL.createObjectURL(file.raw);
    this.file = file
  },
  handleSubmit(){
    let caption = this.caption
    this.caption = ''
    this.$store.dispatch('post/createPost', {
      caption : caption,
      file : this.file.raw,
      tempImageUrl : this.imageUrl
    })
  }
 },
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
   .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
   .avatar {
    width: 100%;
    /* height: 178px; */
    display: block;
  }
  .el-upload{
    width: 100%;
    margin-bottom: 20px;
  }
</style>

