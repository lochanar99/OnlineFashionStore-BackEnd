const express = require("express");
const routes = require("./routes/api");

const mongoose = require("mongoose");

var cors = require("cors");
//const bodyParser = require('body-parser');

const app = express(); // set up an express app

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//connect to mongodb

// mongoose.connect("mongodb://localhost/FashionStore");
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://127.0.0.1:27017/FashionStore", {  // changeddddddddddddddd
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

const uri =
	"mongodb+srv://rashmika:Rashmika@fashionstore-k14re.mongodb.net/fashionstore?retryWrites=true&w=majority";
// path of the mongodb cloud


mongoose.connect(
	uri,
	{ useUnifiedTopology: true, useFindAndModify: false },
	() => {
		console.log("DB connected");
	}
); // Connect to Mongoose and set connection variable



// mongoose.connect('',() => {
// console.log('connects to the db');

// });
app.use('/uploads',express.static('uploads'));
//app.use('/uploads', express.static(process.cwd() + '/uploads'))

// var publicDir = require('path').join(__dirname,'/uploads');
// app.use(express.static(publicDir));
app.use(express.json()); //  useNewUrlParser: true, useFindAndModify: false
app.use(express.urlencoded({ extended: true }));

// app.use('/uploads', require('./routes/uploads'));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use("/api", routes);

// app.use(function (err, req, res, next) {
// 	// handle errors

// 	console.log(err); //ff

// 	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Methods" , "POST, GET, OPTIONS");

// 	next();

// 	res.send(err);
// });

app.listen(process.env.port || 4000, function () {
	// process.env.port useful when host this app

	console.log("now listening for requests");
});
