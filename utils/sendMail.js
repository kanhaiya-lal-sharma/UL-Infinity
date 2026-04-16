const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

async function sendMail() {

  try {

    const recipients = [
     // "pravin.garg@universityliving.com",
     // "tanu.srivastava@universityliving.com",
      //"laxminarayan@universityliving.com",
      //"Kumar.Ankit@universityliving.com",
      "kanhaiya.sharma@universityliving.com"
    ];

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "uladmin@theuniversityliving.com",
        pass: "ffhv gnqo hlhp xfcr"
      }
    });

    const templatePath = path.join(__dirname, "../templates/emailTemplate.html");

    for (const email of recipients) {

      let htmlTemplate = fs.readFileSync(templatePath, "utf8");

      // extract name before "."
      const userName = email.split("@")[0].split(".")[0];

      htmlTemplate = htmlTemplate.replace("{{user}}", userName);

      const mailOptions = {
        from: "uladmin@theuniversityliving.com",
        to: email,
        subject: "Ul-Infinity Automation Report",
        html: htmlTemplate
      };

      await transporter.sendMail(mailOptions);

      console.log(`Mail sent to ${email}`);

    }

  } catch (error) {

    console.log("Error sending mail ❌", error);

  }

}


module.exports = sendMail;