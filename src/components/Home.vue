<template>
  <div>
    <!-- <big-search/> -->
    <el-row :gutter="20" type="flex" justify="center">
      
      <el-col :md="{span:12}"photo>
        <post-list/>
      </el-col >
      <el-col :md="{span:6}" class="hidden-sm-and-down">
        <h3>Sidebar</h3>
        <hr>
        <div style="width:100%; background:none; height:300px;  display:block"></div>
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

