//获取应用实例
import request from '../../utils/request';

Page({
  data: {
    list: []
  },
  onShow() {
    this.handleRefresh()
  },
  handleRefresh() {
    const self = this
    request({
      url: '/index/address/all',
      success(list: any) {
        self.setData!({ list })
      },
      complete() {
        wx.stopPullDownRefresh()
      }
    })
  },
  onPullDownRefresh() {
    this.handleRefresh()
  },
  navigateToCreate() {
    wx.navigateTo({
      url: '/pages/address/create'
    })
  },
  handleItemTap(e: any) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/address/edit?id=${id}`
    })
  }
})
