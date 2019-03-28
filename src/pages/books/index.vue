<template>
  <div id="booksContainer">
    <swiper indicator-dots>
      <swiper-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="bookslist">
      <div class="nav">
        <span>全部商品</span>
        <span class="more" @click="toBookList"> > </span>
      </div>
      <ul class="list">
        <li v-for="(book,index) in booksList" :key="index" @click="toDetail(book)">
          <img :src="book.image" alt="">
          <p>《{{book.title}}》</p>
          <p>{{book.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import booksList from './datas/data.json'
  export default {
    data () {
      return {
        booksList
      }
    },
    computed: {
      swiperList () {
        return [...this.booksList].splice(0,4)
      }
    },
    methods: {
      toBookList () {
        wx.navigateTo({
          url: '../bookList/main?booksList='+JSON.stringify(this.booksList)
        })
      },
      toDetail (book) {
        wx.navigateTo({
          url: '../detail/main?book='+JSON.stringify(book)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #booksContainer
    swiper
      height 400rpx
      img
        width 100%
    .bookslist
      .nav
        padding 10rpx
        .more
          float right
          width 60rpx
      .list
        width 100%
        display flex
        flex-wrap wrap
        li
          width 50%
          text-align center
          border-bottom 1rpx solid #eee
          box-sizing border-box
          padding 20rpx
          &:nth-child(2n+1)
            border-right  1rpx solid #eee
          img
            width 200rpx
            height 200rpx
          p
            font-size 30rpx
            line-height 60rpx
</style>
