<template>
  <div>
    <ul class="massage">
      <li v-for="m in messages">
        <router-link :to="`/Home/message/detail/${m.id}`">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        messages:[]
      }
    },
    mounted(){
      setTimeout(()=>{
        this.messages = [
          {id:1,title:'message01'},
          {id:3,title:'message03'},
          {id:5,title:'message05'}
        ]
      },1500)
    }
  }
</script>

<style>
  .massage{
    padding-left: 28px;
  }
</style>
