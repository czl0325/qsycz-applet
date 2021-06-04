import { configs } from '../utils/config.js'

class HTTP {
  constructor() {
    this.request_url = configs.api_url
  }

  request(params) {
    let url = (params.url && params.url.startsWith('http')) ? params.url : (this.request_url + (params.url || ''))
    if (!params.method) {
      params.method = 'GET'
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: params.data,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: params.method,
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var code = res.statusCode.toString()
          var startChar = code.charAt(0)
          if (startChar == '2') {
            var result = res.data
            if (typeof(result) === 'string' && result.length > 0) {
              let lastIndex = result.lastIndexOf('}')
              result = result.substring(0, lastIndex+1)
              result = JSON.parse(result)
            }
            if (result.code === 0) {
              resolve(result.data)
            } else {
              reject(result)
              wx.showToast({
                title: result.message || "请求失败",
                icon: 'none',
                duration: 2000
              })
            }
          } else {
            reject(res)
            wx.showToast({
              title: '错误:' + res.statusCode,
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail: function(err) {
          reject(err)
          wx.showToast({
            title: err.errMsg,
            icon: 'none',
            duration: 2000
          })
        },
        complete: function(res) {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
          wx.stopPullDownRefresh()
        },
      })
    })
  }
}

export {
  HTTP
}