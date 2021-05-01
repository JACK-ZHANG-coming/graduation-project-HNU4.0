// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  //  初始化默认的那个
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async(event, context) => {
  if (event.action == 'fabiao') {
    return await cloud.database().collection("studentCircle").doc(event.id)
      .update({
        data: {
          pinglun: event.pinglun
        }
      })
      .then(res => {
        console.log("评论成功", res)
        return res
      })
      .catch(res => {
        console.log("评论失败", res)
        return res
      })
  } 
  else if (event.action == 'xieDianZan')
  {
    return await cloud.database().collection("studentCircle").doc(event.id)
      .update({
        data: {
          ['dianzan.' + [event.weizhi_i] + '.dianzanCount']: Number(0), //更新当前的点赞学生写入默认值 为0
          ['dianzan.' + [event.weizhi_i] + '.dianzanZhuangtai']: event.dianzan,  //更新当前的点赞状态
          ['dianzan.' + [event.weizhi_i] + '.dianzanStudentID']: event.studentID  //更新当前的点赞学生学号
          
          // ['dianzan.' + [event.weizhi_i] + '.dianzanCount']:Number(30)
        }
      })
      .then(res => {
        console.log("event.id", event.id)
        console.log("写入点赞状态成功1", res)
        return res
      })
      .catch(res => {
        console.log("写入点赞状态失败", res)
        return res
      })
  }
  else if (event.action == 'xieDianZan0') {
    return await cloud.database().collection("studentCircle").doc(event.id)
      .update({
        data: {
          //第一行用来存放总赞数
          ['dianzan.' + [event.weizhi_i] + '.dianzanCount']: Number(0), //更新当前的点赞学生写入默认值 为0
          ['dianzan.' + [event.weizhi_i] + '.dianzanZhuangtai']: true,  //更新当前的点赞状态
          ['dianzan.' + [event.weizhi_i] + '.dianzanStudentID']: "0000000000",  //更新当前的点赞学生学号
          //下面一行用来添加新的当前的点赞学生状态
          ['dianzan.' + [event.weizhi_ii] + '.dianzanCount']: Number(0), //更新当前的点赞学生写入默认值 为0
          ['dianzan.' + [event.weizhi_ii] + '.dianzanZhuangtai']: event.dianzan,  //更新当前的点赞状态
          ['dianzan.' + [event.weizhi_ii] + '.dianzanStudentID']: event.studentID  //更新当前的点赞学生学号

          // ['dianzan.' + [event.weizhi_i] + '.dianzanCount']:Number(30)
        }
      })
      .then(res => {
        console.log("event.id", event.id)
        console.log("写入点赞状态成功1", res)
        return res
      })
      .catch(res => {
        console.log("写入点赞状态失败", res)
        return res
      })
  }
  else {
    return await cloud.database().collection("studentCircle").doc(event.id)
    // .where({
    //   '_id': event.id,
    //   'dianzan.dianzanStudentID': event.studentID
    // })
      .update({
        data: {
          // 'dianzan.$.dianzanCount':5      ----where锁定状态
          // ['dianzan.' + [event.weizhi_i] + '.dianzanCount']: event.onezan + event.shuzhi_j, //更新当前学生点赞数
          // ['dianzan.' + [event.weizhi_zero] + '.dianzanCount']: ['dianzan.' + [event.weizhi_zero] + '.dianzanCount'] + event.shuzhi_j,  //更新总赞数
          ['dianzan.' + [event.weizhi_zero] + '.dianzanCount']: event.onezan + event.shuzhi_j,//更新总赞数
          ['dianzan.' + [event.weizhi_i] + '.dianzanZhuangtai']: event.dianzan,  //更新当前的点赞状态
          // ['dianzan.' + [event.weizhi_i] + '.dianzanStudentID']: event.studentID  //更新当前的点赞学生学号
          // ['dianzan.' + [event.weizhi_i] + '.dianzanCount']:Number(30)
        }
      })
      .then(res => {
        console.log("event.id", event.id)
        console.log("改变点赞状态成功1", res)
        return res
        
      })
      .catch(res => {
        console.log("改变点赞状态失败", res)
        return res
      })
  }

}
