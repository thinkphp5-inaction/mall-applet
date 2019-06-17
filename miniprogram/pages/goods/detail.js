"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        id: 0,
        goods: null
    },
    onLoad: function (options) {
        this.setData({ id: options.id });
        this.loadGoods();
    },
    loadGoods: function () {
        var self = this;
        request_1.default({
            url: "/index/goods/show?id=" + this.data.id,
            success: function (goods) {
                self.setData({ goods: goods });
            },
            fail: function (e) {
                wx.showToast({ title: e.errMsg, icon: 'none' });
            }
        });
    },
    onShareAppMessage: function () {
        return {
            title: this.data.goods.title,
            imageUrl: this.data.goods.thumb,
            path: "/pages/goods/detail?id=" + this.data.id
        };
    },
    handleBuy: function () {
        wx.navigateTo({
            url: "/pages/goods/buy?id=" + this.data.id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBUTFDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxDQUFDO1FBQ0wsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELE1BQU0sWUFBQyxPQUFZO1FBQ2pCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLGlCQUFPLENBQUM7WUFDTixHQUFHLEVBQUUsMEJBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBSTtZQUMzQyxPQUFPLFlBQUMsS0FBVTtnQkFDaEIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQTtZQUMxQixDQUFDO1lBQ0QsSUFBSSxZQUFDLENBQU07Z0JBQ1QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQ2pELENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQy9CLElBQUksRUFBRSw0QkFBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFJO1NBQy9DLENBQUE7SUFDSCxDQUFDO0lBQ0QsU0FBUztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUseUJBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBSTtTQUMzQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL3JlcXVlc3RcIjtcblxuLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcblxuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGlkOiAwLFxuICAgIGdvb2RzOiBudWxsXG4gIH0sXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHsgaWQ6IG9wdGlvbnMuaWQgfSlcbiAgICB0aGlzLmxvYWRHb29kcygpXG4gIH0sXG4gIGxvYWRHb29kcygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHJlcXVlc3Qoe1xuICAgICAgdXJsOiBgL2luZGV4L2dvb2RzL3Nob3c/aWQ9JHt0aGlzLmRhdGEuaWR9YCxcbiAgICAgIHN1Y2Nlc3MoZ29vZHM6IGFueSkge1xuICAgICAgICBzZWxmLnNldERhdGEhKHsgZ29vZHMgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsKGU6IGFueSkge1xuICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogZS5lcnJNc2csIGljb246ICdub25lJyB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGhpcy5kYXRhLmdvb2RzLnRpdGxlLFxuICAgICAgaW1hZ2VVcmw6IHRoaXMuZGF0YS5nb29kcy50aHVtYixcbiAgICAgIHBhdGg6IGAvcGFnZXMvZ29vZHMvZGV0YWlsP2lkPSR7dGhpcy5kYXRhLmlkfWBcbiAgICB9XG4gIH0sXG4gIGhhbmRsZUJ1eSgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC9wYWdlcy9nb29kcy9idXk/aWQ9JHt0aGlzLmRhdGEuaWR9YFxuICAgIH0pXG4gIH1cbn0pXG4iXX0=