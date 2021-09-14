<template>
  <div class="songlist">
    <Search></Search>
    <div class="sltype">
      <h2>{{ settype }}</h2>
      <button class="changetype" @click="typeshow = !typeshow">
        选择类别
        <svg
          t="1614238737454"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2112"
          width="10"
          height="10"
          class="icon"
        >
          <path
            d="M512 819.2l-512-472.064 153.6-142.336 358.4 330.752 358.4-330.752 153.6 142.336-512 472.064z"
            p-id="2113"
          ></path>
        </svg>
      </button>
      <div class="order">
        <span>顺序：</span>
        <a @click="order('new')">最新</a>
        <a @click="order('hot')">最热</a>
      </div>
    </div>
    <transition name="fade">
      <div class="chosetype" v-show="typeshow">
        <ul>
          <li class="sl_type all" @click="tap('全部')"><h3>全部</h3></li>
          <li class="sl_type" v-for="t in typelist" :key="t.type">
            <h3>{{ t.type }}</h3>
            <ul>
              <li v-for="(st, index) in t.typeli" :key="index" @click="tap(st)">
                {{ st }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </transition>
    <Loading v-if="songlists.length == 0"></Loading>
    <ul class="sl_sl" v-if="songlists.length != 0">
      <Album
        v-for="sl in songlists"
        :key="sl.id"
        :item="{ sl, num: 1 }"
      ></Album>
    </ul>
  </div>
</template>

<style lang="less">
.songlist {
  padding-top: 50px;
  overflow: hidden;
  .sltype {
    display: flex;
    padding: 20px 10px;
    align-items: center;
    .changetype {
      justify-content: center;
      margin-left: 10px;
      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-image: linear-gradient(#fff, #eee);
      outline: none;
      svg {
        margin-left: 6px;
      }
    }
    .order {
      margin-left: 50px;
      display: flex;
      align-items: baseline;
      a {
        margin: 0 5px;
        font-size: 13px;
        color: seagreen;
      }
    }
  }
  .chosetype {
    width: 100%;
    position: absolute;
    margin-top: -10px;
    padding: 5px 10px;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.8);
    .sl_type {
      display: flex;
      margin: 10px 0;
      h3 {
        flex: 5%;
        color: #009688;
      }
      &.all {
        text-align: left;
        margin-left: 8px;
        width: 38px;
      }
      ul {
        flex: 80%;
        > li {
          // margin: 10px 0;
          margin-bottom: 10px;
          float: left;
          font-size: 15px;
          margin-right: 16px;
          height: 21px;
          line-height: 21px;
          color: #009614c0;
        }
      }
    }
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    height: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-leave,
  .fade-enter-to {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.8);
    // height: 312px;
  }
  ul.sl_sl {
    // display: flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      flex: 20%;
      margin-bottom: 10px;
    }
  }
}
</style>
<script>
import Album from "../components/Album";
import Search from "../components/Search";
import Loading from "../components/Loading";
export default {
  name: "Songlist",
  data() {
    return {
      songlists: [],
      typeshow: false,
      typelist: [
        { type: "语种", typeli: ["华语", "欧美", "日语", "韩语", "粤语"] },
        {
          type: "风格",
          typeli: [
            "流行",
            "摇滚",
            "民谣",
            "电子",
            "舞曲",
            "说唱",
            "轻音乐",
            "爵士",
            "乡村",
            "R&B/Soul",
            "古典",
            "民族",
            "英伦",
            "金属",
            "朋克",
            "蓝调",
            "雷鬼",
            "世界音乐",
            "拉丁",
            "New Age",
            "古风",
            "后摇",
            "Bossa Nova",
          ],
        },
        {
          type: "场景",
          typeli: [
            "清晨",
            "夜晚",
            "学习",
            "工作",
            "午休",
            "下午茶",
            "地铁",
            "驾车",
            "运动",
            "旅行",
            "散步",
            "酒吧",
          ],
        },
        {
          type: "情感",
          typeli: [
            "怀旧",
            "清新",
            "浪漫",
            "伤感",
            "治愈",
            "放松",
            "孤独",
            "感动",
            "兴奋",
            "快乐",
            "安静",
            "思念",
          ],
        },
        {
          type: "主题",
          typeli: [
            "综艺",
            "影视原声",
            "ACG",
            "儿童",
            "校园",
            "游戏",
            "70后",
            "80后",
            "90后",
            "网络歌曲",
            "KTV",
            "经典",
            "翻唱",
            "吉他",
            "钢琴",
            "器乐",
            "榜单",
            "00后",
          ],
        },
      ],
      settype: "全部",
    };
  },
  components: {
    Album,
    Search,
    Loading,
  },
  methods: {
    tap(st) {
      // console.log(st);
      this.songlists = [];
      this.settype = st;
      this.axios.get(`/top/playlist?limit=30&cat=${st}`).then((data) => {
        this.songlists = data.data.playlists;
        // console.log(data.data);
        // console.log(this.songlists);
      });
    },
    order(val) {
      this.songlists = [];
      this.axios
        .get(`/top/playlist?limit=30&cat=${this.settype}&order=${val}`)
        .then((data) => {
          this.songlists = data.data.playlists;
        });
    },
  },
  created() {
    this.axios.get("/top/playlist?limit=30").then((data) => {
      this.songlists = data.data.playlists;
      // console.log(data.data);
      // console.log(this.songlists);
    });
  },
};
</script>
