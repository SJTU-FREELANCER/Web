<template>
  <div id="app"><!--
<div id="tab-bar">
  <Icon type="md-happy"></Icon>
  <div class="tab-bar-item">首页</div>
  <div class="tab-bar-item">招聘</div>
  <div class="tab-bar-item">求职</div>
  <div class="tab-bar-item">个人中心</div>
</div>-->
    <div class="menu">
      <Dropdown class="menu-item">
        <a href="javascript:void(0)" @click="homeClick">
          首页
        </a>
      <!--  <DropdownMenu slot="list">
          <DropdownItem></DropdownItem>
        </DropdownMenu>-->
      </Dropdown>


      <Dropdown class="menu-item">
        <a href="javascript:void(0)" @click="recruitClick">
          招聘
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem></DropdownItem>
        </DropdownMenu>
      </Dropdown>


      <Dropdown class="menu-item" @on-click="apply($event)">
        <a href="javascript:void(0)" @click="applyClick">
          求职
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="resume"></DropdownItem>
        </DropdownMenu>
      </Dropdown>


      <Dropdown class="menu-item" @on-click="personalClick($event)">
        <a href="javascript:void(0)" @click="profileClick">
          个人中心
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem  name="info">个人信息</DropdownItem>
          <DropdownItem name="resume">我的简历</DropdownItem>
          <DropdownItem name="exit">退出账号</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Avatar icon="ios-person" />你好，
    </div>

  </div>




</template>
<script>
export default {
  name:"Menu",
  methods:{
    personalClick:function (name) {
      if(name=='info') this.$router.replace('personalInfo')
      if(name=='resume') this.$router.replace('resumeDisplay')

    },
    apply:function(name){
      if(name=='resume')  this.$router.replace('resumeDisplay')
    },
    homeClick:function(){
      this.$router.replace('/home')
    },
    recruitClick:function(){
      this.$router.replace('/recruit')
    },
    applyClick:function () {
        this.$router.replace('/apply')
    },
    profileClick:function () {
       this.$router.replace('/profile')
    }
  }
}

</script>
<style>
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .menu {

    display: flex;


  }
  .menu-item{
    font-size: large;
    text-align: center;
    flex: 1;
    height: 49px;
  }

</style>
