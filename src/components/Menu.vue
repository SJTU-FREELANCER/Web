<!--
接口：/get_jobs
参数：无
返回信息：List<Recruit_info>
-->


<template>
  <div id="app"><!--
<div id="tab-bar">
  <Icon type="md-happy"></Icon>
  <div class="tab-bar-item">首页</div>
  <div class="tab-bar-item">招聘</div>
  <div class="tab-bar-item">求职</div>
  <div class="tab-bar-item">个人中心</div>
</div>-->
    <v-affix>

      <div class="menu">
        <Dropdown class="img-item">
          <img src="../assets/img/deer.jpg" alt="can't load" width="100" height="100">
        </Dropdown>
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
            我要招聘
            <!--<Icon type="ios-arrow-down"></Icon>-->
          </a>

        </Dropdown>


        <Dropdown class="menu-item" @on-click="apply($event)">
          <a href="javascript:void(0)" @click="applyClick">
            我要求职
            <!--<Icon type="ios-arrow-down"></Icon>-->
          </a>
     <!--     <DropdownMenu slot="list">
            <DropdownItem name="resume"></DropdownItem>
          </DropdownMenu>-->
        </Dropdown>


        <Dropdown class="menu-item" @on-click="personalClick($event)">
          <a href="javascript:void(0)" @click="profileClick">
            个人中心
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="info">个人信息</DropdownItem>
            <DropdownItem name="resume">我的简历</DropdownItem>
            <DropdownItem name="exit">退出账号</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown class="menu-item">
          你好，{{ this.GLOBAL.user_Name}}
        </Dropdown>

      </div>
    </v-affix>

  </div>


</template>
<script>
  export default {
    name: "Menu",
    data() {
      return {}
    },
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    methods: {
      personalClick: function (name) {
        if (name == 'info') this.$router.replace('personalInfo')
        if (name == 'resume') this.$router.replace('resumeDisplay')
        if (name == 'exit') this.$router.replace('/login')

      },
      apply: function (name) {
        if (name == 'resume') this.$router.replace('resumeDisplay')
      },
      homeClick: function () {
        this.$router.replace('/user/' + this.userId + '/home')
      },
      recruitClick: function () {
        this.$router.replace('/user/' + this.userId + '/recruitInfo')
      },
      applyClick: function () {
        this.$router.replace('/user/' + this.userId + '/applyInfo')
      },
      profileClick: function () {
        this.$router.replace('/profile')
      }
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  .menu {

    display: flex;


  }

  .menu-item {
    font-size: large;
    text-align: center;
    flex: 1;
    height: 49px;
    margin-top: 50px;
  }

  .img-item {
    top: 0;
  }
</style>
