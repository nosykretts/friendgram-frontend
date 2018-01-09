<template>
  <el-dialog
    title="Create Post"
    :visible.sync="modalVisible"
    width="30%"
    fullscreen
    :modal="false"
  >
  <post-create-form v-if="modalVisible"/>
  <span slot="footer" class="dialog-footer">
  </span>
</el-dialog>
</template>

<script>
import PostCreateForm from './PostCreateForm'

export default {
  name: 'PostModalForm',
  components: { PostCreateForm },
  method: {
  },
  computed: {
    // ...mapGetters(['modalVisible']),
    modalVisible: {
      get() {
        return this.$store.getters['post/modalVisible']
      },
      set() {
        this.$store.commit('post/hideModal')
      },
    },
  },
}
</script>


<style>
.el-dialog{
  width: 100% !important;
  height: 100% !important;
  margin-top: 0 !important;
  border-radius: 0 !important;
}
</style>
