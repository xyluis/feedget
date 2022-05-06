import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
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