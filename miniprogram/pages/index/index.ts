import request from "../../utils/request";

//index.js
//获取应用实例
// import { IMyApp } from '../../app'

// const app = getApp<IMyApp>()

Page({
  data: {
    list: [],
    page: 1,
    hasMore: true
  },
  onLoad() {
    this.handleRefresh()
  },
  onPullDownRefresh() {
    console.log('onRefresh')
  },
  onReachBottom() {
    if (!this.data.hasMore) {
      return
    }
    const self = this
    const page = this.data.page + 1
    request({
      url: '/index/goods/list',
      data: {
        page
      },
      success(data: any) {
        self.setData!({ list: self.data.list.concat(data), page, hasMore: data.length >= 10 })
      }
    })
  },
  handleRefresh() {
    const self = this
    request({
      url: '/index/goods/list',
      data: {
        page: this.data.page
      },
      success(data: any) {
        self.setData!({ list: data, page: 1, hasMore: data.length >= 10 })
        wx.stopPullDownRefresh()
      }
    })
  },
  handleItemTap(e: any) {
    wx.navigateTo({
      url: `/pages/goods/detail?id=${e.currentTarget.dataset.id}`
    })
  }
})
