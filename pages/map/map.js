Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/1号门缩略.jpg',
      '../images/2号门缩略.jpg',
      '../images/全景缩略.jpg',
    ],
  
  school: [{
      iconPath: "../images/mark.png",
      id: 0,
      latitude: 31.922715,
      longitude: 118.882426,
      title: '南京工程学院',
    }],
    },
    imageLoad: function (e) {
    var res = wx.getSystemInfoSync();
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight;
    this.setData({
      bannerHeight: res.windowWidth / ratio
    })

  }
})