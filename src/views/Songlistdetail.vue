<template>
  <div class="Songlist">
    <div class="toptitile" :style="{ backgroundImage }"></div>
    <Backbar></Backbar>
    <Loading v-if="sldata.length == 0"></Loading>
    <Slalbum
      v-if="sldata.length != 0"
      :item="sldata"
      :creator="creator"
    ></Slalbum>
    <Sltrack :item="tracks" :class="{ mask: clickmore == false }"> </Sltrack>
    <div class="getmore" v-show="clickmore == false">
      <a @click="getmore"
        >获取更多
        <svg
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
    </div>
    <Loading v-if="slusercomments.length == 0"></Loading>
    <Comments v-if="slusercomments.length != 0" :item="slusercomments"></Comments>
  </div>
</template>

<style lang="less">
.Songlist {
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
  .mask {
    -webkit-mask: -webkit-linear-gradient(
      top,
      #000,
      #000 70%,
      rgba(0, 0, 0, 0)
    );
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
  name: "Songlistdetail",
  data() {
    return {
      id: null,
      sldata: [],
      creator: [],
      backgroundImage: null,
      trackIds: [],
      tracks: [],
      getlimit: 8,
      clickmore: false,
      slusercomments:[]
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
    this.axios.get(`/playlist/detail?id=${this.id}`).then((data) => {
      this.sldata = data.data.playlist;
      this.creator = data.data.playlist.creator;
      this.backgroundImage = `url(${data.data.playlist.coverImgUrl})`;
      //   console.log(data);
      // console.log(data.data.playlist.trackIds);
      //   console.log(this.backgroundImage);
      this.trackIds = data.data.playlist.trackIds;
      // console.log(this.trackIds);
    });
     this.axios.get(`/comment/playlist?id=${this.id}`).then((data) => {
      //  console.log(data);
      this.slusercomments = [data.data.comments, data.data.hotComments];
    // console.log(this.slusercomments );
      });
  },
  watch: {
    trackIds(val) {
      // console.log(val);
      for (let i = 0; i < this.getlimit; i++) {
        // console.log(val[i].id);
        this.axios.get(`/song/detail?ids=${val[i].id}`).then((data) => {
          console.log(data.data.songs[0]);
          this.tracks.push(data.data.songs[0]);
        });
      }
    },
  },
  methods: {
    getmore() {
      this.clickmore = true;
      for (let i = this.getlimit; i < this.trackIds.length; i++) {
        // console.log(this.trackIds.length);
        this.axios
          .get(`/song/detail?ids=${this.trackIds[i].id}`)
          .then((data) => {
            // console.log(data.data.songs[0]);
            this.tracks.push(data.data.songs[0]);
          });
      }
    },
  },
};
</script>
