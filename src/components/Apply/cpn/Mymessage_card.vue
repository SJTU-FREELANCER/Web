
<!--
修改招聘状态：
​ 接口：/update_employ_info √
​ 参数：Integer user_id Integer rec_id Integer accepted
​ 返回值：void
​ 备注：一般在被招聘者同意/拒绝招聘申请时进行修改


accepted默认为0（未审核）
​ accepted的其他状态： 1：录用 2：未录用 (3 取消申请？？)
-->
<template>
    <div>
      <v-card id="card" :title="this.rtitle" @mouseleave.native="changeShow" @mouseenter.native="changeShow">

        <!--显示状态-->
        <Tag color="orange" v-if="accepted==0">未审核</Tag>
        <Tag color="green" v-if="accepted==1">已录用</Tag>
        <Tag color="red" v-if="accepted==2">未录用</Tag>

        <slot name="salary"></slot>
        <slot name="location"></slot>
        <slot name="cate"></slot>
        <Divider/>
        <slot name="desc"></slot>
        <Divider/>
        <slot name="experience"></slot>
        <slot name="education"></slot>


        <div slot="extra" v-show="isShow">
          <v-button type="primary" @click="yes" :disabled="disabled">同意</v-button>
           <v-button type="danger" @click="no">拒绝</v-button>
        </div>
      </v-card>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
      inject: ['reload'],
        name: "Mymessage_card",
      data: function () {
        return {
          isShow: false,
          disabled:false
        }
      },
      methods: {
        changeShow() {
          this.isShow = !this.isShow;
        },
        yes(){
          //同意该招聘邀请
          axios.get('/apis/update_employ_info',{
            params:{
              user_id:this.GLOBAL.user_ID,
            rec_id:this.rec_id,
            accepted:1
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
          this.reload()
          /*this.disabled=true*/

        },
        no(){
          //拒绝该招聘邀请
          axios.get('/apis/update_employ_info',{
            params:{
              user_id:this.GLOBAL.user_ID,
              rec_id:this.rec_id,
              accepted:2
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
          this.reload()
        }
      },
      props:['key','rtitle','rec_id','accepted']
    }
</script>

<style scoped>

</style>
