//获取应用实例
import request from '../../utils/request';

Page({
  data: {
    order: null,
    id: 0
  },
  onLoad(options: any) {
    this.setData!({ id: options.id })
    this.loadOrder()
  },
  loadOrder() {
    wx.showLoading({ title: '加载中' })
    const self = this
    request({
      url: `/index/order/show?id=${this.data.id}`,
      success(order: any) {
        self.setData!({ order })
      },
      fail(e: any) { wx.showToast({ title: e.errMsg, icon: 'none' }) },
      complete() {
        wx.hideLoading()
      }
    })
  },
  handlePay() {
    wx.showLoading({ title: '支付中' })
    const self = this
    request({
      url: `/index/order/pay?order_id=${this.data.id}`,
      success(order: any) {
        wx.showToast({ title: '支付成功' })
        self.setData!({ order })
      },
      fail(e: any) {
        wx.showToast({ title: e.errMsg, icon: 'none' })
      },
      complete() {
        wx.hideLoading()
      }
    })
  }
})
