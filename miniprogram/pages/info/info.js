// pages/info/info.js
Page({
  
  navigateToAll: function(event){
    wx.navigateTo({
    url: '/pages/AllRecent/AllRecent',
                })
              },
  navigateToSingle: function(event){
    wx.navigateTo({
    url: '/pages/Single/SingleRecent',
                })
              }
 
})