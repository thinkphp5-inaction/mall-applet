import request from "../../utils/request";

//index.js
//获取应用实例
// import { IMyApp } from '../../app'

// const app = getApp<IMyApp>()

Page({
  data: {
    id: 0,
    goods: null
  },
  onLoad(options: any) {
    this.setData!({ id: options.id })
    this.loadGoods()
  },
  loadGoods() {
    const self = this
    request({
      url: `/index/goods/show?id=${this.data.id}`,
      success(goods: any) {
        self.setData!({ goods })
      },
      fail(e: any) {
        wx.showToast({ title: e.errMsg, icon: 'none' })
      }
    })
  },
  onShareAppMessage() {
    return {
      title: this.data.goods.title,
      imageUrl: this.data.goods.thumb,
      path: `/pages/goods/detail?id=${this.data.id}`
    }
  },
  handleBuy() {
    wx.navigateTo({
      url: `/pages/goods/buy?id=${this.data.id}`
    })
  }
})
