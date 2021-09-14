<template>
  <div id="nav">
    <router-link to="/">发现</router-link>
    <router-link to="/songlist">歌单</router-link>
    <router-link to="/searchout">搜索</router-link>
    <router-link to="/toplist">排行榜</router-link>
  </div>
</template>

<style lang="less" >
#nav {
  width: 100%;
  height: 60px;
  // line-height: 60px;
  display: flex;
  box-sizing: border-box;
  background-color: #a4dab6;
  white-space: nowrap;
  overflow-y: scroll;
  z-index: 9999;
}
#nav::-webkit-scrollbar {
  display: none;
}
#nav a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  vertical-align: middle;
  line-height: 60px;
  font-size: 20px;
  margin: 0 30px;
  transition: all 0.5s ease;
}

#nav a.router-link-exact-active {
  color: #009688;
  font-size: 30px;
}
</style>