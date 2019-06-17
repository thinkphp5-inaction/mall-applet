//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    user: null
  },
  onLoad() {
    this.setData!({ user: app.globalData.user })
  },
  navigateToAddress() {
    wx.navigateTo({
      url: '/pages/address/index'
    })
  },
  navigateToOrders() {
    wx.navigateTo({
      url: '/pages/order/list'
    })
  }
})
