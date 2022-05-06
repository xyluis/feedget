import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "51af53dcc2be69",
    pass: "129174a05b40aa"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Zorin Team <hi@zorin.com.br>',
      to: 'Luís <luis@zorin.com.br>',
      subject,
      html: body
    })
  }
}