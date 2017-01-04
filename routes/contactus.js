var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactus');
});

router.post('/send', function(req, res, next){
	var trasporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'ampitmelving@gmail.com',
			pass: 'Nh66ter15',
		}
	});

	var mailOptions = {
		from: 'Name <name@outlook.com>',
		to: 'ampitmelving@gmail.com',
		subject: 'inquiries',
		text: 'you have a new message... Name: '+req.body.name+ ' Email: '+req.body.email+ 'Items: '+req.body.item+ 'Message: '+req.body.Message,
		html: '<p>You got a new message with the following details..</p><ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+ '</li><li>Items: '+req.body.item+ '</li><li>Message: '+req.body.message+ '</li></ul>'
	};
	trasporter.sendMail(mailOptions, function(error, info){
		if (error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent:'+info.response);
			res.redirect('/');
		}

	});
});

module.exports = router;
