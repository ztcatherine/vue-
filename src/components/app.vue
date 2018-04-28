<template>
  <div id="continer">
    <div id="app-left">
      <!--<a href="#">About</a>
      <a href="#">Home</a>-->
      <router-link to="/About">About</router-link>
      <router-link to="/Home">Home</router-link>
    </div>
    <div id="app-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #continer{
    display: flex;
    margin: 100px 0 0 50px;
  }
  #app-left{
    width: 150px;
    height: 100px;
  }
  #app-left a{
    text-decoration: none;
    color: black;
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid;
    border-radius: 4px;
  }
  #app-right{
    width: 400px;
    height: 200px;
    margin-left: 20px;
    padding: 30px 0 10px 10px;
  }
</style>
