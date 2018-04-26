<template>
  <div id="left">
    用户名 <br>
    <input type="text" placeholder="用户名" v-model="name"><br>
    评论内容 <br>
    <input type="text" placeholder="评论内容" id="msg" v-model="content">
    <button @click="submit">提交</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        name:'',
        content:''
      }
    },
    props:{
      addComment:{
        type:Function,
        required:true
      }
    },
    methods:{
      submit(){
        const name = this.name.trim()
        const content = this.content.trim()
        //根据输入的数据封装成comment对象
          const comment = {name,content}
        //添加到comments
          this.addComment(comment)
        //清除输入
        this.name=''
        this.content=''

      }
    }
  }
</script>

<style>
  #left {
    width: 40%;
    height: 200px;
    padding: 10px 20px 0 50px;
  }
  input{
    width: 100%;
  }
  #msg{
    height: 100px;
  }
</style>
