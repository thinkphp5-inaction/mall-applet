"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        list: [],
        page: 1,
        hasMore: true
    },
    onLoad: function () {
        this.handleRefresh();
    },
    onPullDownRefresh: function () {
        this.handleRefresh();
    },
    onReachBottom: function () {
        if (!this.data.hasMore) {
            return;
        }
        var self = this;
        var page = this.data.page + 1;
        request_1.default({
            url: '/index/order/list',
            data: {
                page: page
            },
            success: function (data) {
                self.setData({ list: self.data.list.concat(data), page: page, hasMore: data.length >= 10 });
            }
        });
    },
    handleRefresh: function () {
        var self = this;
        request_1.default({
            url: '/index/order/list',
            data: {
                page: this.data.page
            },
            success: function (data) {
                self.setData({ list: data, page: 1, hasMore: data.length >= 10 });
                wx.stopPullDownRefresh();
            }
        });
    },
    handleItemTap: function (e) {
        wx.navigateTo({
            url: "/pages/order/detail?id=" + e.currentTarget.dataset.id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBMEM7QUFRMUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUMvQixpQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxNQUFBO2FBQ0w7WUFDRCxPQUFPLFlBQUMsSUFBUztnQkFDZixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ3hGLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixpQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNyQjtZQUNELE9BQU8sWUFBQyxJQUFTO2dCQUNmLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDbEUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDMUIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxhQUFhLFlBQUMsQ0FBTTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUEwQixDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFJO1NBQzVELENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVxdWVzdFwiO1xuXG4vL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbGlzdDogW10sXG4gICAgcGFnZTogMSxcbiAgICBoYXNNb3JlOiB0cnVlXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmhhbmRsZVJlZnJlc2goKVxuICB9LFxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB0aGlzLmhhbmRsZVJlZnJlc2goKVxuICB9LFxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGlmICghdGhpcy5kYXRhLmhhc01vcmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmRhdGEucGFnZSArIDFcbiAgICByZXF1ZXN0KHtcbiAgICAgIHVybDogJy9pbmRleC9vcmRlci9saXN0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3MoZGF0YTogYW55KSB7XG4gICAgICAgIHNlbGYuc2V0RGF0YSEoeyBsaXN0OiBzZWxmLmRhdGEubGlzdC5jb25jYXQoZGF0YSksIHBhZ2UsIGhhc01vcmU6IGRhdGEubGVuZ3RoID49IDEwIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgaGFuZGxlUmVmcmVzaCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHJlcXVlc3Qoe1xuICAgICAgdXJsOiAnL2luZGV4L29yZGVyL2xpc3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBwYWdlOiB0aGlzLmRhdGEucGFnZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3MoZGF0YTogYW55KSB7XG4gICAgICAgIHNlbGYuc2V0RGF0YSEoeyBsaXN0OiBkYXRhLCBwYWdlOiAxLCBoYXNNb3JlOiBkYXRhLmxlbmd0aCA+PSAxMCB9KVxuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBoYW5kbGVJdGVtVGFwKGU6IGFueSkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL29yZGVyL2RldGFpbD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICB9KVxuICB9XG59KVxuIl19