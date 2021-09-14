<template>
  <div class="searchout">
    <div class="search_input">
      <span></span>
      <input
        type="text"
        name="search"
        @focus="on"
        v-model="sname"
        autocomplete="off"
      />
      <!-- :class="{ lostf: scontents == false }" -->
    </div>
    <div class="scontent" v-show="show">
      <ul>
        <li v-for="(sl, idx) in songList" :key="idx"
        @click="gosongs(sl.id)">
          <div class="wrap">
            <span>{{ sl.name }}</span>
            <span> 专辑:{{ sl.album.name }}</span>
          </div>
          <div class="awrap">
            <span>
              歌手:
              <i v-for="(slia, index) in sl.artists" :key="index"
                >{{ slia.name }}
              </i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
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
    gosongs(id){
        this.$router.push({
          name: "Searchresult",
          params: { id: id },
        });
    }
  },
  watch: {
    sname(val) {
      console.log(val);
      if (val != "") {
        this.axios.get(`/search?keywords=${val}`).then((data) => {
          // this.songList = [];
          // console.log(data);
          this.songList = data.data.result.songs;
          console.log(this.songList);
        });
      } else {
        this.songList = [];
      }
    },
    // scontents() {
    //   // console.log(this.scontents);
    //   this.show = this.scontents == false ? false : true;
    // },
  },
};
</script>
<style lang="less">
.searchout {
  width: 100%;
  margin: 0 auto;
  z-index: 999;
  box-sizing: border-box;
  .search_input {
    position: relative;
    margin: 3vw;
  }
  .search_input span {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background: url("../assets/topbar.png") no-repeat;
    background-position: 0px -100px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
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
    ul {
      width: 100%;
      box-sizing: border-box;
      flex: 1 1 auto;
      li {
        text-align: left;
        display: flex;
        justify-content: space-between;
        font-size: 4.4vw;
        width: 100%;
        align-items: center;
        margin: 1rem 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
        >div{
          display: flex;
            width: 50%;
            flex-direction: column;
        span{
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
              flex-direction: column;
            text-overflow: ellipsis;
            
        }
        }
      }
    }
  }
}
</style>