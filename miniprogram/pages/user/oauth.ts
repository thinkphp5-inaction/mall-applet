//index.js
//获取应用实例
import request from '../../utils/request';
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
    data: {
        loading: false
    },
    onLoad() {
    },
    handleGetUserInfo(e: any) {
        const userInfo = e.detail.userInfo
        const self = this;
        self.setData!({ loading: true })
        wx.login({
            success({ code }) {
                request({
                    url: '/index/user/oauth',
                    method: 'POST',
                    data: {
                        code,
                        nickname: userInfo.nickName,
                        avatar: userInfo.avatarUrl
                    },
                    success(data: any) {
                        wx.setStorageSync('authorization', data.token)
                        delete data.token
                        app.globalData.user = data
                        wx.switchTab({ url: '/pages/index/index' })
                    },
                    fail(e: any) {
                        wx.showToast({ title: e.errMsg, icon: 'none' })
                    },
                    complete() {
                        self.setData!({ loading: false })
                    }
                })
            }
        })
    }
})
