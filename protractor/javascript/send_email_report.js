/**
 * @file       send_email_report.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Evgeniia Bessarab  Evgeniia.Bessarab @billing.ru.
 * @fileoverview Файл для отправки отчетов тестировщикам
 *
 * @created    [29.08.2015] Evgeniia Bessarab
 */

var nodemailer = require("nodemailer"),
    smtpTransport = require('nodemailer-smtp-transport'),
    fs = require('fs'),
    inputParams = process.argv,
    subsystemChanged = inputParams[2],
    version = inputParams[3],
    subsystemBuildNumber = inputParams[4],
    buildNumber = inputParams[5],
    recipientList = inputParams[6],
    source='',
    buildResult='Passed';

if (!inputParams.length || inputParams.length < 6) {
  process.stderr.write("No input params provided, at least one is required");
  process.exit(1);
}

// create reusable transport method (opens pool of SMTP connections)
var transporter = nodemailer.createTransport(smtpTransport({
  from: 'unknownsender-noreply@billing.ru',
  host: 'smtp.net.billing.ru',
  port: 25,
  tls: {rejectUnauthorized: false},
  auth: {
    user: "sbmsg_autotest",
    pass: "Gh$348fD"
  },
  debug:true
}));


source+='<a style="color: red; font-weight:bold; font-size:18px; " href="http://srv2-drse-isg15:8888/saf/fb57b32a7ac8de3d8e484dbca71fdd725c2129b9/upload/'+subsystemChanged+'/'+version+'/builds/'+subsystemBuildNumber+'">Собрать эту сборку на SAF</a>';
try {
  source +=fs.readFileSync('./report.html');
} catch (err) {
  console.log("##teamcity[buildProblem description='There are no report']");
  console.error(err);
  process.exit(1);
}

source += '<H2>Autotests on protractor for '+subsystemChanged+' '+version+':</H2>';
try {
  source +=fs.readFileSync('../result/protractor-demo-tests-report.html');
} catch (err) {
  console.log("##teamcity[buildProblem description='There are no data in folder result']");
  console.error(err);
  process.exit(1);
}

if(source.indexOf("Failed:") >= 0 || source.indexOf("Error:") >= 0 ) {
   buildResult='Failed';
}

// setup e-mail data with unicode symbols
var mailOptions = {
  from: 'unknownsender-noreply@billing.ru',
  to: recipientList,
  // Subject line
  subject:  buildResult + "!!! Protractor results for "+subsystemChanged+" "+version+" (buildID="+buildNumber+")",
  // html body
  html: source};

transporter.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("Message sent: " + response.message);
  }
});