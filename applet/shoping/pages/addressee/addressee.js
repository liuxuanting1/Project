// pages/addressee/addressee.js
import { areaList } from '@vant/area-data'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        phone: '',
        city: '',
        areaList,
        showAreaList: false,
        goodsIndex: -1
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            name: options.name,
            phone: options.phone,
            city: options.city,
            goodsIndex: options.goodsIndex
        })
    },
    /**
     * 选择地址
     */
    onChangeCity() {
        this.setData({
            showAreaList: true
        })
    },
    /**
     * 点击地址选择遮罩层
     */
    onClosePopup() {
        this.setData({
            showAreaList: false
        })
    },
    // 选择地址
    onCityConfirm(event) {
        const citys = event.detail.values
        this.setData({
            city: `${citys[0].name} ${citys[1].name} ${citys[2].name}`,
            showAreaList: false
        })
    },
    /**
     * 取消事件
     */
    onBack() {
        wx.navigateBack({
          delta: 1,
        })
    },
    /**
     * 保存事件
     */
    onSave() {
        const {name, phone, city} = this.data
        console.log(name);
        if (name === undefined || name === "") {
            wx.showToast({
              title: '姓名不能为空',
              icon: 'error'
            })
            return
        }
        if (phone === undefined || phone === '') {
            wx.showToast({
              title: '手机号不能为空',
              icon: 'error'
            })
            return
        }
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            wx.showToast({
                title: '手机号有误',
                icon: 'error'
              })
              return
        }
        if (city === undefined || city === '') {
            wx.showToast({
              title: '地址不能为空',
              icon: 'error'
            })
            return
        }
        wx.navigateTo({
          url: `/pages/order-message/order-message?name=${name}&phone=${phone}&city=${city}&goodsIndex=${this.data.goodsIndex}`
        })
    },
    /**
     * 姓名输入事件
     */
    onNameInput(event) {
        this.setData({
            name: event.detail
        })
    },
    /**
     * 手机号输入事件
     */
    onPhoneInput(event) {
        this.setData({
            phone: event.detail
        })
    },
    /**
     * 地址输入事件
     */
    onCityInput(event) {
        this.setData({
            city: event.detail
        })
    }
})