//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
var p = 2

Page(util._obj({
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    goodslist:[],
    specialList:[]
  },
  //事件处理函数 n
  onLoad: function () {
    console.log(wx._.indexOf([1, 2, 3], 2))
    var that = this
    wx.request({
      url: 'https://api.ilovelook.cn/api/kolshop/gogoboi/coms/list?code=gogoboi',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res=>{
        var url = []
        if (res.data[1].component_type===1){
          url = res.data[1].component_list
        }
        for(var i=0;i<url.length;i++){
          url[i] = url[i].covers[0].url_small
        }
        this.setData({
          imgUrls:url
        })
      }
    })
    wx.request({
      url: 'https://api.ilovelook.cn/api/kolshop/dabing/coms/list?code=dabing', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: res=> {
        var result = []
        var list = []
        res.data.forEach(function(item){
          if (item.component_type === 6){
            list.push(item.goodslist.sku)
          }
        })
        list[0].forEach(function(item){
          var temp = {}
          temp.name = item.name
          temp.image = item.images[0].url_small
          temp.price = item.price2.value_display
          temp.priceOff = item.price2.price_off_text
          temp.brand = item.brand.name
          result.push(temp);
        })
        this.setData({
          goodslist: result
        })
     }
    })

    wx.request({
      url: 'https://api.ilovelook.cn/api/kolshop/gogoboi/goodslist/list?code=gogoboi', //仅为示例，并非真实的接口地址
      data: { page: 'pn:1;l:6', limit: 6 },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res=> {
        var rel = []
        res.data.goods_lists.forEach(function(item){
          var lists = {}
          lists.cover = item.covers
          lists.sku = item.sku
          rel.push(lists)
        })
        this.setData({
          specialList: rel
        })
      }
    })
    
  },
  lower: function () {
    var that = this
    wx.request({
      url: 'https://api.ilovelook.cn/api/kolshop/gogoboi/goodslist/list?code=gogoboi', //仅为示例，并非真实的接口地址
      data: { page: 'pn:'+p+';l:6', limit: 6 },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        var rel = []
        var length = that.data.specialList.length
        if (res.data.goods_lists.toString() != '' ){
          res.data.goods_lists.forEach(function (item) {
            var lists = {}
            lists.cover = item.covers
            lists.sku = item.sku
            rel.push(lists)
          })
          var param = {};
          for(let i=0; i<6 ; i++){
            var string = "specialList[" + `${length++}` + "]"
            param[string] = rel[i];
          }
          this.setData(param) 
        }

      }
    })
    p++;
  }  
  // onReachBottom:function(){
  //   var that = this
  //   wx.request({
  //     url: 'https://api.ilovelook.cn/api/kolshop/gogoboi/goodslist/list?code=gogoboi', //仅为示例，并非真实的接口地址
  //     data: { page: 'pn:'+p+';l:6', limit: 6 },
  //     method: 'POST',
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success: res => {
  //       console.log(res.data)
  //       var rel = []
  //       var length = that.data.specialList.length
  //       if (res.data.goods_lists.toString() != '' ){
  //         res.data.goods_lists.forEach(function (item) {
  //           var lists = {}
  //           lists.cover = item.covers
  //           lists.sku = item.sku
  //           rel.push(lists)
  //         })
  //         console.log(rel)
  //         console.log(rel[0].sku[0])
  //         console.log(length)
  //         var param = {};
  //        for(let i=0; i<6 ; i++){
  //          var string = "specialList[" + `${length++}` + "]"
  //          param[string] = rel[i];
  //       }
  //        this.setData(param) 

  //         // this.setData({
  //         //   'specialList[{{length}}] ': rel[1],
  //         //   'specialList[7]': rel[2],
  //         //   'specialList[8]': rel[3],
  //         //   'specialList[9]': rel[4],
  //         //   'specialList[10]': rel[5],
  //         //   'specialList[11]': rel[6]
  //         // })
  //       }
        
  //     }
  //   })
  //   p++;
  // }  

}))
