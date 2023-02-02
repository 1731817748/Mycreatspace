// pages/addData/addData.js
var util= require('../../util.js')
const DB = wx.cloud.database().collection("bankdata")
const _ = wx.cloud.database().command
const dsc = wx.cloud.database().collection("description")
const app=getApp()
//DB.where({name:_.eq(namev1)}).get({success: function(res) {console.log(res.data)}})
Page({
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    z
    
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  
  nameInput(n){
    let namev1 = n.detail.value;
    var name66 = n.detail.value;
    this.setData({name:namev1,name66: n.detail.value})
    console.log('名字', namev1, name66)
    

   }, 
   scoreneww(e){
    let scorev1 = e.detail.value;
    var common = e.detail.value;
    this.setData({score:scorev1, common: e.detail.value})
    console.log('分数', scorev1, common)
  },
  check(){
   var shabi = this.data.common
   var namenew = this.data.name66
    console.log(shabi)

    DB.where({name:namenew}) .update({
      data:{
        score: shabi
      }
    }).then(res => console.log('分数',res))
    var shaibii = this.data.name66;
    let timesb = "undefined";
    timesb=this.data.time;
    var des1 = this.data.realdes;
    console.log(timesb);
    dsc.add({
      data:{
        name:shaibii,
        description:des1,
        time:timesb
      },
      success:res =>( console.log('数据',res) )
    })
  } ,
  script(o){
    var desdata = o.detail.value;
    this.setData({realdes:o.detail.value})
    console.log('描述:',desdata);
  },

    

 
  /**
   * 生命周期函数--监听页面加载
   */
  ask() {
    var namen=this.data.name66
    console.log(namen,'114514')
    DB.where({name:namen}).get()
    .then(res => {
      console.log('返回数据',res)
      this.setData({  
      realscore : res.data
       })
       console.log(realscore,'1145141919810')
     })
    .catch(err => { //请求失败
      console.log('请求失败',err)
     })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    var namen=this.data.name66
        console.log('====================')
        DB.where({name:namen}).get()
    .then(res => {
      console.log('返回数据',res)
      this.setData({  
      realscore : res.data
       })
       console.log(realscore,'1145141919810')
     })
    .catch(err => { //请求失败
      console.log('请求失败',err)
     })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
