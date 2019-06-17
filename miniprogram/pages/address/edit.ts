//获取应用实例
import request from '../../utils/request';

Page({
  data: {
    loading: false,
    address: null,
    id: 0
  },
  onLoad(options: any) {
    const id = options.id
    this.setData!({ id })
    this.loadAddress()
  },
  loadAddress() {
    const self = this
    request({
      url: `/index/address/show?id=${this.data.id}`,
      success(address: any) {
        self.setData!({ address })
      }
    })
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
    self.setData!({ loading: true })

    request({
      url: '/index/address/update',
      method: 'POST',
      data: {
        id: this.data.id,
        realname: dataset.realname,
        phone: dataset.phone,
        address: dataset.address,
        default: dataset.default
      },
      success() {
        wx.showToast({ title: '保存成功' })
        setTimeout(() => wx.navigateBack({ delta: 1 }), 1500)
      },
      fail(e: any) {
        wx.showToast({ title: e.errMsg, icon: 'none' })
      },
      complete() {
        self.setData!({ loading: false })
      }
    })

  },
  handleDelete() {
    const self = this
    wx.showModal({
      title: '提示',
      content: '确定删除该地址吗?',
      showCancel: true,
      success(data) {
        if (data.confirm) {
          self.delete()
        }
      }
    })
  },
  delete() {
    wx.showLoading({ title: '删除中' })
    request({
      url: `/index/address/delete?id=${this.data.id}`,
      success() {
        wx.showToast({ title: '删除成功' })
        setTimeout(() => wx.navigateBack({ delta: 1 }), 1500)
      },
      complete() {
        wx.hideLoading()
      }
    })
  }
})
