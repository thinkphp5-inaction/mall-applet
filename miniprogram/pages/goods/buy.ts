import request from "../../utils/request";

//index.js
//获取应用实例
// import { IMyApp } from '../../app'

// const app = getApp<IMyApp>()

Page({
  data: {
    id: 0,
    goods: null,
    addresses: [],
    selectedAddressId: 0,
    loading: false
  },
  onLoad(options: any) {
    this.setData!({ id: options.id })
  },
  onShow() {
    this.loadGoods()
    this.loadAddresses()
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
  loadAddresses() {
    const self = this
    request({
      url: '/index/address/all',
      success(addresses: any) {
        self.setData!({ addresses })
        let selectedAddressId = 0
        addresses.forEach((item: any) => {
          if (item.default) {
            selectedAddressId = item.id
          }
        })
        if (selectedAddressId === 0 && addresses.length > 0) {
          selectedAddressId = addresses[0].id
        }
        self.setData!({ selectedAddressId })
      }
    })
  },
  handleAddressTap(e: any) {
    const id = e.currentTarget.dataset.id
    this.setData!({ selectedAddressId: id })
  },
  handleAddAddress() {
    wx.navigateTo({
      url: '/pages/address/create'
    })
  },
  handleBuy() {
    if (!this.data.selectedAddressId) {
      wx.showToast({ title: '请完善地址信息', icon: 'none' })
      return
    }
    this.buy()
  },
  buy() {
    this.setData!({ loading: true })
    const address: any = this.data.addresses.filter((item: any) => item.id === this.data.selectedAddressId)[0]
    const data = {
      goods_id: this.data.id,
      realname: address.realname,
      phone: address.phone,
      address: address.address
    };
    const self = this
    request({
      url: '/index/goods/buy',
      method: 'POST',
      data,
      success(order: any) {
        self.pay(order)
      },
      fail(e: any) {
        wx.showToast({ title: e.errMsg, icon: 'none' })
        this.setData!({ loading: false })
      }
    })
  },
  pay(order: any) {
    request({
      url: `/index/order/pay?order_id=${order.order_id}`,
      success() {
        setTimeout(() => wx.redirectTo({
          url: `/pages/order/detail?id=${order.order_id}`
        }), 1500)
      },
      fail(e: any) {
        wx.showToast({ title: e.errMsg, icon: 'none' })
      },
      complete() {
        this.setData!({ loading: false })
      }
    })
  }
})
