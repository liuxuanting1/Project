// pages/home/home.js
import goodsData from '../../data/goods-data'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        swiperImages: [
            "/images/banner-1.jpg",
            "/images/banner-2.jpg",
            "/images/banner-3.jpg",
            "/images/banner-4.jpg"
        ],
        gridObjs: [
            {text: '美妆馆', icon: '/images/grid-8.png'},
            {text: '精致护理', icon: '/images/grid-5.png'},
            {text: '清洁洗护', icon: '/images/grid-1.png'},
            {text: '国际名牌', icon: '/images/grid-6.png'},
            {text: '去领券', icon: '/images/grid-2.png'},
            {text: '抢红包', icon: '/images/grid-3.png'},
            {text: '美妆会员', icon: '/images/grid-4.png'},
            {text: '全部', icon: '/images/grid-7.png'}
        ],
        goodsData: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            goodsData
        })
    },
    /**
     * 跳转商品详情
     */
    onClickGoods(event) {
        // console.log(event.currentTarget.dataset.index);
        wx.navigateTo({
          url: `/pages/goods-detail/goods-detail?goodsIndex=${event.currentTarget.dataset.index}`,
        })
    },
    /**
     * 跳转到商品列表页
     */
    onClickGrid() {
        wx.navigateTo({
          url: '/pages/goods-list/goods-list',
        })
    }
})