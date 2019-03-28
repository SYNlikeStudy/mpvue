<template>
  <div id="firstViewContainer">
    <swiper :indicator-dots="index != 3" @change="handleChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button v-show="index === 3" @click="toBooks">开始体验</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        index: 0,
      }
    },
    methods: {
      handleChange (event) {
        this.index = event.mp.detail.current
      },
      toBooks () {
        wx.switchTab({
          url: '../books/main'
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #firstViewContainer
    height 100%
    swiper
      height 100%
      img
        height 100%
        width 100%
    button
      width 280rpx
      height 80rpx
      line-height 80rpx
      position absolute
      bottom 40rpx
      left 50%
      margin-left -140rpx
</style>
