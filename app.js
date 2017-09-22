//app.js
const util = require('./utils/util.js')
App({
  onLaunch: function () {
    // //引入 underscore.js，挂载在 wx._ 下
    // const _ = require('./underscore.modified.js')
    // wx.__proto__._ = _
    
    // //挂载setCookie和getCookie
    // wx.__proto__.setCookie = function setCookie(name, value, expires, path, domain, secure) {
    //   var CookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    //   if (expires instanceof Date) {
    //     CookieText += "; expires=" + expires.toGMTString();
    //   }
    //   if (path) {
    //     CookieText += "; path=" + path;
    //   }
    //   if (domain) {
    //     CookieText += "; domain=" + domain;
    //   }
    //   if (secure) {
    //     CookieText += "; secure=" + secure;
    //   }
    //   wx.setStorage({
    //     key: "name",
    //     data: CookieText
    //   })
    // }
    // wx.__proto__.getCookie = function getCookie(name) {
    //   wx.getStorage({
    //     key: 'name',
    //     success: function (res) {
    //       console.log(res.data);
    //       var cookieName = encodeURIComponent(name) + "=",
    //         cookieStart = res.data.indexOf(cookieName),
    //         cookieValue = null;

    //       if (cookieStart > -1) {
    //         var cookieEnd = res.data.indexOf(";", cookieStart);
    //         if (cookieEnd == -1) {
    //           cookieEnd = res.data.length;
    //         }
    //         cookieValue = decodeURIComponent(res.data.substring(cookieStart + cookieName.length, cookieEnd));
    //       }
    //       return cookieValue;
    //     }
    //   })

    // }
    // //测试
    // wx.setCookie("name", "Nicholas", "/ooo","www.rrr.com",new Date("January 1,2010"))
    // wx.getCookie("name")
    // console.log(wx._.indexOf([1, 2, 3], 2))
    //以上导致会在手机上无法预览
  }
})
