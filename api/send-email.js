const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS হেডার (ফর্ম থেকে কল করার জন্য)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      // raw body থেকে পার্স করো (application/x-www-form-urlencoded)
      const params = new URLSearchParams(body);
      const name = params.get('name');
      const email = params.get('email');
      const message = params.get('message');

      console.log('Received data:', { name, email, message }); // Vercel Logs-এ দেখতে পাবে

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD
        }
      });

      await transporter.sendMail({
        from: `"Contact Form" <${email}>`,
        to: process.env.RECEIVER_EMAIL || 'your.email@example.com',
        subject: `New Message from ${name}`,
        text: message,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });
};
