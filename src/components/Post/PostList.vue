<template>
  <div>
    <post-modal-form/>
    <post-card-item v-for="post in posts" :key="post._id" :post="post"/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import PostCardItem from './PostCardItem';
import PostModalForm from './PostModalForm'

const { mapGetters, mapActions } = createNamespacedHelpers('post')

export default {
  name: 'PostList',
  mounted() {
    this.getList()
  },
  components: {
    PostCardItem,
    PostModalForm,
  },
  methods: {
    ...mapActions(['getList']),
  },
  computed: {
    ...mapGetters(['posts']),
  },
}
</script>

<style>

</style>
