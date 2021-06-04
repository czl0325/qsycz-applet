// pages/login/login.js
import { Request } from '../../http/api.js'
const request = new Request()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getPhoneNumber (e) {
    if (e.detail.encryptedData) {
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log(res.code)
          request.login(res.code, e.detail.encryptedData, e.detail.iv).then(res=>{
  
          })
        }
      })
    } else {
      wx.showToast({
        title: '您已拒绝权限，无法登录',
        icon: 'none',
        duration: 2000
      })
    }
  },

  toHome(event) {
    wx.navigateTo({
      url: '../index/index',
    })
  }
})