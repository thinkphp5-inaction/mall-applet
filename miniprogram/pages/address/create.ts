//获取应用实例
import request from '../../utils/request';

Page({
  data: {
    loading: false
  },
  onLoad() {
  },
  handleSubmit(e: any) {
    const dataset = e.detail.value
    if (!dataset.realname) {
      wx.showToast({ title: '请填写联系人', icon: 'none' })
      return
    }
    if (!dataset.phone) {
      wx.showToast({ title: '请填写手机', icon: 'none' })
      return
    }
    if (!dataset.address) {
      wx.showToast({ title: '请填写地址', icon: 'none' })
      return
    }

    const self = this
    self.setData!({ loading: false })
    request({
      url: '/index/address/create',
      method: 'POST',
      data: dataset,
      success() {
        wx.showToast({ title: '添加地址成功', icon: 'success' })
        setTimeout(() => wx.navigateBack({ delta: 1 }), 1500)
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
