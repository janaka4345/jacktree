// "use strict";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "resend",
        pass: "re_CXtNGcPi_7cb8EAcoVndA7bpHRpvhxjSh",
    },
});

// async..await is not allowed in global scope, must use a wrapper
export async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'onbhghghfhffgoarding@resend.dev', // sender address
        to: "manendrikariyawasam24@gmail.com", // list of receivers
        subject: "bogfgfo", // Subject line
        text: "bofgfdo ygfeayyyy", // plain text body
        html: "<b>sup booo yaagfgfdgfaaaaaaaaa</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}

main().catch(console.error);
