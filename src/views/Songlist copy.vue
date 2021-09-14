<template>
  <div class="songlist">
    <Search></Search>
    <div class="sltype">
      <h2>全部</h2>
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
    </div>
    <transition name="fade">
      <div class="chosetype" v-show="typeshow">
        <ul>
          <li class="sl_type">
            <h3>语种</h3>
            <ul>
              <li @click="tap($event)">华语</li>
              <li @click="tap($event)">欧美</li>
              <li @click="tap($event)">日语</li>
              <li @click="tap($event)">韩语</li>
              <li @click="tap($event)">粤语</li>
            </ul>
          </li>
          <li class="sl_type">
            <h3>风格</h3>
            <ul>
              <li>流行</li>
              <li>摇滚</li>
              <li>民谣</li>
              <li>电子</li>
              <li>舞曲</li>
              <li>说唱</li>
              <li>轻音乐</li>
              <li>爵士</li>
              <li>乡村</li>
              <li>R&B/Soul</li>
              <li>古典</li>
              <li>民族</li>
              <li>英伦</li>
              <li>金属</li>
              <li>朋克</li>
              <li>蓝调</li>
              <li>雷鬼</li>
              <li>世界音乐</li>
              <li>拉丁</li>
              <li>New Age</li>
              <li>古风</li>
              <li>后摇</li>
              <li>Bossa Nova</li>
            </ul>
          </li>
          <li class="sl_type">
            <h3>场景</h3>
            <ul>
              <li>清晨</li>
              <li>夜晚</li>
              <li>学习</li>
              <li>工作</li>
              <li>午休</li>
              <li>下午茶</li>
              <li>地铁</li>
              <li>驾车</li>
              <li>运动</li>
              <li>旅行</li>
              <li>散步</li>
              <li>酒吧</li>
            </ul>
          </li>
          <li class="sl_type">
            <h3>情感</h3>
            <ul>
              <li>怀旧</li>
              <li>清新</li>
              <li>浪漫</li>
              <li>伤感</li>
              <li>治愈</li>
              <li>放松</li>
              <li>孤独</li>
              <li>感动</li>
              <li>兴奋</li>
              <li>快乐</li>
              <li>安静</li>
              <li>思念</li>
            </ul>
          </li>
          <li class="sl_type">
            <h3>主题</h3>
            <ul>
              <li>综艺</li>
              <li>影视原声</li>
              <li>ACG</li>
              <li>儿童</li>
              <li>校园</li>
              <li>游戏</li>
              <li>70后</li>
              <li>80后</li>
              <li>90后</li>
              <li>网络歌曲</li>
              <li>KTV</li>
              <li>经典</li>
              <li>翻唱</li>
              <li>吉他</li>
              <li>钢琴</li>
              <li>器乐</li>
              <li>榜单</li>
              <li>00后</li>
            </ul>
          </li>
        </ul>
      </div>
    </transition>

    <ul class="sl_sl">
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
  }
  .chosetype {
    width: 100%;
    position: absolute;
    background-color: #fff;
    padding: 5px 10px;
    z-index: 99;
    .sl_type {
      display: flex;
      margin: 10px 0;
      h3 {
        flex: 5%;
      }
      ul {
        flex: 80%;
        > li {
          float: left;
          margin-right: 10px;
          height: 21px;
          line-height: 21px;
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
    height: 312px;
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
export default {
  name: "Songlist",
  data() {
    return {
      songlists: [],
      typeshow: true,
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
    };
  },
  components: {
    Album,
    Search,
  },
  methods: {
    tap(event) {
      console.log(event, this);
    },
  },
  created() {
    this.axios.get("/personalized").then((data) => {
      this.songlists = data.data.result;
    });
  },
};
</script>
