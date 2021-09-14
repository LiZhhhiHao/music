<template>
  <div class="playround">
    <div class="bg_play" :style="{ backgroundImage }"></div>
    <Backbar class="songback"></Backbar>
    <Loading v-if="searchsong.length == 0"></Loading>
    <div
      class="playbar"
      :style="{ transform: playbartransform }"
      v-if="searchsong.length != 0"
    >
      <img src="../assets/needle-ip6.png" />
    </div>
    <div class="playmodewrap" @click="playmusic" v-if="searchsong.length != 0">
      <div class="playmode" :style="{ 'animation-play-state': animationShow }">
        <img v-if="searchsong.length != 0" :src="searchsong.al.picUrl" />
      </div>
      <audio
        :src="`https://music.163.com/song/media/outer/url?id=${id}.mp3`"
        controls
        ref="audio"
        @timeupdate="timeupdate"
        autoplay
      ></audio>
      <span class="playbtn" v-show="playshow"></span>
    </div>
    <p class="searchsong_n" v-if="searchsong.length != 0">
      {{ searchsong.name }} - <span v-if="arname != null">{{ arname }}</span>
    </p>
    <div class="lyric" v-if="searchsong.length != 0">
      <ul :style="{ transform }" v-if="this.songlyric.length != 0">
        <li
          v-for="(l, index) in lyricArray"
          :class="{ active: currentIndex == index }"
          :key="index"
        >
          {{ l.songlyric }}
        </li>
      </ul>
      <p v-if="this.songlyric.length == 0">无歌词</p>
    </div>
    <Loading v-if="usercomments.length == 0"></Loading>
    <Simi :item="simisong" v-if="simisong.length != 0"></Simi>
    <Comments v-if="usercomments.length != 0" :item="usercomments" ></Comments>
  </div>
</template>
<style lang="less">
.songback {
  position: absolute;
  // background-color: rgba(255,255,255,.8);
  // background-color: #009688;
  filter: opacity(80%);
  z-index: 999999;
}
.playround {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .bg_play {
    background-size: 230%;
    background-position-x: 50%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    filter: blur(18px);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -999;
    flex-wrap: wrap;
  }
  .playbar {
    width: 100px;
    height: 130px;
    transition: transform 0.6s ease;
    // transform:rotate(-16deg) ;
    transform-origin: top left;
    z-index: 100;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .searchsong_n {
    color: #666;
    font-size: 18px;
    b {
      font-size: 25px;
      font-weight: normal;
    }
  }
  .playmodewrap {
    margin-top: -50px;
    width: 260px;
    height: 260px;
    position: relative;
    audio {
      width: 100%;
      height: 50px;
      display: none;
      position: absolute;
      z-index: 9999;
    }
    .playbtn {
      width: 20%;
      height: 20%;
      position: absolute;
      background-image: url("../assets/play.png");
      display: block;
      background-size: cover;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .playmode {
      animation: playrun 5s linear 0s infinite;
      background-image: url("../assets/bround.png");
      background-size: cover;
      background-size: 100%;
      width: 260px;
      height: 260px;
      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 1;
    }
    img {
      width: 62%;
      height: 62%;
      border-radius: 50%;
      vertical-align: middle;
    }
  }

  .lyric {
    height: 160px;
    -webkit-mask: -webkit-linear-gradient(
      top,
      #000,
      #000 70%,
      rgba(0, 0, 0, 0)
    );
    .active {
      color: #009688;
      font-size: 20px;
      font-weight: bold;
    }
    /* overflow: hidden; */
    ul {
      transform: translateY(0px);
      transition: transform 0.5s linear;
      li {
        color: #03a037;
        height: 30px;
        line-height: 30px;
        &:last-of-type {
          display: none;
        }
      }
    }
  }
}
@keyframes playrun {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script>
import Loading from "../components/Loading";
import Backbar from "../components/Backbar";
import Comments from "../components/Comments";
import Simi from "../components/Simi";
export default {
  // props: ["id", "num"],
  data() {
    return {
      id: 0,
      searchsong: [],
      backgroundImage: null,
      playbartransform: "rotate(-16deg)",
      playshow: false,
      animationShow: "running",
      songlyric: "",
      currentIndex: 0, //记录当前歌词播放的位置下标
      transform: 0,
      arname: null,
      usercomments: [],
      simisong: [],
    };
  },
  components: {
    Loading,
    Backbar,
    Comments,
    Simi,
  },
  methods: {
    playmusic() {
      let audio = this.$refs.audio;
      if (this.playshow) {
        this.playbartransform = "rotate(-16deg) ";
        this.playshow = !this.playshow;
        this.animationShow = "running";
        audio.play();
      } else {
        this.animationShow = "paused";
        this.playbartransform = "rotate(0)";
        this.playshow = !this.playshow;
        audio.pause();
      }
    },
    timeupdate(event) {
      //得到当前的播放时间
      let playTime = event.target.currentTime;
      // console.log(this.lyricArray);
      //当前播放时间 大于歌词时间 小于下一条歌词时间，当前这条歌词需要高亮
      // console.log(playTime);
      // console.log(event.target.paused);
      // console.log(event.target.ended);
      if (event.target.ended) {
        this.animationShow = "paused";
        this.playbartransform = "rotate(0)";
        this.playshow = true;
        this.currentIndex = 0;
        this.transform = `translateY(0px) `;
      }
      for (let i = 0; i < this.lyricArray.length; i++) {
        if (this.lyricArray[i].time == this.lyricArray[i + 1].time) {
          break;
        }
        if (
          this.lyricArray[i].time < playTime &&
          playTime < this.lyricArray[i + 1].time &&
          this.lyricArray[i].time != undefined
        ) {
          this.currentIndex = i;
          let h = 30 * i;
          this.transform = `translateY(-${h}px) `;
          break;
        }
      }
      // console.log(this.currentIndex);
    },
  },
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.axios.get(`/song/detail?ids=${this.id}`).then((data) => {
      this.searchsong = data.data.songs[0];
      // console.log(this.searchsong);
      this.backgroundImage = `url(${data.data.songs[0].al.picUrl})`;
      this.arname = data.data.songs[0].ar[0].name;
    });
    fetch(`http://music.kele8.cn/lyric?id=${this.id}`)
      .then((response) => response.json())
      .then((data) => {
          this.songlyric = data.lrc.lyric;
          // console.log(data.lrc.lyric);
          // console.log(data.lrc);
      }).catch(err=>{
        console.log(err);
      });
    this.axios.get(`/comment/music?id=${this.id}`).then((data) => {
      this.usercomments = [data.data.hotComments, data.data.hotComments];
      // console.log(this.usercomments);
    });
    this.axios.get(`simi/song?id=${this.id}`).then((data) => {
      // console.log(data.data.songs);
      this.simisong = data.data.songs;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    // console.log(this.id);
    this.searchsong = '';
    this.usercomments = '';
    this.axios.get(`/song/detail?ids=${this.id}`).then((data) => {
      this.searchsong = data.data.songs[0];
      // console.log(this.searchsong);
      this.backgroundImage = `url(${data.data.songs[0].al.picUrl})`;
      this.arname = data.data.songs[0].ar[0].name;
    });
    fetch(`http://music.kele8.cn/lyric?id=${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.songlyric = data.lrc.lyric;
        // console.log(data.lrc.lyric);
      });
    this.axios.get(`/comment/music?id=${this.id}`).then((data) => {
      this.usercomments = [data.data.comments, data.data.hotComments];
      // console.log(this.usercomments);
    });
    this.axios.get(`simi/song?id=${this.id}`).then((data) => {
      // console.log(data.data.songs);
      this.simisong = data.data.songs;
    });
    this.animationShow = "running";
    this.playbartransform = "rotate(-16deg)";
    this.playshow = false;
    this.transform = `translateY(0px) `;
    next();
  },
  computed: {
    lyricArray() {
      //把歌词字符串 处理成数组一行行歌词数组
      let arr = this.songlyric.split("\n");
      // console.log(arr);
      let reg = /\[(\d+):(\d+[.:]\d+)\](.*)/;
      let newArry = arr.map((d) => {
        // console.log(reg.test(d));
        // console.log("$1"+RegExp.$1,"$2"+RegExp.$2,"$3"+RegExp.$3);
        reg.test(d);
        return {
          time: parseInt(RegExp.$1 * 60) + parseFloat(RegExp.$2),
          songlyric: RegExp.$3,
        };
      });
      // newArry.pop();
      // console.log(newArry);
      return newArry;
    },
  },
};
</script>