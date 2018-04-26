<template>
  <div id="right">
    <h3>评论回复:</h3>
    <h2 v-show="comments.length==0">暂无评论，点击左侧添加评论！</h2>
    <ul id="group">
      <item v-for="(comment,index) in comments" :comment="comment" :key="index" :deleteComment="deleteComment" :index="index"></item>
    </ul>
  </div>
</template>

<script>
  import item from './item.vue'
  export default {
    //声明接收属性
    props:['comments','deleteComment'],

    components:{
      item
    }
  }
</script>

<style>
  #right{
    width: 60%;
    padding: 10px 100px 0 10px;
  }
  h3{
    width: 100%;
  }
  #group{
    width: 100%;
    margin-top: 5px;
  }
</style>
