import { createTransport, Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { MailOptionsAttributeI } from "./interface";
import fs from "fs";
// import path from "path";
import Handlebars from "handlebars";
import Mail from "nodemailer/lib/mailer";

class MailService {
  private transporter: Transporter<SMTPTransport.SentMessageInfo> =
    createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "Seunphilip95@gmail.com",
        pass: "kaabbqymglpkqgse",
      },
    });

  public async sendMail(options: MailOptionsAttributeI) {
    const { to, subject, body, templateName, replacements, attachments } =
      options;

    const mailData: Mail.Options = {
      from: '"Vine Mobility" <Seunphilip95@gmail.com>',
      to: to,
      subject: subject,
    };

    if (templateName) {
      const templatePath = "./templates/${templateName}.html";
      const source = fs.readFileSync(templatePath, "utf-8");
      
      const template = Handlebars.compile(source);
      const html = template(replacements);

      mailData.html = html;
    } else if (body) {
      mailData.html = body;
    } else {
      console.log("Body template is required");
      // throw new BadRequestError("Body or template is required.");
    }

    if (attachments) {
      mailData.attachments = attachments;
    }

    this.transporter.sendMail(
      mailData,
      (error: Error, info: SMTPTransport.SentMessageInfo) => {
        if (error) {
          console.log(`Error in sending mail: ${error}`);
          // throw new ApplicationError(
          //   500,
          //   "Email could not be sent at this moment.",
          //   [error]
          // );
        }
        console.log(`Email ${info.messageId} sent: ${info.response}`);
        return info;
      }
    );
  }
}

export default new MailService();
