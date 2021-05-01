const cloud = require('wx-server-sdk')
var request = require('request')
cloud.init({
  env: 'robot-448af6'
})

// 云函数入口函数
exports.main = async (event, context) => {
  //qz
  return new Promise((resolve, reject) => {
    request({
      url: event.URL,
      method: "POST",
      
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        try {
          resolve(body)
        } catch (e) {
          reject()
        }
      }
    })
  })
}