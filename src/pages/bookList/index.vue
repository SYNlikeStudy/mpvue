<template>
  <div id="bookListContainer">
    <ul>
      <li v-for="(book,index) in bookList" :key="index">
        <img :src="book.image" alt="">
        <section>
          <p>{{book.title}}</p>
          <p>作者:{{book.author}}</p>
          <p>出版社:{{book.publisher}}</p>
        </section>
        <div>{{book.price}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bookList: []
      }
    },
    mounted () {
      this.bookList = JSON.parse(this.$mp.query.booksList)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #bookListContainer
    ul
      li
        display flex
        padding 10rpx
        border-bottom 1rpx solid #eee
        position relative
        img
          width 140rpx
          height 140rpx
        section
          font-size 28rpx
          p
            &:nth-child(2n)
              margin 20rpx 0
        div
          position absolute
          top 0
          right 10rpx
</style>
