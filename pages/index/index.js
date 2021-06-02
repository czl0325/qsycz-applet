// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  toCreateOrder(event) {
    wx.navigateTo({
      url: '../order-create/order-create',
    })
  },
  toHistory(event) {
    wx.navigateTo({
      url: '../order-history/order-history',
    })
  }
})
