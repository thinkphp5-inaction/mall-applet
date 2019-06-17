import { baseUrl } from "../config";
/**
 * request 包装方法
 * @param options 
 */
export default function (options: wx.RequestOption | any) {
    options.url = baseUrl + options.url;
    options.header = options.header || {}
    options.header.Authorization = wx.getStorageSync('authorization')
    const oldFail = options.fail
    const oldSuccess = options.success
    options.success = function (data: any) {
        if (data.data.errcode) {
            oldFail && oldFail({ errMsg: data.data.errmsg, errCode: data.data.errcode })
            return
        }
        oldSuccess && oldSuccess(data.data);
    }
    wx.request(options);
}