<template>
  <li class="list-group">
    <div class="del">
      <a href="#" @click="remove">删除</a>
    </div>
    <p class="user"><span>{{comment.name}}</span><span>说：</span></p>
    <p class="centens">{{comment.content}}</p>
  </li>
</template>

<script>
  export default {
    props:['comment','deleteComment','index'],

    methods:{
      remove(){
        const {comment,deleteComment,index} = this
        if(confirm(`确定删除${comment.name}的评论吗？`)){
          deleteComment(index)
        }
      }
    }
  }
</script>

<style>
  #group .list-group{
    list-style: none;
    border:1px solid gainsboro;
    padding: 10px;
  }
  .del{
    width: 34px;
    float: right;
    border: 1px solid;
  }
  .del a{
    text-decoration: none;
  }
  .user{
    font-size: 18px;
  }
  .centens{
    font-size: 14px;
    margin: 10px 0 10px 30px ;
  }
</style>
