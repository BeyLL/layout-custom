<template>
  <div>
    <div class="navbar-box">
      <div class="left-box">
        <span class="navbar-name">aYuan协同办公</span>
        <div class="navbar-item-box">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </div>
        <div class="navbar-item-box">
          <i class="iconfont icon-chrome"></i>
          <span>工作圈</span>
        </div>
        <div class="navbar-item-box">
          <i class="iconfont icon-laptop"></i>
          <span>办公</span>
        </div>
        <div class="navbar-item-box">
          <i class="iconfont icon-applications"></i>
          <span>应用</span>
        </div>
        <div class="navbar-item-box">
          <i class="iconfont icon-reconciliation"></i>
          <span>管理</span>
        </div>
        <div class="navbar-item-box">
          <i class="iconfont icon-wrench"></i>
          <span>运维</span>
        </div>
      </div>
      <div class="right-box">
        <i class="iconfont icon-bell"></i>
        <el-avatar src="https://picsum.photos/200/200?random=10"></el-avatar>
        <i class="iconfont icon-down"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { initPanelsLayout } from '../assets/js/layout'
export default {
  created () {
    const layout = JSON.stringify(initPanelsLayout)
    window.sessionStorage.setItem('layout', layout)
  }
}
</script>

<style>
.navbar-box {
  position: relative;
  height: 56px;
  background: #396aff;
  display: flex;
  color: #fff;
  z-index: 2000;
  width: 100%;
}
.navbar-box .left-box {
  flex: 0 0 50%;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 2fr 2fr 2fr;
  line-height: 56px;
  text-align: center;
  cursor: pointer;
}
.navbar-item-box > i {
  margin-right: 10px;
}
.left-box .navbar-name {
  font-weight: bold;
  font-size: 18px;
}
.navbar-box .right-box {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}
.navbar-box .right-box > i {
  margin-right: 10px;
}
.navbar-box .right-box > * {
  cursor: pointer;
}
.right-box .el-avatar {
  margin: 0 5px 0 10px;
}
</style>
