# ------
9.3日无法使用socket通信连接校园网的门户认证网站
	1. 因为微信小程序不支持socket连接，通过导入socketio.js包并暴露通信方法来实现
	2. 小程序自带的socketconnect方法只能连接在网站上登记过的网址，并且使用wss协议，需要https网址
	3. 使用封装过后的方法
	4. 如果还是不行，那就使用navigator跳转到页面，读取页面传过来的值，再根据值来赋予权限

//以上问题不作考虑，以微信小程序用户凭证登陆，解释为目前服务器限制内网访问

9.4传值验证问暂时搁置（解决），目前开发页面内表单提交和小程序通知
9.8如果数据库没连接成功，一个可能是服务器端没安装MySQL包，一个是网络ip问题，还有可能是代码问题
9.19解决：传值问题
      未解决：服务端对数据库的连接，服务端js文件运行时间问题，网络传值类型问题
9.20解决：数据类型转换，目前做到服务端转换成js对象格式，
9.26目前问题：[]如何使后端js文件持续运行，即确保服务器一直能接受数据并处理
                        []前端确认数据格式和非空问题
                        []对数据库操作插入数据
                        []从数据库中读取数据，并做到传输到前台（涉及权限控制，获得openid问题）
                             （以上服务端对数据库连接）
                        []预约成功通知功能
                        []前端文章列表显示
