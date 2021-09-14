<template>
  <div class="singer">
    <div class="singercover">
      <img :src="artist.picUrl" />
      <div class="singername">
        <img :src="artist.img1v1Url" />
        <h3>{{ artist.name }}</h3>
      </div>
    </div>
    <div class="singerdes">
      <h2>歌手简介</h2>
      <p :style="{ display: singm }">{{ artist.briefDesc }}</p>
      <div class="full" @click="singermore">
        <span v-show="!slmore">完整歌手介绍</span>
        <span v-show="slmore">收起</span>
        <svg
          t="1614336862938"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2116"
          width="20"
          height="20"
          :style="{ transform: rotate }"
        >
          <path
            d="M512 819.2l-512-472.064 153.6-142.336 358.4 330.752 358.4-330.752 153.6 142.336-512 472.064z"
            p-id="2117"
          ></path>
        </svg>
      </div>
    </div>
    <ul class="singerbar">
      <li>
        <router-link :to="{ name: 'Singersong', params: { id: id } }"
          >歌曲</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Singeralbum', params: { id: id } }"
          >专辑</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<style lang="less">
.singer {
  .singercover {
    width: 100%;
    height: 333px;
    background-size: cover;
    position: relative;
    > img {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .singername {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%);
      > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      z-index: 1;
      color: white;
      h3 {
        font-size: 30px;
      }
    }
  }
  .singerdes {
    padding: 0 20px;
    text-align: left;
    h2 {
      font-weight: bold;
      font-size: 20px;
      margin: 10px 0;
    }
    p {
      overflow: hidden;
      color: #000;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .full {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: 10px;
        path {
          transform: rotate(180deg);
          transform-origin: center;
        }
        // transform:'rotate(360deg)'
      }
    }
  }
  .singerbar {
    display: flex;
    justify-content: space-around;
    background-color: #eeeff0;
    align-items: center;
    li {
      padding: 10px 0;
      border: 1px solid #ddd;
      width: 100%;
        box-sizing: border-box;
      a {
          color: #a4dab6;
        text-decoration: none;
      }
        a.router-link-exact-active{
            color: #009688;
        }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      id: 0,
      artist: [],
      backgroundImage: "",
      singm: "-webkit-box",
      rotate: "rotate(180deg)",
      slmore: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.axios.get(`/artists?id=${this.id}`).then((data) => {
      // console.log(data);
      this.artist = data.data.artist;
    //   console.log(this.artist);
    });
  },
  methods: {
    singermore() {
      this.singm = this.singm == "block" ? "-webkit-box" : "block";
      this.rotate =
        this.rotate == "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
      this.slmore = !this.slmore;
    },
  },
};
</script>