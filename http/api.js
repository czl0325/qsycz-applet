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
}

export {
  Request
} ;