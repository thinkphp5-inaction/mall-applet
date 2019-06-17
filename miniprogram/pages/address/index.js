"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        list: []
    },
    onShow: function () {
        this.handleRefresh();
    },
    handleRefresh: function () {
        var self = this;
        request_1.default({
            url: '/index/address/all',
            success: function (list) {
                self.setData({ list: list });
            },
            complete: function () {
                wx.stopPullDownRefresh();
            }
        });
    },
    onPullDownRefresh: function () {
        this.handleRefresh();
    },
    navigateToCreate: function () {
        wx.navigateTo({
            url: '/pages/address/create'
        });
    },
    handleItemTap: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/address/edit?id=" + id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUEwQztBQUUxQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixpQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixPQUFPLFlBQUMsSUFBUztnQkFDZixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFBO1lBQ3pCLENBQUM7WUFDRCxRQUFRO2dCQUNOLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1lBQzFCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHVCQUF1QjtTQUM3QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsYUFBYSxZQUFDLENBQU07UUFDbEIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNEJBQTBCLEVBQUk7U0FDcEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsaXN0OiBbXVxuICB9LFxuICBvblNob3coKSB7XG4gICAgdGhpcy5oYW5kbGVSZWZyZXNoKClcbiAgfSxcbiAgaGFuZGxlUmVmcmVzaCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHJlcXVlc3Qoe1xuICAgICAgdXJsOiAnL2luZGV4L2FkZHJlc3MvYWxsJyxcbiAgICAgIHN1Y2Nlc3MobGlzdDogYW55KSB7XG4gICAgICAgIHNlbGYuc2V0RGF0YSEoeyBsaXN0IH0pXG4gICAgICB9LFxuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHRoaXMuaGFuZGxlUmVmcmVzaCgpXG4gIH0sXG4gIG5hdmlnYXRlVG9DcmVhdGUoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcvcGFnZXMvYWRkcmVzcy9jcmVhdGUnXG4gICAgfSlcbiAgfSxcbiAgaGFuZGxlSXRlbVRhcChlOiBhbnkpIHtcbiAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAvcGFnZXMvYWRkcmVzcy9lZGl0P2lkPSR7aWR9YFxuICAgIH0pXG4gIH1cbn0pXG4iXX0=