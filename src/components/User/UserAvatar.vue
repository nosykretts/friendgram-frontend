<template>
  <div class="user-avatar">
    <img :src="'https://ui-avatars.com/api/?name='+user.name" alt="">
    <div class="username">
      <p>{{user.username}}</p>
    </div>
    <div>
      
    </div>
  </div>  
</template>

<script>
export default {
  name : 'UserAvatar',
  props : ['user']
}
</script>

<style scoped>
.user-avatar{
  display: flex;
  background: rgb(255, 255, 255);
  align-items: center;
  font-weight: bold;
  justify-content: flex-start;
}
.user-avatar > img{
  width: 50px;
  border-radius: 100%;
}
.user-avatar > .username {
  margin-left: 15px;
}
.user-avatar p {
  margin: 0;
}
</style>
