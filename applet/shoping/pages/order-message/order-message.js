// pages/order-message/order-message.js
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
        buyNum: 1,
        address: {},
        goodsIndex: -1
    },
    /**
     * 修改地址
     */
    onUpdateAddress() {
        let {name, phone, city} = this.data.address
        wx.navigateTo({
          url: `/pages/addressee/addressee?name=${name}&phone=${phone}&city=${city}&goodsIndex=${this.data.goodsIndex}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const address = {}
        if (options.name && options.phone && options.city) {
            address.name = options.name
            address.phone =  options.phone
            address.city = options.city
        }
        console.log(options);
        this.setData({
            goods: goodsData[options.goodsIndex],
            address,
            goodsIndex: options.goodsIndex
        })
    },
    /**
     * 修改购买数量事件
     */
    onBuyNumChange(event) {
        this.setData({
            buyNum: event.detail
        })
    },
    /**
     * 新增收货地址
     */
    onPlusAddress() {
        wx.navigateTo({
          url: `/pages/addressee/addressee?goodsIndex=${this.data.goodsIndex}`,
        })
    },
    /**
     * 立即付款事件
     */
    onSubmit() {
        wx.showLoading({
            title: '付款中',
          })
          setTimeout(function () {
            wx.hideLoading()
            wx.navigateTo({
              url: '/pages/order-result/order-result',
            })
          }, 2000)
    }
})