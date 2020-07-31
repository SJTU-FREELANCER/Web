<!--
删除招聘请求
​ 接口：/delete_employ_info √
​ 参数：Integer user_id Integer rec_id
​ 返回值：void
-->
<template>
  <v-card id="card" title=" " @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <!--显示状态-->
    <Tag color="orange" v-if="accepted==0">审核中</Tag>
    <Tag color="green" v-if="accepted==1">同意</Tag>
    <Tag color="red" v-if="accepted==2">拒绝</Tag>

    <slot name="name"></slot>
    <slot name="gender"></slot>
    <slot name="birth"></slot>
    <Divider />
    <slot name="experience"></slot>
    <slot name="education"></slot>
    <div slot="extra" v-show="isShow">
      <v-button type="danger" @click="delete_people">删除</v-button>
    </div>
  </v-card>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "employee_card",
      inject: ['reload'],
      data: function() {
        return {
          isShow:false
        }
      },
      methods: {
        changeShow() {
          this.isShow = !this.isShow;
        },
        delete_people(){
          axios.get('/apis/delete_employ_info',{
            params:{
              user_id:this.userid,
              rec_id:this.rec_id
            }
          }).then(
            res => {
              console.log(res);

            }
          ).catch(
            err => {
              console.log(err);
            }
          )
          //???用不了？
          this.reload()
        }
      },
      props:['userid','rec_id','accepted']
    }
</script>

<style scoped>

</style>
