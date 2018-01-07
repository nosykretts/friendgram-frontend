<template>
  <div id="app">
    <el-container>
      <el-header>
        <top-header></top-header>
      </el-header>
      <el-container>
      <bottom-nav/>
      <el-main style="min-height: 100vh;">
        <el-row :gutter="0">
          <el-col :xs="{span:24}" :sm="{span:24}" :md="{span: 24}">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      </el-container>
      <el-footer>
        <p style="text-align:center;">Build with Love @hacktiv8</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions, mapMutations, mapState } = createNamespacedHelpers ('notify')
import { Message } from 'element-ui'
import TopHeader from '@/components/TopHeader'
import BottomNav from '@/components/BottomNav'

export default {
  name: 'app',
  components: {
    TopHeader,
    BottomNav
  },  
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['notify']),
  },
  methods: {
    showMessage() {
      Message({ ...this.notify})
    },
  },
  watch: {
    notify: {
      deep: true,
      handler : function() {
        this.showMessage()
      }
    }
  },

}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background: #f7f7f7;
  margin-bottom: 20px;
  /* font-family: 'Open Sans', sans-serif; */
}

.el-header{
  padding: 0;
}
</style>



