//引入模块
var mysql = require('mysql')

var querystring=require('querystring')

var http = require('http')

var hostname = '172.17.0.8';

var formdata=''

var port = 9000;
//创建服务器
var server = http.createServer(function(req, res) {
	var body = ""
    	//每当接收到请求体数据，累加到post中
		req.on('data', function (chunk) {
			body += chunk  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
			console.log("chunk:",chunk.toString())
			formdata = JSON.parse(body)
			console.log(formdata)
		})
		req.on('end', function(){    
			res.end('success')
		});
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.write('{"name": "Darth Vader"}');
 
	// 有参数=先调用 res.write(data, encoding) 之后再调用 res.end().
	res.end('<h1>Hello world!</h1>');
});
server.listen(port, hostname, function() {
	// hostname是const类型时，可以用以下写法
	//console.log('Server running at http://${hostname}:${port}/');
 
	console.log('Server running at http://%s:%s', hostname, port);
	// console.log('Server running at http://' + hostname + ':' + port + '/');
});