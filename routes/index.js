var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth',function(req, res){
	res.send('Welcome to auth');
});

router.post('/reg',function(req,res){
	console.log(req.body) //接收前端通过Post提交的数据
	let {user,pwd} = req.body;
	//使用mongoose提供方法，讲User与pwd存储至数据库
	new UserModel({//一条具体的数据
		user:user,
		pwd:pwd
	}).save().then(()=>{
		res.send({code:1,msg:'注册成功'})
	})
})
module.exports = router;
