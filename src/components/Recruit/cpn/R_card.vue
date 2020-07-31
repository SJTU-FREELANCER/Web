<template>
  <v-card id="card" title=" " @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <slot name="name"></slot>
    <slot name="gender"></slot>
    <slot name="birth"></slot>
    <Divider />
    <slot name="experience"></slot>
    <slot name="education"></slot>
    <div slot="extra" v-show="isShow">
      <!--<v-button type="primary" @click="recruit">招聘</v-button>-->
      <choose :userid="this.userid"></choose>
    </div>
  </v-card>
</template>
<script>
  import axios from 'axios'
  import choose from "./choose";
  export default {
    data: function() {
      return {
        isShow:false
      }
    },
    components:{
      choose
    },
    methods: {
        changeShow(){
          this.isShow = !this.isShow;
        },
      recruit(){
        //需要去选择招聘信息

      }
    },
    created() {

    },
    props:{
      desInfo:{
        type: Object
      },
      key:{
        type:String
      },
      recTitle:{
        type: String,
        default: ''
      },
      userid:{
        type:Number
      }
    }
  }
</script>
<style>
  #card{
    font-size: large;
  }
</style>
