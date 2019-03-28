import config from './config'

export default function (url, data='', method='GET') {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        console.log('!');
        resolve(res)
      },
      fail: (error) => {
        reject('err')
        console.log('error');
      }
    })
  })
}
