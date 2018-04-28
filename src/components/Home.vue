<template>
  <div>
    <h2>Home组件</h2>
    <div id="title">
      <div class="titleN"><router-link to="/Home/news">News</router-link></div>
      <div class="titleN"><router-link to="/Home/message">Message</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #title{
    height: 30px;
  }
  .titleN{
    float: left;
    height: 30px;
    width: 80px;
    margin-right: 30px;
  }
  .titleN a{
    text-decoration: none;
  }
</style>
