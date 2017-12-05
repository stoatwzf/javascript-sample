var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
	res.render('contact', {title: 'Contact Us'});
});
router.post('/', function (req, res, next){
	var required = ['name', 'email', 'message'],
		missing = [],
		isFilled = function (field){
			return field !== undefined && field !== '';
		},
		submess = {
			status: 1,
			response: 'Form posted successfully'
		};

	missing = required.filter(function (prop){
		return !isFilled(req.body[prop]);
	});
	if (missing.length){
		submess.status = 0;
		submess.response = 'Please fill out all required fields (' + missing.join(',') + ')';
		res.render('contact', {submess : submess});
	} else {
		var emailjs = require('emailjs'),
			server = emailjs.server.connect({
				user: 'stoatwzf@gmail.com',
				password: 'Sncj.12580',
				host: 'smtp.gmail.com',
				ssl: true
			}),
			emailBody = 'From: ' + req.body.name + '<' + req.body.email + '>' + '\n';

		emailBody += 'Message: ' + req.body.message + '\n\n';
		emailBody += 'Sent automatically from Node server on ' + Date();
		server.send({
			from: 'stoat@163.com',
			to: 'stoatwzf@gmail.com',
			subject: 'Contact form submission',
			text: emailBody
		}, function (err, message){
			submess.response = 'email success';
			res.render('contact', {submess : submess});
		});
	}
	
});

module.exports = router;