var chalk = require('chalk');
var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/MEAN';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
  email: {type: String},
  name: {type: String},
  dob: {type: Date},
  gender:{type:String},
  department:{type:String},
  age:{type:Number}
});

var studentDetailsSchema = new mongoose.Schema({
  id: { type: Number },
  subject: { type: String },
  fee: { type: String },
  department: { type : String }
});

mongoose.model( 'Employee', employeeSchema );
mongoose.model('StudentDetailsSchema', studentDetailsSchema);

