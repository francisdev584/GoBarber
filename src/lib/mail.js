import Nodemailer from 'nodemailer';

import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transpoter = Nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transpoter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
