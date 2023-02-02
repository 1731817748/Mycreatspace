// index.js
// const app = getApp()
const DB = wx.cloud.database().collection("bankdata")  
Page({
  data: {
    page : 0
  },
  orderBy(){
    wx.navigateTo({
      url: '/pages/data/data',
                  })
  },
  getData() {
    let page = this.data.page + 20;
      console.log(page)
    DB.skip(0).get({
      success: res => {
        console.log(res.data)
        this.setData({    //收集数据到ne中并返回
          score: res.data
        })
    
      }})
      DB.skip(20).get({
        success: res => {
          console.log(res.data)
          this.setData({    //收集数据到ne中并返回
            score1: res.data
          })
      
        },
      }),
      DB.skip(40).get({
        success: res => {
          console.log(res.data)
          this.setData({    //收集数据到ne中并返回
            score2: res.data
          })
      
        },
      })},

 // getData(){wx.navigateTo({
  onReachBottom: function(){
  console.log("触底啦~")
  
 // {
  //  DB.skip(page).get().then(res => {
    //    let new_data = res.data
    //    let old_data = this.data.score
    //    console.log(res.new_data)
    //    console.log(res.old_data)
     //   this.setData({
      //    score: old_data.concat(new_data),
          
     //   }, res =>{
          
     //     console.log(res);
         
   //     })
     // })
  }
}
   //
   //
//
  //  url: '/pages/data/data',
 // })},

  //查询数据，用户使用
 
    
  )
