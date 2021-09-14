<template>
    <h1 class="stitle">
      <slot></slot>
    <span>更多 <i>&gt;</i></span>
    </h1>
</template>
<style lang="less">
.stitle {
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    margin-left: 10px;
    display: inline-block;
    height: 10px;
    vertical-align: 3px;
    width: 10px;
    background-color: green;
    border-radius: 10px;
  }
  span{
      font-size: 13px;
      font-weight: normal;
      padding: 0px 6px;
      border:1px solid #009688;
      border-radius: 16px;
      position: absolute;
      text-align: right;
      right: 10px;
      top: 50%;
      transform: translate(0,-50%);
      i{
          font-size: 14px;
          font-weight: bold;
          vertical-align: -0.7px;
          color: #a4dab6;
      }
  }
}
</style>