var util = require('../../utils/util.js');
var app = getApp()
var nickName
var imageurl
Page({
  /**
   * 页面的初始数据
   */
  data: {         
    intime: '00:00',//默认起始时间
    outtime: '00:00',//默认终止时间
  },
  onGotUserInfo: function (e) {
    nickName = e.detail.userInfo.nickName
    imageurl = e.detail.userInfo.avatarUrl
  },
  //预约日期显示
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //预约时间显示
  bindinTimeChange: function (e) {
    this.setData({
      intime: e.detail.value
    })
  },
  bindoutTimeChange: function (e) {
    this.setData({
      outtime: e.detail.value
    })
  }, 
  //表单提交
  formSubmit: function (e) {
     console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    wx.request({
      url: 'http://toppasspark.cn:9000', //提交预约表单地址
      data: {
        nickname: nickName,
        imageurl: imageurl,
        user: e.detail.value.user,
        vehicle: e.detail.value.vehicle,
        tel: e.detail.value.tel,
        date: e.detail.value.date,
        reason: e.detail.value.reason,
        intime: e.detail.value.intime,
        outtime: e.detail.value.outtime
      },
      header: {
        'content-type': 'application/json'
      },
      method:'POST',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  //表单重置
  formReset: function () {
    var DATE = util.formatDate(new Date());
    var TIME = util.formatTime(new Date());
    this.setData({
      date: DATE,
      intime: TIME,
      outtime: TIME
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数,初始化页面设置预约日期，默认当天日期 
    var DATE = util.formatDate(new Date());
    var TIME = util.formatTime(new Date());
    this.setData({
      date: DATE,
      intime: TIME,
      outtime: TIME
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
  //页面分享
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'NJIT车辆门禁预约',
      imageUrl: '/pages/全景.jpg',
      path: '/pages/order?id=123'
    }
  }
})