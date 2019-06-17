"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./utils/request");
App({
    onLaunch: function () {
        var self = this;
        request_1.default({
            url: '/index/user/info',
            success: function (data) {
                self.globalData.user = data;
            },
            fail: function (error) {
                console.log(error);
                if (error.errCode === 401) {
                    wx.redirectTo({
                        url: '/pages/user/oauth'
                    });
                }
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBVXRDLEdBQUcsQ0FBUztJQUNWLFFBQVE7UUFDTixJQUFNLElBQUksR0FBRyxJQUFJLENBQUE7UUFFakIsaUJBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsT0FBTyxZQUFDLElBQVM7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQzdCLENBQUM7WUFDRCxJQUFJLFlBQUMsS0FBVTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO29CQUN6QixFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNaLEdBQUcsRUFBRSxtQkFBbUI7cUJBQ3pCLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLEVBQ1g7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi91dGlscy9yZXF1ZXN0XCI7XG5cbi8vYXBwLnRzXG5leHBvcnQgaW50ZXJmYWNlIElNeUFwcCB7XG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz86IChpbmZvOiB3eC5Vc2VySW5mbykgPT4gdm9pZFxuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlcj86IGFueTtcbiAgfVxufVxuXG5BcHA8SU15QXBwPih7XG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgXG4gICAgcmVxdWVzdCh7XG4gICAgICB1cmw6ICcvaW5kZXgvdXNlci9pbmZvJyxcbiAgICAgIHN1Y2Nlc3MoZGF0YTogYW55KSB7XG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS51c2VyID0gZGF0YVxuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGlmIChlcnJvci5lcnJDb2RlID09PSA0MDEpIHtcbiAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyL29hdXRoJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gIH1cbn0pIl19