const nodemailer = require('nodemailer');


const sendFunc = async options =>{
    //1) create a transporter
    const transporter = nodemailer.createTransport({
      host:process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_password
        }
        // activate in gmail "less secure app" option
    });
      // 2) define the email option
    const mailOptions ={
        from: 'christalebu@gmail.com',
        to: options.email,
        subject: "contact form message",
        text: options.message,
    }
    // 3) actually send the email
    await transporter.sendMail(mailOptions,function(error,info){
      if (error){
        console.log(error);
      }else{
        console.log('Email sent:'+info.response);
      }
    });
  }

export default sendFunc;
