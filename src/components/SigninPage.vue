<template>
  <el-row type="flex" justify="space-around" align="middle">
    <el-form label-position="left" status-icon label-width="150px">
      <el-form-item label="Email" prop="email">
        <el-input type="email" v-model="email" placeholder="Email"></el-input>
      </el-form-item>          
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signin">Sign In</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signin() {
      this.$store.dispatch('auth/signin', {
        email: this.email,
        password: this.password,
      }).then(_ => {
        this.$router.push({ name: 'home' })
      })
      .catch()
    },
    pushRegister() {
      this.$router.push({ name: 'registerPage' })
    },
  },
}
</script>

<style scoped>

</style>



