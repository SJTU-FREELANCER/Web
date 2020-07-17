<template>
    <div id="apply">
<!--向card中直接传入一个对象-->
     <myCard v-for="(item,index) in list" :key="index" :rec-Title="list[0].Rec_Title">
      <p slot="salary">salary:{{item.Rec_Salary}}</p>
       <p slot="location">location:{{item.Rec_Location}}</p>
       <p slot="cate">职位:{{item.Rec_Cate}}</p>
       <p slot="desc">{{item.Rec_Desc}}</p>
       <p slot="experience">经验：{{item.Rec_Experience}}</p>
       <p slot="education">教育：{{item.Rec_Education}}</p>
       <v-tag color="cyan" slot="tags">{{item.Tags}}</v-tag>
     </myCard>

    </div>
</template>

<script>
  import myCard from "../myCard";
  import axios from 'axios'
    export default {
        name: "ApplyInfo",
      data(){
         return {
           list:[
             {
               Rec_Salary:'3600-4500',
               Rec_Location:' 徐汇 ',
               Rec_Title:'公司保洁员/商场保洁员',
               Rec_Cate:'保洁',
               Rec_Desc:'工作时间：7:30-16:30\n' +
                 ' 工作内容：\n' +
                 ' 1.负责公司旗舰体验中心日常保洁工作，保持指定区域干净整洁；\n' +
                 ' 2.帮忙打扫咖啡吧区域卫生，协助收拾整理会议室等；\n' +
                 ' 3.合理使用和放置保洁用具；\n' +
                 ' 4.其他上级领导安排的保洁相关事宜。\n' +
                 ' 职位要求：\n' +
                 ' 1.年龄在45岁左右，商场保洁员经验2年以上；\n' +
                 ' 2.按照公司标准要求穿着服装；\n' +
                 ' 3.爱干净，勤快，有服务意识，无不良嗜好；\n' +
                 ' 4.普通话无明显口音。\n' +
                 ' 工作时间：7:30-16:30',
               Rec_Experience:'不限',
               Rec_Education:'不限',
               Tags:'  广告     五险一金    '
             },
             {
               Rec_Salary:'3600-4500',
               Rec_Location:' 徐汇 ',
               Rec_Title:'公司保洁员/商场保洁员',
               Rec_Cate:'保洁',
               Rec_Desc:'工作时间：7:30-16:30\n' +
                 ' 工作内容：\n' +
                 ' 1.负责公司旗舰体验中心日常保洁工作，保持指定区域干净整洁；\n' +
                 ' 2.帮忙打扫咖啡吧区域卫生，协助收拾整理会议室等；\n' +
                 ' 3.合理使用和放置保洁用具；\n' +
                 ' 4.其他上级领导安排的保洁相关事宜。\n' +
                 ' 职位要求：\n' +
                 ' 1.年龄在45岁左右，商场保洁员经验2年以上；\n' +
                 ' 2.按照公司标准要求穿着服装；\n' +
                 ' 3.爱干净，勤快，有服务意识，无不良嗜好；\n' +
                 ' 4.普通话无明显口音。\n' +
                 ' 工作时间：7:30-16:30',
               Rec_Experience:'不限',
               Rec_Education:'不限',
               Tags:'  广告     五险一金    '
             }
           ],
           Rec_ID:[]
         }
      },
      components:{
          myCard
      },
      computed:{
        userId(){
          return this.$route.params.userId
        }
      },
      created() {
          axios.get('/apis/get_jobs').then(
            res => {
              console.log(res)
            }
          ).catch(
            err => {
              console.log(err)
            }
          )
      }
      /*beforeCreate() {
          /!*请求数据之后存放在list中*!/
        list[0]={
          Rec_Salary:'3600-4500',
          Rec_Location:' 徐汇 ',
          Rec_Title:'公司保洁员/商场保洁员',
          Rec_Cate:'保洁',
          Rec_Desc:'工作时间：7:30-16:30\n' +
            ' 工作内容：\n' +
            ' 1.负责公司旗舰体验中心日常保洁工作，保持指定区域干净整洁；\n' +
            ' 2.帮忙打扫咖啡吧区域卫生，协助收拾整理会议室等；\n' +
            ' 3.合理使用和放置保洁用具；\n' +
            ' 4.其他上级领导安排的保洁相关事宜。\n' +
            ' 职位要求：\n' +
            ' 1.年龄在45岁左右，商场保洁员经验2年以上；\n' +
            ' 2.按照公司标准要求穿着服装；\n' +
            ' 3.爱干净，勤快，有服务意识，无不良嗜好；\n' +
            ' 4.普通话无明显口音。\n' +
            ' 工作时间：7:30-16:30',
          Rec_Experience:'不限',
          Rec_Education:'不限',
          Tags:'  广告     五险一金    '
        }
        list[1]={
          Rec_Salary:'3600-4500',
          Rec_Location:' 徐汇 ',
          Rec_Title:'公司保洁员/商场保洁员',
          Rec_Cate:'保洁',
          Rec_Desc:'工作时间：7:30-16:30\n' +
            ' 工作内容：\n' +
            ' 1.负责公司旗舰体验中心日常保洁工作，保持指定区域干净整洁；\n' +
            ' 2.帮忙打扫咖啡吧区域卫生，协助收拾整理会议室等；\n' +
            ' 3.合理使用和放置保洁用具；\n' +
            ' 4.其他上级领导安排的保洁相关事宜。\n' +
            ' 职位要求：\n' +
            ' 1.年龄在45岁左右，商场保洁员经验2年以上；\n' +
            ' 2.按照公司标准要求穿着服装；\n' +
            ' 3.爱干净，勤快，有服务意识，无不良嗜好；\n' +
            ' 4.普通话无明显口音。\n' +
            ' 工作时间：7:30-16:30',
          Rec_Experience:'不限',
          Rec_Education:'不限',
          Tags:'  广告     五险一金    '
        }
      }*/
    }
</script>

<style scoped>
#apply{
  margin-right: 200px;
  margin-left: 200px;

}
</style>
