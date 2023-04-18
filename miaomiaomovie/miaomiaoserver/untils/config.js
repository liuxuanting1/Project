/*
 * @Description:
 * @Version: 2.0
 * @Author: Liu Xuanting
 * @Date: 2023-04-17 15:40:54
 * @LastEditors: Liu Xuanting
 * @LastEditTime: 2023-04-17 15:48:28
 */

var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
// 全局对象
var Mongoose = {
	url : 'mongodb://localhost:27017/miaomiao',
	// 方法
	connect(){
		mongoose.connect(this.url , { useNewUrlParser: true }, (err)=>{
			if(err){
				console.log('数据库连接失败');
				return;
			}
			console.log('数据库连接成功');
		});
	}
};

var Email = {
	config : {
		// 指定邮箱  SSMTP
		host: "smtp.qq.com",
	    port: 587,
	    auth: {
			// 发件人
	      user: 'new666@qq.com',
		//   密钥
	      pass: 'xxxxxxxxxx'
	    }
	},

	get transporter(){
		return nodemailer.createTransport(this.config);
	},
	get verify(){
		// 生成随机数验证码
		return Math.random().toString().substring(2,6);
	},
	get time(){
		return Date.now();
	}
};

var Head = {
	baseUrl : 'http://localhost:3000/uploads/'
}
// 对外接口
module.exports = {
	Mongoose,
	Email,
	Head
};