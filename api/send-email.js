const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS হেডার যোগ করো যাতে ফর্ম থেকে কল করা যায়
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS রিকোয়েস্ট হ্যান্ডেল করো (CORS preflight)
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
      const data = new URLSearchParams(body);
      const name = data.get('name');
      const email = data.get('email');
      const message = data.get('message');

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
