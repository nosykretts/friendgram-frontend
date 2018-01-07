<template>
  <div>
    <!-- <big-search/> -->
    <el-row :gutter="20">
      <el-col :span="11" :offset="3">
        <post-list/>
      </el-col >
      <el-col :span="6">
        <h1>Sidebar</h1>
        <div style="width:100%; height:300px; background:gold; display:block"></div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import PostList from '@/components/Post/PostList'
// import BigSearch from '@/components/BigSearch'
export default {
  name: 'Home',
  components: { PostList },
  data() {
    return {}
  },
}
</script>

