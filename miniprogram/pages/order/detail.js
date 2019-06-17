"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        order: null,
        id: 0
    },
    onLoad: function (options) {
        this.setData({ id: options.id });
        this.loadOrder();
    },
    loadOrder: function () {
        wx.showLoading({ title: '加载中' });
        var self = this;
        request_1.default({
            url: "/index/order/show?id=" + this.data.id,
            success: function (order) {
                self.setData({ order: order });
            },
            fail: function (e) { wx.showToast({ title: e.errMsg, icon: 'none' }); },
            complete: function () {
                wx.hideLoading();
            }
        });
    },
    handlePay: function () {
        wx.showLoading({ title: '支付中' });
        var self = this;
        request_1.default({
            url: "/index/order/pay?order_id=" + this.data.id,
            success: function (order) {
                wx.showToast({ title: '支付成功' });
                self.setData({ order: order });
            },
            fail: function (e) {
                wx.showToast({ title: e.errMsg, icon: 'none' });
            },
            complete: function () {
                wx.hideLoading();
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQTBDO0FBRTFDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxJQUFJO1FBQ1gsRUFBRSxFQUFFLENBQUM7S0FDTjtJQUNELE1BQU0sWUFBQyxPQUFZO1FBQ2pCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFDRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixpQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLDBCQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUk7WUFDM0MsT0FBTyxZQUFDLEtBQVU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7WUFDMUIsQ0FBQztZQUNELElBQUksWUFBQyxDQUFNLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUNoRSxRQUFRO2dCQUNOLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNsQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFNBQVM7UUFDUCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLGlCQUFPLENBQUM7WUFDTixHQUFHLEVBQUUsK0JBQTZCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBSTtZQUNoRCxPQUFPLFlBQUMsS0FBVTtnQkFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO2dCQUMvQixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO1lBQzFCLENBQUM7WUFDRCxJQUFJLFlBQUMsQ0FBTTtnQkFDVCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7WUFDakQsQ0FBQztZQUNELFFBQVE7Z0JBQ04sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2xCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG9yZGVyOiBudWxsLFxuICAgIGlkOiAwXG4gIH0sXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHsgaWQ6IG9wdGlvbnMuaWQgfSlcbiAgICB0aGlzLmxvYWRPcmRlcigpXG4gIH0sXG4gIGxvYWRPcmRlcigpIHtcbiAgICB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiAn5Yqg6L295LitJyB9KVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgcmVxdWVzdCh7XG4gICAgICB1cmw6IGAvaW5kZXgvb3JkZXIvc2hvdz9pZD0ke3RoaXMuZGF0YS5pZH1gLFxuICAgICAgc3VjY2VzcyhvcmRlcjogYW55KSB7XG4gICAgICAgIHNlbGYuc2V0RGF0YSEoeyBvcmRlciB9KVxuICAgICAgfSxcbiAgICAgIGZhaWwoZTogYW55KSB7IHd4LnNob3dUb2FzdCh7IHRpdGxlOiBlLmVyck1zZywgaWNvbjogJ25vbmUnIH0pIH0sXG4gICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGhhbmRsZVBheSgpIHtcbiAgICB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiAn5pSv5LuY5LitJyB9KVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgcmVxdWVzdCh7XG4gICAgICB1cmw6IGAvaW5kZXgvb3JkZXIvcGF5P29yZGVyX2lkPSR7dGhpcy5kYXRhLmlkfWAsXG4gICAgICBzdWNjZXNzKG9yZGVyOiBhbnkpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfmlK/ku5jmiJDlip8nIH0pXG4gICAgICAgIHNlbGYuc2V0RGF0YSEoeyBvcmRlciB9KVxuICAgICAgfSxcbiAgICAgIGZhaWwoZTogYW55KSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiBlLmVyck1zZywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9LFxuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuIl19