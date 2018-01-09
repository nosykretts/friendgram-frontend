<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item v-show="!isLoggedIn" index="/signin">Sign In</el-menu-item>
    <el-menu-item v-show="!isLoggedIn" index="/signup">Sign Up</el-menu-item>
    <el-menu-item v-show="isLoggedIn" @click="doSignout" index="/signout">Sign Out</el-menu-item>
  </el-menu>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('auth')
export default {
  name: 'TopHeader',
  data() {
    return {}
  },
  methods: {
    doSignout() {
      this.$store.commit('auth/SIGNOUT')
      this.$store.commit('notify/info', 'Signout Success')
    },
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
}
</script>

<style>

</style>
