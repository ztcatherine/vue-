<template>
  <div id="continer">
    <div id="header">请发表对Vue的评论</div>
    <div id="content">
      <add :addComment="addComment"></add>
      <list :comments="comments" :deleteComment="deleteComment"></list>
    </div>
  </div>
</template>

<script>
  import add from './add.vue'
  import list from './list.vue'
  export default {
    data(){
      return{
        comments:[
          {name:'Tom',content:'Vue还不错！'},
          {name:'Jack',content:'Vue挺好！'}
        ]
      }
    },

    methods:{
      addComment(comment){
        this.comments.unshift(comment)
      },
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
    components:{
      add,list
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 1000px;
  }
  #continer{
    width: 100%;
    height: 100%;
  }
  #header{
    height: 150px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    padding-left: 50px;
    font-size: 20px;
  }
  #content{
    width: 100%;
    display: flex;
  }

</style>
