"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        user: null
    },
    onLoad: function () {
        this.setData({ user: app.globalData.user });
    },
    navigateToAddress: function () {
        wx.navigateTo({
            url: '/pages/address/index'
        });
    },
    navigateToOrders: function () {
        wx.navigateTo({
            url: '/pages/order/list'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUNELGlCQUFpQjtRQUNmLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1CQUFtQjtTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IG51bGxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoeyB1c2VyOiBhcHAuZ2xvYmFsRGF0YS51c2VyIH0pXG4gIH0sXG4gIG5hdmlnYXRlVG9BZGRyZXNzKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnL3BhZ2VzL2FkZHJlc3MvaW5kZXgnXG4gICAgfSlcbiAgfSxcbiAgbmF2aWdhdGVUb09yZGVycygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9vcmRlci9saXN0J1xuICAgIH0pXG4gIH1cbn0pXG4iXX0=