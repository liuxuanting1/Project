// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:Object
  },
  /**
   * 组件的初始数据
   */
  data: {
    showImage: true,
    defaultImage: '/images/default-img.jpg'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onGoToDetail(event){
      // console.log(this.properties.movie)
      const mid = this.properties.movie.id
      wx.navigateTo({
        url: '/pages/movie-detail/movie-detail?mid=' + mid
      })
    },
    onError(event) {
      // 图片加载异常
      this.setData({
        showImage: false
      })
    }
  }
})
