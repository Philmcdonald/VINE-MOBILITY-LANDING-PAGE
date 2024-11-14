// import { createTransport, Transporter } from "nodemailer";
// import SMTPTransport from "nodemailer/lib/smtp-transport";
// import { MailOptionsAttributeI } from "./interface";
// import fs from "fs";
// import path from "path";
// import Handlebars from "handlebars";
// import Mail from "nodemailer/lib/mailer";

// class MailService {
//   private transporter: Transporter<SMTPTransport.SentMessageInfo> =
//     createTransport({
//       service: "Gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "Seunphilip95@gmail.com",
//         pass: "kaabbqymglpkqgse",
//       },
//     });

//   public async sendMail(options: MailOptionsAttributeI) {
//     const { to, subject, body, templateName, replacements, attachments } =
//       options;

//     const mailData: Mail.Options = {
//       from: '"Vine Mobility" <Seunphilip95@gmail.com>',
//       to: to,
//       subject: subject,
//     };

//     if (templateName) {
//       console.log(templateName);

//       // const templatePath = `./src/app/api/mail/templates/${templateName}.html`;
//       // const source = fs.readFileSync(templatePath, "utf-8");

//       const templatePath = path.resolve(
//         __dirname,
//         "../../../../../public/templates",
//         `${templateName}.html`
//       );

//       const source = fs.readFileSync(templatePath, "utf-8");

//       // const source = fs.readFileSync(templatePath, "utf-8");

//       // const templatePath = path.join(
//       //   __dirname,
//       //   "templates",
//       //   `${templateName}.html`
//       // );

//       console.log(source);

//       const template = Handlebars.compile(source);
//       const html = template(replacements);

//       mailData.html = html;
//     } else if (body) {
//       mailData.html = body;
//     } else {
//       console.log("Body template is required");
//       // throw new BadRequestError("Body or template is required.");
//     }

//     if (attachments) {
//       mailData.attachments = attachments;
//     }

//     this.transporter.sendMail(
//       mailData,
//       (error: Error, info: SMTPTransport.SentMessageInfo) => {
//         if (error) {
//           console.log(`Error in sending mail: ${error}`);
//           // throw new ApplicationError(
//           //   500,
//           //   "Email could not be sent at this moment.",
//           //   [error]
//           // );
//         }
//         console.log(`Email ${info.messageId} sent: ${info.response}`);
//         return info;
//       }
//     );
//   }
// }

// export default new MailService();

import { createTransport, Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { MailOptionsAttributeI } from "./interface";
import Handlebars from "handlebars";
import Mail from "nodemailer/lib/mailer";
import axios from "axios"; // To fetch templates via HTTP

class MailService {
  private transporter: Transporter<SMTPTransport.SentMessageInfo> =
    createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "Seunphilip95@gmail.com",
        pass: "kaabbqymglpkqgse", // Use environment variables in production
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

    // Check if a template is provided
    if (templateName) {
      console.log(`Loading template: ${templateName}`);

      // Resolve template path (works for both local and production environments)
      let templateSource: string;

      // In production (Vercel), fetch the template via HTTP
      const templateUrl = `http://localhost:3000/templates/${templateName}.html`;

      try {
        const response = await axios.get(templateUrl);
        templateSource = response.data;
        console.log("Template loaded successfully from production");

        // Compile the template using Handlebars
        const template = Handlebars.compile(templateSource);
        const html = template(replacements); // Inject replacements into the template

        mailData.html = html; // Attach compiled HTML to the email data
      } catch (error) {
        console.log(`Error loading template from HTTP: ${error.message}`);
        throw new Error("Error loading the email template from the HTTP URL");
      }
    } else if (body) {
      // If no template, fallback to using the body passed in the options
      mailData.html = body;
    } else {
      console.log("Body or template is required.");
      throw new Error("Body or template is required.");
    }

    // Attach any attachments to the email, if provided
    if (attachments) {
      mailData.attachments = attachments;
    }

    try {
      // Send the email
      const info = await this.transporter.sendMail(mailData);
      console.log(`Email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      console.log(`Error in sending mail: ${error.message}`);
      throw new Error(`Error sending email: ${error.message}`);
    }
  }
}

export default new MailService();
