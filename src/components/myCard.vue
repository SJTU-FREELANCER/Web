<template>
  <v-card id="card" title="title" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
<slot name="salary"></slot>
    <slot name="location"></slot>
    <slot name="cate"></slot>
    <Divider />
    <slot name="desc"></slot>
    <Divider />
    <slot name="experience"></slot>
    <slot name="education"></slot>

    <slot name="tags"></slot>
    <div slot="extra" v-show="isShow">
      <v-button type="primary">编辑</v-button>
      <v-button type="danger">删除</v-button>
    </div>
  </v-card>
</template>
<script>
  export default {
    data: function() {
      return {
        isShow:false,
        t:''
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow;
      },
    },
    created() {
      t=this.prop.recTitle
    },
    prop:{
    /*  Rec_Salary:{
        type: String,
        default: ''
      },
      Rec_Location:{
        type: String,
        default: ''
      },
      Rec_Title:{
        type: String,
        default: ''
      },
      Rec_Cate:{
        type: String,
        default: ''
      },
      Rec_Desc:{
        type: String,
        default: ''
      },
      Rec_Experience:{
        type: String,
        default: ''
      },
      Rec_Education:{
        type: String,
        default: ''
      },
      Tags:{
        type: String,
        default: ''
      },*/
      desInfo:{
        type: Object
      },
      key:{
        type:String
      },
      recTitle:{
        type: String,
      default: ''
      }
    }
  }
</script>
<style>
  #card{
    font-size: large;
  }
</style>
