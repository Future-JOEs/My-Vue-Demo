var Goods = require('../models/goods');
var mongoose = require('mongoose');
var User = require('../models/user')
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall', {
  useMongoClient: true
});

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});

var data = [{
    "productId": "201710003",
    "productName": "平衡车",
    "salePrice": 1999,
    "productImage": "pingheng.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710004",
    "productName": "头戴式耳机-3",
    "salePrice": 80,
    "productImage": "2.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710005",
    "productName": "小米笔记本",
    "salePrice": 3549,
    "productImage": "note.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710006",
    "productName": "小米6",
    "salePrice": 2499,
    "productImage": "mi6.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710002",
    "productName": "智能插线板",
    "salePrice": 59,
    "productImage": "6.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710007",
    "productName": "自拍杆",
    "salePrice": 39,
    "productImage": "zipai.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710008",
    "productName": "小米净水器",
    "salePrice": 1999,
    "productImage": "8.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710009",
    "productName": "IH 电饭煲",
    "salePrice": 999,
    "productImage": "9.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710010",
    "productName": "小米电视4A",
    "salePrice": 2099,
    "productImage": "10.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710011",
    "productName": "Ear1000",
    "salePrice": 1000,
    "productImage": "11.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710012",
    "productName": "Ear1100",
    "salePrice": 1100,
    "productImage": "12.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710013",
    "productName": "Ear2000",
    "salePrice": 2000,
    "productImage": "13.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710014",
    "productName": "Ear1600",
    "salePrice": 1600,
    "productImage": "14.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710015",
    "productName": "Ear1200",
    "salePrice": 1200,
    "productImage": "15.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710016",
    "productName": "Ear700",
    "salePrice": 700,
    "productImage": "16.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710017",
    "productName": "小钢炮蓝牙音箱",
    "salePrice": 129,
    "productImage": "1.jpg",
    "productUrl": ""
  },
  {
    "productId": "201710018",
    "productName": "智能摄像机",
    "salePrice": 389,
    "productImage": "photo.jpg",
    "productUrl": ""
  }
]

for (var i = 0; i < data.length; i++) {
  Goods.create(data[i])
}

