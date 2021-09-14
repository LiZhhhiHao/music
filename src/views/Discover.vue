<template>
  <div class="discover">
    <Search ></Search>
    <!-- <div class="wrap"></div> -->
    <Stitle>推荐歌单</Stitle>
    <ul class="sl">
      <Loading v-if="songlists.length == 0"></Loading>
      <Album v-for="sl in songlists" :key="sl.id" :item="{sl,num:1}"></Album>
    </ul>
    <Stitle>新碟上架</Stitle>
    <ul class="sl">
      <Loading v-if="albumlists.length == 0"></Loading>
      <Album v-for="al in albumlists" :key="al.id" :item="{al,num:2}"></Album>
    </ul>
  </div>
</template>
<script>
import Album from "../components/Album";
import Stitle from '../components/Stitle';
import Search from "../components/Search";
import Loading from "../components/Loading";
export default {
  data() {
    return {
      backgroundColor: "",
      show: true,
      songlists: [],
      albumlists:[],
      num:0
    };
  },
  name: "Discover",
  components: {
    Album,
    Stitle,
    Search,   
     Loading
  },
  methods: {},
  created() {
    // 插件调用
    this.axios.get("/personalized").then((data) => {
      this.songlists = data.data.result;
      // console.log(this.songlists);
    });
      fetch(`http://music.kele8.cn/album/newest`)
      .then((response) => response.json())
      .then((data) => {
          this.albumlists = data.albums
          // console.log(data.lrc.lyric);
          // console.log(this.albumlists);
      }).catch(err=>{
        console.log(err);
      });
  },
};
</script>
<style lang="less">
.discover {
  .wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  // height: 500px;
  padding-top: 50px;
  overflow: hidden;
  ul.sl {
    width: 100%;
    white-space: nowrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
