<template>
  <div id="searchContainer">
    <input type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder" confirm-type="搜索图书"
           @confirm="handleConfirm" v-model="searchContent"/>
    <ul v-if="bookList.length">
      <li v-for="(book,index) in bookList" :key="index">{{book.title}}</li>
    </ul>
  </div>
</template>
<script>
  import request from '../../utils/request'
  export default {
    data () {
      return {
        searchContent: '',
        bookList: []
      }
    },
    methods: {
      //点击完成按钮触发
      async handleConfirm () {
        const result = await request('/searchBooks', this.searchContent)
        this.bookList = result.data
        console.log(this.bookList);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    input
      width 80%
      height 80rpx
      border-bottom 1rpx solid  #1ab2c9
      margin 0 auto
      .placeholder
        color #1ab2c9
        font-size 28rpx
        text-align center
</style>
