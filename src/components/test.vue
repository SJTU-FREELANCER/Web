<template>
  <v-menu theme="dark" mode="horizontal" :data="horizontalMnueData"  @item-click="itemclick"></v-menu>
</template>
<script>
  export default {
    data:()=> ({
      horizontalMnueData: [{
        name: '首页',
        icon: 'mail',

      },{
        name: '招聘',
        icon: 'appstore',
      },{
        name: '求职',
        icon: 'setting',
        groups: [{
          groupName: "分组1",
          list: [{
            name: "选项1"
          },{
            name: "选项2"
          }]
        }, {
          groupName: "分组2",
          list: [{
            name: "选项3"
          },{
            name: "选项4"
          }]
        }]
      },{
        name: '个人中心',
        groups: [
          {
            list:[
              {
                name:"我的简历"
              },{
                name:"个人信息"
              },
              {
                name:"退出账号"
              }
            ]
          }
        ]
      }]
    })
  }
</script>
<style scoped>

</style>
