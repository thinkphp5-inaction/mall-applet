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
        console.log('onRefresh');
    },
    onReachBottom: function () {
        if (!this.data.hasMore) {
            return;
        }
        var self = this;
        var page = this.data.page + 1;
        request_1.default({
            url: '/index/goods/list',
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
            url: '/index/goods/list',
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
            url: "/pages/goods/detail?id=" + e.currentTarget.dataset.id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUEwQztBQVExQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUMvQixpQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxNQUFBO2FBQ0w7WUFDRCxPQUFPLFlBQUMsSUFBUztnQkFDZixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ3hGLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixpQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNyQjtZQUNELE9BQU8sWUFBQyxJQUFTO2dCQUNmLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDbEUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDMUIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxhQUFhLFlBQUMsQ0FBTTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUEwQixDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFJO1NBQzVELENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVxdWVzdFwiO1xuXG4vL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbGlzdDogW10sXG4gICAgcGFnZTogMSxcbiAgICBoYXNNb3JlOiB0cnVlXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmhhbmRsZVJlZnJlc2goKVxuICB9LFxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBjb25zb2xlLmxvZygnb25SZWZyZXNoJylcbiAgfSxcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS5oYXNNb3JlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBwYWdlID0gdGhpcy5kYXRhLnBhZ2UgKyAxXG4gICAgcmVxdWVzdCh7XG4gICAgICB1cmw6ICcvaW5kZXgvZ29vZHMvbGlzdCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKGRhdGE6IGFueSkge1xuICAgICAgICBzZWxmLnNldERhdGEhKHsgbGlzdDogc2VsZi5kYXRhLmxpc3QuY29uY2F0KGRhdGEpLCBwYWdlLCBoYXNNb3JlOiBkYXRhLmxlbmd0aCA+PSAxMCB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGhhbmRsZVJlZnJlc2goKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICByZXF1ZXN0KHtcbiAgICAgIHVybDogJy9pbmRleC9nb29kcy9saXN0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZTogdGhpcy5kYXRhLnBhZ2VcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKGRhdGE6IGFueSkge1xuICAgICAgICBzZWxmLnNldERhdGEhKHsgbGlzdDogZGF0YSwgcGFnZTogMSwgaGFzTW9yZTogZGF0YS5sZW5ndGggPj0gMTAgfSlcbiAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgaGFuZGxlSXRlbVRhcChlOiBhbnkpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC9wYWdlcy9nb29kcy9kZXRhaWw/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==