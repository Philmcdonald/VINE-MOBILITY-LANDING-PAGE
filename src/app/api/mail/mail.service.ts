import { createTransport, Transporter } from "nodemailer";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { MailOptionsAttributeI } from "./interface";
import fs from "fs";
import Handlebars from "handlebars";
import Mail from "nodemailer/lib/mailer";

class MailService {
    private transporter: Transporter<SMTPTransport.SentMessageInfo> =
        createTransport(
            {
                service: "Gmail",
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "godspoweraino@gmail.com",
                    pass: "xddasgqlpgfqnsts ",
                    // pass: "xdda sgql pgfq nsts ",
                },
            }

            //   {
            //     host: "your.smtp.host", // Replace with actual SMTP host
            //     port: 587, // Replace with actual port number; cannot be an empty string
            //     requireTLS: true,
            //     auth: {
            //         user: "your_username", // SMTP username
            //         pass: "your_password", // SMTP password
            //     },
            //     tls: {
            //         ciphers: "SSLv3",
            //         rejectUnauthorized: false,
            //     },
            // } as SMTPTransport.Options
        ); // Explicitly set type as SMTPTransport.Options

    public async sendMail(options: MailOptionsAttributeI) {
        const {
            to,
            from,
            subject,
            body,
            templateName,
            replacements,
            attachments,
        } = options;

        const mailData: Mail.Options = {
            from: `${
                from ? from : "serverConfig.EMAIL_SENDER"
            } <${"serverConfig.EMAIL_USER"}>`,
            to: to,
            subject: subject,
        };

        if (templateName) {
            const filePath = `./src/resources/templates/${templateName}.html`;
            const source = fs.readFileSync(filePath, "utf-8").toString();
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
