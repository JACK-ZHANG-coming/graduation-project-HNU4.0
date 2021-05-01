// pages/cetchaxun/cetchaxun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsUrl:"https://www.chsi.com.cn/cet/"  //这里访问的是学信网的四六级查询链接

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.navigateToMiniProgram({
      appId: 'wx84803de9a7e52e5d', //进入四六级查询小程序
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  ,
  openCet(){
    wx.navigateToMiniProgram({
      appId: 'wx84803de9a7e52e5d',
    })
  }
})