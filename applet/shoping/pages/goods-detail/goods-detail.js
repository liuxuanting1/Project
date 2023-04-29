// pages/goods-detail/goods-detail.js
import goodsData from '../../data/goods-data'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        goods: {
            title: '',
            price: 0,
            mainPic: '',
            smallPic: '',
            details: [],
            createTime: 0,
            sale: 0
        },
        star: false,
        goodsIndex: -1
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            goods: goodsData[options.goodsIndex],
            goodsIndex: options.goodsIndex
        })
    },
    /**
     * 返回首页事件
     */
    onBackHome() {
        wx.navigateTo({
          url: '/pages/home/home',
        })
    },
    /**
     * 收藏商品事件
     */
    onStarChange() {
        this.setData({
            star: !this.data.star
        }, () => {
            wx.showToast({
              title: this.data.star ? '已收藏':'取消收藏',
              icon: this.data.star ? 'success':'none'
            })
        })
    },
    /**
     * 购买商品事件
     */
    onBuyGoods(event) {
        wx.navigateTo({
          url: `/pages/order-message/order-message?goodsIndex=${this.data.goodsIndex}`,
        })
    }
})