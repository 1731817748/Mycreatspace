// pages/data/data.js
const DB = wx.cloud.database()
const dbcoll = DB.collection("bankdata")  
Page({
        onLoad(){
          dbcoll.orderBy('score','desc').skip(0).get ({
            success: res => {
              console.log(res.data)
              this.setData({    //收集数据到ne中并返回
                score: res.data
              })
          
            }})
            dbcoll.orderBy('score','desc').skip(20).get ({
              success: res => {
                console.log(res.data)
                this.setData({    //收集数据到ne中并返回
                  score1: res.data
                })
            
              }})
              dbcoll.orderBy('score','desc').skip(40).get ({
                success: res => {
                  console.log(res.data)
                  this.setData({    //收集数据到ne中并返回
                    score2: res.data
                  })
              
                }})
        }
})