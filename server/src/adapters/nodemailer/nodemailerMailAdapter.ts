import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2b0455c2e7e619",
    pass: "62d346ec33ed1d"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <juliakarolina24@gmail.com>',
      to: 'Julinha <juliakarolina24@gmail.com>',
      subject,
      html: body
    })
  }
}