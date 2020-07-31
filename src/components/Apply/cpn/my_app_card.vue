<!--
展示我的求职申请信息的卡片
-->
<template>
  <v-card id="card"  @mouseleave.native="changeShow"
          @mouseenter.native="changeShow"
  :title="this.rtitle">
    <slot name="salary"></slot>
    <slot name="location"></slot>
    <slot name="cate"></slot>
    <Divider/>
    <slot name="desc"></slot>
    <Divider/>
    <slot name="experience"></slot>
    <slot name="education"></slot>

    <div slot="extra" v-show="isShow">
    <!--  <v-button type="primary" @click.native="change">修改</v-button>-->
      <v-button type="danger" @click.native="delete_rec">删除</v-button>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'

    export default {
      name: "my_app_card",
      inject: ['reload'],
      data: function () {
        return {
          isShow: false
        }
      },
      methods: {
        changeShow() {
          this.isShow = !this.isShow;
        },
        delete_rec(){
          //删除这一条求职信息
          axios.get('/apis/delete_apply_info',{
            params:{
              user_id:this.GLOBAL.user_ID,
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

          //重新加载该组件
          this.reload()

        }
      },
      created() {

      },
      props:['key','rtitle','rec_id'],
    }
</script>

<style scoped>
#card{
  font-size: small;
}
</style>
