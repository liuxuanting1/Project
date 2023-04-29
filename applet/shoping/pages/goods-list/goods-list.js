// pages/goods-list/goods-list.js
import goodsData from '../../data/goods-data'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        sort: 0,
        goodsData: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const goodsList = goodsData.sort((a,b) => {
            return b.createTime - a.createTime
        })
        this.setData({
            goodsData: goodsList
        })
    },
    /**
     * 商品列表排序事件
     */
    onSortChange(event) {
        const index = event.detail.index
        let goodsList = []
        switch (index) {
            case 0:
                goodsList = goodsData.sort((a,b) => {
                    return b.createTime - a.createTime
                })
                this.setData({
                    goodsData: goodsList
                })
                break;
            case 1:
                goodsList = goodsData.sort((a,b) => {
                    return b.sale - a.sale
                })
                this.setData({
                    goodsData: goodsList
                })
                break;
            case 2:
                goodsList = goodsData.sort((a,b) => {
                    return a.price - b.price
                })
                this.setData({
                    goodsData: goodsList
                })
                break;
        }
    },
    /**
     * 商品卡片点击事件
     */
    onClickCard(event) {
        wx.navigateTo({
          url: `/pages/goods-detail/goods-detail?goodsIndex=${event.currentTarget.dataset.index}`,
        })
    }
})