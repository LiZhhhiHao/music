<template>
  <div class="search">
    <div class="search_input">
      <span></span>
      <input
        type="text"
        name="search"
        @focus="on"
        v-model="sname"
        autocomplete="off"
        :class="{ lostf: scontents == false }"
      />
    </div>
    <div class="scontent" v-show="show">
      <template v-if="songList.albums">
        <div class="res">
          <div class="stype albums">专辑：</div>
          <ul>
            <li
              v-for="s in songList.albums"
              :key="s.id"
              @click.stop="searchout(s.id, 1)"
            >
              <span title="">{{ s.name }}</span>
            </li>
          </ul>
        </div>
      </template>
      <template v-if="songList.artists">
        <div class="res">
          <div class="stype artists">歌手：</div>
          <ul>
            <li
              v-for="s in songList.artists"
              :key="s.id"
              @click.stop="searchout(s.id, 2)"
            >
              <span>{{ s.name }}</span>
            </li>
          </ul>
        </div>
      </template>
      <template v-if="songList.songs">
        <div class="res">
          <div class="stype songs">歌曲：</div>
          <ul>
            <li
              v-for="s in songList.songs"
              :key="s.id"
              @click.stop="searchout(s.id, 3)"
            >
              <span>{{ s.name }}</span>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ["scontents"],
  data() {
    return {
      show: false,
      sname: "",
      songList: [],
    };
  },
  methods: {
    on() {
      this.show = true;
    },
    off() {
      this.show = false;
    },
    searchout(id, num) {
      if (num == 1) {
         this.$router.push({
          name: "Albumdetail",
          params: { id: id },
        });
      } else if (num == 3) {
        this.$router.push({
          name: "Searchresult",
          params: { id: id },
        });
      } else if (num == 2) {
        this.$router.push({
          name: "Singer",
          params: { id: id },
        });
      }
    },
  },
  watch: {
    sname(val) {
      // console.log(val);
      if (val != "") {
        this.axios
          .get(`/search/suggest?keywords=${val}&type=mobile`)
          .then((data) => {
            // this.songList = [];
            // console.log(data);
            this.songList = data.data.result;
          });
      } else {
        this.songList = [];
      }
    },
    scontents() {
      // console.log(this.scontents);
      this.show = this.scontents == false ? false : true;
    },
  },
};
</script>
<style lang="less">
.search {
  width: 200px;
  line-height: 30px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 70px;
  transform: translate(-50%, 0);
  z-index: 999;
  .search_input span {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background: url("../assets/topbar.png") no-repeat;
    background-position: 0px -100px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999999;
  }

  input {
    width: 100%;
    height: 28px;
    font-size: 16px;
    border-radius: 10px;
    outline: none;
    padding-left: 30px;
    border: 1px solid lightgreen;
    display: block;
    position: relative;
    &.lostf {
      color: #999;
    }
  }
  .scontent {
    border-radius: 10px;
    background-color: #eee;
    .res {
      display: flex;
      flex: 1 0;
      .stype {
        border-right: 1px solid #ccc;
        line-height: 17px;
        font-weight: normal;
        font-size: 8px;
        padding-left: 20px;
        padding-top: 5px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          left: 0;
          top: 5px;
          background: url("../assets/icon.png");
        }
        &.songs::before {
          background-position: -32px -299px;
        }
        &.albums::before {
          background-position: -33px -319px;
        }
        &.artists::before {
          background-position: -48px -299px;
        }
      }
      ul {
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        font-size: 12px;
        width: 143px;
        flex: 1 1 auto;
        li {
          text-overflow: ellipsis;
          overflow: hidden;
          // width: 100%;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>