// pages/Single/SingleRecentvar 
const DB = wx.cloud.database().collection("bankdata")
const $ = wx.cloud.database().command.aggregate
const dsc = wx.cloud.database().collection("description")
const app=getApp()
//DB.where({name:_.eq(namev1)}).get({success: function(res) {console.log(res.data)}})
Page({
  data: {
  },
  dateToString(myDate,format){

    let fullYear = (myDate.getFullYear()).toString();

    let month = (myDate.getMonth()+1).toString();

    let day = (myDate.getDate()).toString();

    let hour = (myDate.getHours()).toString();

    let minute = (myDate.getMinutes()).toString();

    let second = (myDate.getSeconds()).toString();
  },
  nameInput(n){
    let namev1 = n.detail.value;
    var name66 = n.detail.value;
    this.setData({name:namev1,name66: n.detail.value})
    console.log('名字', namev1, name66)
   }, 
  
  script(o){
    var desdata = o.detail.value;
    this.setData({realdes:o.detail.value})
    console.log('描述:',desdata);
  },
  ask() {
    var namen=this.data.name66
    console.log(namen,'114514')
    dsc.where({name:namen}).get()
    .then(res => {
      console.log('返回数据',res)
      this.setData({  
      newshabi : res.data,
       })
       console.log(res.data,'1145141919810',res.data.time instanceof Date, res.data.time)
     })
    .catch(err => { //请求失败
      console.log('请求失败',err)
       })
     
       wx.cloud.database().collection('description')
      .aggregate()
      .project({
           _id: 0,
           formatDate: $.dateToString({
           date: '$date',
           format: '%Y-%m-%d-%H:%M:%S',
            timezone: 'Asia/Shanghai'
                })
              })
             .end()

     
  },
})