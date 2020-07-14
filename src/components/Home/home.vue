<template>
  <div id="home">
    <Input id="search" search enter-button placeholder="Enter something..." />

    <v-card title="3600-4500  徐汇   公司保洁员/商场保洁员 保洁   工作时间：7:30-16:30" @mouseleave.native="changeShow" @mouseenter.native="changeShow">

      <p>工作内容：</p>
      <p>1.负责公司旗舰体验中心日常保洁工作，保持指定区域干净整洁；
        2.帮忙打扫咖啡吧区域卫生，协助收拾整理会议室等；
        3.合理使用和放置保洁用具；
        4.其他上级领导安排的保洁相关事宜。</p>
      <p>职位要求：</p>
      <p>1.年龄在45岁左右，商场保洁员经验2年以上；
        2.按照公司标准要求穿着服装；
        3.爱干净，勤快，有服务意识，无不良嗜好；
        4.普通话无明显口音。</p>
      <p>工作时间：7:30-16:30</p>
      <v-tag color="cyan">广告</v-tag>
      <v-tag color="orange">五险一金</v-tag>

      <div slot="extra" >
        <v-button type="primary">申请</v-button>
        <v-button type="Info">详情</v-button>
      </div>
    </v-card>

    <v-card title="Card title" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <div slot="extra" >
        <v-button type="primary">申请</v-button>
        <v-button type="Info">详情</v-button>
      </div>
    </v-card>
    <v-pagination id="page" show-quick-jumper :total="500"></v-pagination>
  </div>

</template>

<script>
  export default {
    data: function() {
      return {
        isShow:false
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow;
      },
    }
  }
</script>

<style scoped>
#home{
  margin-right: 200px;
  margin-left: 200px;

}
  #search{
    margin-bottom: 50px;
  }
  #page{
    margin-top: 50px;
  }
</style>
