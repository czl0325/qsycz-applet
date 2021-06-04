import { HTTP } from './http.js'


class Request extends HTTP {
  constructor() {
    super()
  }

  login(code, encryptedData, iv) {
    return this.request({
      url: '/login',
      data: {
        code,
        encryptedData,
        iv
      }
    })
  }

  getFacelist() {
    return this.request({
      url: '/facelist'
    })
  }

  getOrderList(pageNum) {
    return this.request({
      url: '/pageOrder',
      data: {
        accountId: '',
        pageNum,
        pageSize: 10
      }
    })
  }

  createOrder(areaCode, price) {
    return this.request({
      url: '/createOrder',
      method: 'POST',
      data: {
        accountId: '',
        areaCode,
        price
      }
    })
  }

  payOrder(orderNo) {
    return this.request({
      url: '/pageOrder',
      method: 'POST',
      data: {
        accountId: '',
        orderNo
      }
    })
  }
}

export {
  Request
} ;