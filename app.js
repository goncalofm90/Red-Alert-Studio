//----------------------------------------
//DEPENDENCIES & CONFIGS
//----------------------------------------
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var multer = require("multer");
var paypal = require("paypal-rest-sdk");
var upload = multer({dest: './public/uploads/'});
var fs = require("fs");

paypal.configure({
  'mode': 'live', //sandbox or live
  'client_id': 'clientidhere',
  'client_secret': 'clientsecrethere'
});

var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(express.static(__dirname + "/public"));
app.set ("view engine", "ejs");

//----------------------------------------
//LANDING PAGE
//----------------------------------------
app.get ("/" , function(req, res){
	res.render("../EN/views/landing");
	
});

//----------------------------------------
//LANDING PAGE PT
//----------------------------------------
app.get ("/landingPT" , function(req, res){
	res.render("../PT/views/landingPT");
	
});

//----------------------------------------
//ABOUT
//----------------------------------------
app.get ("/about" , function(req, res){
	res.render("../EN/views/about");
});

//----------------------------------------
//ABOUT PT
//----------------------------------------
app.get ("/aboutPT" , function(req, res){
	res.render("../PT/views/aboutPT");
});

//----------------------------------------
//MEDIA
//----------------------------------------
app.get ("/media" , function(req, res){
	res.render("../EN/views/media");
});

//----------------------------------------
//MEDIA PT
//----------------------------------------
app.get ("/mediaPT" , function(req, res){
	res.render("../PT/views/mediaPT");
});

//----------------------------------------
//SERVICES
//----------------------------------------
app.get ("/services" , function(req, res){
	res.render("../EN/views/services");
});

//----------------------------------------
//SERVICES PT
//----------------------------------------
app.get ("/servicesPT" , function(req, res){
	res.render("../PT/views/servicesPT");
});

//----------------------------------------
//SERVICES POST
//----------------------------------------
app.post ("/services" , urlencodedParser, upload.single("file"),  function(req, res){
	
	const transporter = nodemailer.createTransport({
  host: 'host',
  port: 465,
  secure: true,
  auth: {
    user: 'user',
    pass: 'password' // naturally, replace both with your real credentials or an application-specific password
  }
});

var name = req.body.name;
var subject = req.body.subject;
var email = req.body.email;
var name = req.body.name;
var track = req.body.track;
var paypal = req.body.paypal;
var number = req.body.number;
var message = req.body.message;
var tempo =req.body.tempo;
var signature= req.body.signature;
var sampleRate = req.body.sampleRate;
var instrument = req.body.instrument;
var file = req.file.originalname;



const mailOptions = {
  from: email,
  subject: track,
  to: "mail",
  html: 
	"<p>Hello Red Alert Studios,</p>" + name + " has purchased a drum track for his/her track with the account " + paypal+ "." + "<p>The track is named"  + "\"" + track + "\"" + "." + "<p>The tempo is " + tempo + "." + "<p>The signature is " + signature + "." + "<p>The Sample Rate is " + sampleRate + "." + "<p>Please reply to the request by contacting: " + number + "<p>You can also send an e-mail to: " + email + "." + "<p>Here is the song summary/description :</p>" + "\"" + message + "\"" + "<p>Best Regards," + "<p>Your friendly neighborhood Mailbot." + "<p></p>" + '<div class = "container"><img height=250 width=400 src = "https://i.ibb.co/bsmJ7pf/Untitled-copy.png"></div>',
  attachments: [{
	  filename: file + ".mp3",
	  path: req.file.path,
	  
  }] 
		
		
		
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
	
	res.render("../EN/views/payment");
});

//----------------------------------------
//SERVICES POST PT
//----------------------------------------
app.post ("/servicesPT" , urlencodedParser, upload.single("file"),  function(req, res){
	
	const transporter = nodemailer.createTransport({
  host: 'host',
  port: 465,
  secure: true,
  auth: {
    user: 'user',
    pass: 'password' // naturally, replace both with your real credentials or an application-specific password
  }
});

var name = req.body.name;
var subject = req.body.subject;
var email = req.body.email;
var name = req.body.name;
var track = req.body.track;
var paypal = req.body.paypal;
var number = req.body.number;
var message = req.body.message;
var tempo =req.body.tempo;
var signature= req.body.signature;
var sampleRate = req.body.sampleRate;
var instrument = req.body.instrument;
var file = req.file.originalname;



const mailOptions = {
  from: email,
  subject: track,
  to: "mail",
  html: 
	"<p>Hello Red Alert Studios,</p>" + name + " has purchased a drum track for his/her track with the account " + paypal+ "." + "<p>The track is named"  + "\"" + track + "\"" + "." + "<p>The tempo is " + tempo + "." + "<p>The signature is " + signature + "." + "<p>The Sample Rate is " + sampleRate + "." + "<p>Please reply to the request by contacting: " + number + "<p>You can also send an e-mail to: " + email + "." + "<p>Here is the song summary/description :</p>" + "\"" + message + "\"" + "<p>Best Regards," + "<p>Your friendly neighborhood Mailbot." + "<p></p>" + '<div class = "container"><img height=250 width=400 src = "https://i.ibb.co/bsmJ7pf/Untitled-copy.png"></div>',
  attachments: [{
	  filename: file + ".mp3",
	  path: req.file.path,
	  
  }] 
		
		
		
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
	
	res.render("../PT/views/paymentPT");
});

//----------------------------------------
//CONTACT & SUPPORT
//----------------------------------------
app.get ("/contact" , function(req, res){
	res.render("../EN/views/contact");
});

//----------------------------------------
//CONTACT & SUPPORT PT
//----------------------------------------
app.get ("/contactPT" , function(req, res){
	res.render("../PT/views/contactPT");
});


//----------------------------------------
//CONTACT POST
//----------------------------------------
app.post ("/contact" , urlencodedParser,  function(req, res){
	const transporter = nodemailer.createTransport({
  host: 'host',
  port: 465,
  secure: true,
  auth: {
    user: 'user',
    pass: 'password' // naturally, replace both with your real credentials or an application-specific password
  }
});

var name = req.body.name;
var subject = req.body.subject;
var email = req.body.email;
var name = req.body.name;
var track = req.body.track;
var number = req.body.number;
var message = req.body.message;
var instrument = req.body.instrument;

const mailOptions = {  
  from: email,
  subject: subject,
  to: "mail",
  html: 
	"<p>Hello Red Alert Studios,</p>" + name + " has tried to contact you regarding the track(s) " + "\"" + track + "\"" + "." + "<p>They would like a track for a different instrument, namely, " + instrument + "." + 
	"<p>Please reply to the request by contacting: " + number + "<p>You can also send an e-mail to: " + email + "." + "<p>Here is the message:</p>" + "\"" + message + "\"" + "<p>Best Regards," + "<p>Your friendly neighborhood Mailbot." + "<p></p>" + '<div class = "container"><img height=250 width=400 src = "https://i.ibb.co/bsmJ7pf/Untitled-copy.png"></div>'
		
		
		
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
	
	res.render("../EN/views/contact-success");
});

//----------------------------------------
//CONTACT POST PT
//----------------------------------------
app.post ("/contactPT" , urlencodedParser,  function(req, res){
	const transporter = nodemailer.createTransport({
  host: 'host',
  port: 465,
  secure: true,
  auth: {
    user: 'user',
    pass: 'password' // naturally, replace both with your real credentials or an application-specific password
  }
});

var name = req.body.name;
var subject = req.body.subject;
var email = req.body.email;
var name = req.body.name;
var track = req.body.track;
var number = req.body.number;
var message = req.body.message;
var instrument = req.body.instrument;


const mailOptions = {
  from: email,
  subject: subject,
  to: "mail",
  html: 
	"<p>Hello Red Alert Studios,</p>" + name + " has tried to contact you regarding the track(s) " + "\"" + track + "\"" + "." + "<p>They would like a track for a different instrument, namely, " + instrument + "." + 
	"<p>Please reply to the request by contacting: " + number + "<p>You can also send an e-mail to: " + email + "." + "<p>Here is the message:</p>" + "\"" + message + "\"" + "<p>Best Regards," + "<p>Your friendly neighborhood Mailbot." + "<p></p>" + '<div class = "container"><img height=250 width=400 src = "https://i.ibb.co/bsmJ7pf/Untitled-copy.png"></div>'
		
		
		
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
	
	res.render("../PT/views/contact-successPT");
});



 
//----------------------------------------
//PAYMENT
//----------------------------------------
app.get ("/payment" , function(req, res){
	res.render("../EN/views/payment");
});

//----------------------------------------
//PAYMENT PT
//----------------------------------------
app.get ("/paymentPT" , function(req, res){
	res.render("../PT/views/payment");
});
//----------------------------------------
//PAYMENT SUCCESS
//----------------------------------------
app.get ("/paymentsuccess" , function(req, res){
	const payerId = req.query.PayerID;
	const paymentId = req.query.paymentId;
	
	const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "EUR",
            "total": "50.00"
        }
    }]
  };
	
 paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.render("../EN/views/paymentsuccess");
    }
});
});

app.get('/paymentcancel', (req, res) => res.render("../EN/views/paymentcancel"));

//----------------------------------------
//PAYMENT SUCCESS PT
//----------------------------------------
app.get ("/paymentsuccessPT" , function(req, res){
	const payerId = req.query.PayerID;
	const paymentId = req.query.paymentId;
	
	const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "EUR",
            "total": "50.00"
        }
    }]
  };
	
 paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.render("../PT/views/paymentsuccessPT");
    }
});
});

app.get('/paymentcancelPT', (req, res) => res.render("../PT/views/paymentcancelPT"));
//----------------------------------------
//PAYMENT POST 
//----------------------------------------
app.post ("/payment" , function(req, res){
	

	const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "https://wdb-mlebt.run-eu-central1.goorm.io/paymentsuccess",
        "cancel_url": "https://wdb-mlebt.run-eu-central1.goorm.io/paymentcancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Red Alert Studio Drum Track",
                "sku": "item",
                "price": "50.00",
                "currency": "EUR",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "EUR",
            "total": "50.00"
        },
        "description": "Remember, this payment is the first half of the value, after the work is done you will be contacted to pay the remaining half."
    }]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
			if(payment.links[i].rel == "approval_url"){
				res.redirect(payment.links[i].href);
			}
		}
    }
});
});

//----------------------------------------
//PAYMENT POST PT
//----------------------------------------
app.post ("/paymentPT" , function(req, res){
	

	const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "https://wdb-mlebt.run-eu-central1.goorm.io/paymentsuccessPT",
        "cancel_url": "https://wdb-mlebt.run-eu-central1.goorm.io/paymentcancelPT"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Faixa de bateria Red Alert Studio",
                "sku": "item",
                "price": "50.00",
                "currency": "EUR",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "EUR",
            "total": "50.00"
        },
        "description": "Lembra-te, este pagamento é pela primeira metade do valor, depois de gravada a faixa serás contactado para pagar a segunda metade."
    }]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
			if(payment.links[i].rel == "approval_url"){
				res.redirect(payment.links[i].href);
			}
		}
    }
});
});

//----------------------------------------
//SERVER LISTEN
//----------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
