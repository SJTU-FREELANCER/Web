<template>
  <div>
    <Button type="primary" @click="modal1 = true">招聘</Button>
    <Modal
      v-model="modal1"
      title="选择工作"
      @on-ok="ok"
      @on-cancel="cancel">
<RadioGroup v-model="choose">
  <Radio v-for="(item,index) in this.GLOBAL.myRecInfo"
  :key="index" :label="item.rec_ID.toString()" id="data-choose">{{item.rec_Title}}</Radio>
</RadioGroup>
    </Modal>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        modal1: false,
        choose:''
      }
    },
    methods: {
      ok () {
        this.$Message.info('rec_id='+this.choose+',user_id='+this.userid);
        let num=parseInt(this.choose)
        //招聘
        axios.get('/apis/add_employ_info',{
          params:{
            user_id:this.userid,
            rec_id:num
          }
        }).then(
          res => {
            console.log(res)
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    },
    props:['userid'],
    components:{

    }
  }
</script>
