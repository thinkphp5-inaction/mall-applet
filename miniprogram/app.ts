import request from "./utils/request";

//app.ts
export interface IMyApp {
  userInfoReadyCallback?: (info: wx.UserInfo) => void
  globalData: {
    user?: any;
  }
}

App<IMyApp>({
  onLaunch() {
    const self = this
    
    request({
      url: '/index/user/info',
      success(data: any) {
        self.globalData.user = data
      },
      fail(error: any) {
        console.log(error);
        if (error.errCode === 401) {
          wx.redirectTo({
            url: '/pages/user/oauth'
          })
        }
      }
    })
  },
  globalData: {
  }
})