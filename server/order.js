var mysql = require('mysql')
//引入模块
var connection = mysql.createConnection({
  host: '172.17.16.13',
  user: 'root',
  password: 'xuezihan980107',
  database: 'test',
  port: '3306',
})
connection.connect(function (err) {
  if (err) {
    console.log(err)
    return
  }
})
var sql = 'INSERT INTO `order`(nickname,imageurl,user) VALUES(?,?,?)'
var addsal = ['xzh','www.baidu.com','薛子涵']
if (!sql) return
connection.query(sql,addsal,function (err, result) {
  if (err) {
    console.log(err)
    return
  }
  result = JSON.stringify(result)
  //result = JSON.parse(result)
  console.log(result)
})
connection.end(function (err) {
  if (err) {
    return
  } else {
    console.log('连接关闭')
  }
})

