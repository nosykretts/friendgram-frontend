<template>
  <el-row type="flex" justify="space-around" align="middle">
    <el-form label-position="left" status-icon label-width="150px">
      <el-form-item label="Name" prop="name" >
        <el-input v-model="name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email" >
        <el-input type="email" v-model="email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item label="Username" prop="username">
        <el-input  v-model="username" placeholder="Username"></el-input>
      </el-form-item>     
      <el-form-item label="Password" prop="pass" >
        <el-input type="password" v-model="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Sign Up</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      username: null,
      email: null,
      password: null,
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('auth/signup', {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style scoped>

</style>



