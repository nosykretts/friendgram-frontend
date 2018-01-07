<template>
  <div v-if="!modalVisible && isLoggedIn" class="bottom-nav">
    <el-button type="text" icon="el-icon-circle-plus-outline" size="small" @click="showModal"></el-button>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const { mapGetters, mapActions,  mapMutations } = createNamespacedHelpers('post')

export default {
  name:'bottomNav',
  mounted(){
    
  },
  methods: {
    ...mapMutations(['showModal'])
  },
  computed: {
    ...mapGetters(['modalVisible']),
    isLoggedIn(){
      return this.$store.getters['auth/isLoggedIn']
    }
  }
}
</script>

<style>
.bottom-nav{
  width: 100%;
  /* height: 60px; */
  display: flex;
  bottom: 0;
  position: fixed;
  background: rgb(255, 255, 255);
  z-index: 999999;
  border-top: solid 1px #e6e6e6;
  justify-content: center;
}

.bottom-nav i {
  font-size: 30px;
}
</style>
