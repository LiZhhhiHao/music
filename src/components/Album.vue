<template>
  <li class="songList">
    <a href="javascript:void(0)" @click = "goto(item.num)">
      <!-- {{item}} -->
       <img  v-if="item.sl != undefined" :src="item.sl.picUrl" /> 
       <img  v-if="item.sl != undefined" :src="item.sl.coverImgUrl" /> 
       <img  v-if="item.al != undefined" :src="item.al.picUrl" /> 
      <span class="playcount" v-if="item.sl !=undefined">{{ item.sl.playCount | formatNum }}</span>
      <span class="playtitle"  v-if="item.sl != undefined">{{ item.sl.name }}</span> 
      <span class="playtitle" v-if="item.al != undefined">{{ item.al.name }}</span> 
    </a>
  </li>
</template>
<style lang="less">
.songList {
  display: inline-block;
  position: relative;
  width: 130px;
  margin: 0 10px;
  img {
    display: block;
    border-radius: 10px;
  }
  a{
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #666;
    outline: none;
    text-decoration: none;
  }
  .playcount {
    padding: 3px;
    border-radius: 10px;
    background-color: rgba(100, 100, 100, 0.6);
    color: white;
    position: absolute;
    font-size: 14px;
    right: 2px;
    top: 2px;
  }
  .playtitle {
    font-size: 13px;
    width: 100%;
    height: 10vw;
    margin-top: 1vw;
    display: block;
    white-space: normal;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
<script>
export default {
  name: "Album",
  props: ["item"],
  created() {
    // console.log(this.item);
  },
  components:{
  },
  filters: {
    formatNum(val) {
      if(val > 100000000){
        return (val / 1000000).toFixed(2)+"亿";
      }else{
        return (val / 10000).toFixed(2)+"万";
      }
    },
  },
  methods: {
    goto(val){
      // console.log(this.item.sl.id);
      if(val ==1){
        this.$router.push({
          path:`/songlistdetail/${this.item.sl.id}`,
          // params:{id:this.item.sl.id},
        })
      }else if(val == 2){
        console.log(val);
         this.$router.push({
          path:`/albumdetail/${this.item.al.id}`,
          // params:{id:this.item.sl.id},
        })
      }
    }
  },
};
</script>

