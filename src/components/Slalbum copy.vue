<template>
  <div class="sldsongList">
    <img :src="item.coverImgUrl" v-if="item.coverImgUrl !=undefined "/>
    <img :src="item.blurPicUrl" v-if="item.blurPicUrl !=undefined "/>
    <span class="playcount" v-if="item.playCount !=undefined ">{{ item.playCount | formatNum }}</span>
    <div class="playtitle">
      <span >{{ item.name }}</span>
      <p class="creator" >
        <img :src="creator.avatarUrl"  v-if="creator.avatarUrl !=undefined "/>
        <span v-if="creator.nickname !=undefined " class="slnickname">{{creator.nickname}}</span>
        <span v-if="item.artists !=undefined">
          <span v-for="ars in item.artists" :key="ars.id" > {{ ars.name}}</span>
        </span>
      </p>
      <p class="descr"><span>{{item.description}}</span></p>
    </div>
  </div>
</template>
<style lang="less">
.sldsongList {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
  img {
    width: 36%;
    display: inline-block;
    border-radius: 10px;
  }
  .playcount {
    padding: 3px;
    border-radius: 10px;
    background-color: rgba(100, 100, 100, 0.6);
    color: white;
    position: absolute;
    font-size: 14px;
    // left: 80px;
    right: 62%;
    top: 2px;
  }
  .playtitle {
    padding-left: 16px;
    font-size: 18px;
    color: white;
    .creator{
      margin-top: 10px;
      height: 30px;
      font-size: 13.5px;
      color: #ccc;
      >span.slnickname{
        width: 80%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
        vertical-align: bottom;
      }
    }
    .descr{
      // width: 100%;
      margin-top: 10px;
      width: 190px;
      span{
        display: inline-block;
      width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        white-space: nowrap;
      }
      position: relative;
      &::after{
        display: block;
        font-size: 18px;
        // height: 30px;
        content: ">";
        position: absolute;
        right: 0;
        top:0;
      }
    }
    >span{
      display: inline-block;
      width: 200px;
    }
  }
}
</style>
<script>
export default {
  name: "Slalbum",
  props: ["item","creator"],
  data() {
    return {
      // avatarUrl:null,
      // nickname:null,
    }
  },
  created() {
    // this.nickname = item.creator.nickname ;
  },
  watch: {
    // item(newVal){
    //   this.item = newVal
    //   // console.log(this.item);
    //   this.avatarUrl = this.item.creator.avatarUrl;
    //   this.nickname = this.item.creator.nickname;
    // }
  },
  filters: {
    formatNum(val) {
      if (val > 100000000) {
        return (val / 1000000).toFixed(2) + "亿";
      } else {
        return (val / 10000).toFixed(2) + "万";
      }
    },
  },
  methods: {},
};
</script>

