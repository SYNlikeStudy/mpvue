<template>
  <div id="detailContainer">
    <h2>{{bookDetail.title}}</h2>
    <img :src="bookDetail.image" alt="">
    <section>
      <p>作者:{{bookDetail.author}}</p>
      <p>出版社:{{bookDetail.publisher}}</p>
      <p>出版日期:{{bookDetail.pubdate}}</p>
      <p>定价:{{bookDetail.price}}</p>
    </section>
    <div class="btn">
      <button>收藏该文章</button>
      <button>转发该文章</button>
    </div>
    <div class="summary">
      <h3>作者简介</h3>
      <p>{{bookDetail.author_intro}}</p>
      <h3>文章简介</h3>
      <p>{{bookDetail.summary}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bookDetail: {}
      }
    },
    mounted () {
      this.bookDetail = JSON.parse(this.$mp.query.book)
      wx.setNavigationBarTitle({
        title: this.bookDetail.title
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #detailContainer
    h2
      font-size 40rpx
      font-weight 600
      text-align center
      line-height 80rpx
    img
      width 70%
      height 700rpx
      margin-left 15%
    section
      margin-left 15%
      p
        font-size 32rpx
    .btn
      button
        width 70%
    .summary
      padding 10%
      h3
        text-align center
        color #1ab2c9
      p
        text-indent 32rpx
        margin-bottom 100rpx
</style>
