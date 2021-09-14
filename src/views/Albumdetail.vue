<template>
  <div class="album">
    <div class="toptitile" :style="{ backgroundImage }"></div>
    <Backbar></Backbar>
    <Loading v-if="aldata.length == 0"></Loading>
    <Slalbum
      v-if="aldata.length != 0"
      :item="aldata"
      :creator="creator"
    ></Slalbum>
    <Sltrack :item="tracks"> </Sltrack>
    <!-- <div class="getmore" v-show="clickmore==false">
      <a @click="getmore">获取更多 <svg
        t="1614238737454"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2112"
        width="200"
        height="200"
      >
        <path
          d="M512 819.2l-512-472.064 153.6-142.336 358.4 330.752 358.4-330.752 153.6 142.336-512 472.064z"
          p-id="2113"
        ></path>
      </svg>
      </a>
    </div> -->
    <Loading v-if="usercomments.length == 0"></Loading>
    <Comments v-if="usercomments.length != 0" :item="usercomments"></Comments>
  </div>
</template>

<style lang="less">
.album {
  text-align: left;
  // height: 200px;
  width: 100%;
  position: relative;
  .toptitile {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 20%;
    filter: blur(18px);
    z-index: -999;
    position: absolute;
    left: 0;
    top: 0;
  }
  .getmore {
    width: 100%;
    text-align: center;
    svg {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
    
<script>
import Slalbum from "../components/Slalbum";
import Loading from "../components/Loading";
import Backbar from "../components/Backbar";
import Sltrack from "../components/Sltrack";
import Comments from "../components/Comments";
export default {
  // props: ["id"],
  name: "Albumdetail",
  data() {
    return {
      id: null,
      aldata: [],
      songdata: [],
      creator: [],
      backgroundImage: null,
      trackIds: [],
      tracks: [],
      getlimit: 8,
      clickmore: false,
      usercomments: [],
    };
  },
  components: {
    Slalbum,
    Loading,
    Backbar,
    Sltrack,
    Comments,
  },
  created() {
    // console.log(this.$route.params);
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.axios.get(`/album/detail?id=${this.id}`).then((data) => {
      this.aldata = data.data.album;
      // this.creator = data.data.playlist.creator;
      this.backgroundImage = `url(${data.data.album.blurPicUrl})`;
      this.tracks = data.data.songs;
      // console.log(this.tracks);
    });
    this.axios.get(`/comment/album?id=${this.id}`).then((data) => {
      //  console.log(data);
      this.usercomments = [data.data.comments, data.data.hotComments];
      // console.log(this.usercomments);
    });
  },
};
</script>
