Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    btnstate:"default",
    account:"",
    password:""
  },

  accountInput:function(e){
    var content = e.detail.value;
    if(content!=''){
      this.setData({disabled:false,btnstate:"primary",account:content,zhanghao: e.detail.value});
    }else{
      this.setData({disabled:true,btnstate:"default"});
    }
  },
  pwdBlur:function(e){
    var password= e.detail.value;
    if(password!=''){
      this.setData({passwd:password,mima: e.detail.value});
    }
  },
  login() {
    let zhanghao = this.data.zhanghao
    let mima = this.data.mima
    console.log('账号', zhanghao, '密码', mima)
    wx.cloud.database().collection('user').where({
      zhanghao: zhanghao
    }).get({
      success(res) {
        console.log("获取数据成功", res)
        let user = 'Frank'
        console.log("user", user)
        if (mima == 'ycap2025') {
          console.log('登陆成功')
          wx.showToast({
            icon: 'none',
            title: '登陆成功',
           })
         
          // wx.navigateTo({
          //   url: '../home/home?name=' + user.name,
          // })
          wx.navigateTo({
            url: '/pages/addData/addData',
                        })
          //保存用户登陆状态
          wx.setStorageSync('user', user)
                  } 
            else 
            {
          console.log('登陆失败')
          wx.showToast({
            icon: 'none',
            title: '账号或密码不正确',
          })
        }
      },
      fail(res) {
        console.log("获取数据失败", res)
      }
    })
  }})