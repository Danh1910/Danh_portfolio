import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// cấu hình transporter (SMTP Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "danhsgu@gmail.com", // Gmail của bạn
    pass: "soujfqbjrtpfrfxt", // App Password (16 ký tự)
  },
});

app.post("/api/feedback", async (req, res) => {
  try {
    const { name, email, feedback } = req.body;

    // 1. Gửi mail về cho bạn (admin)
    await transporter.sendMail({
      from: `"Portfolio Feedback" <yourgmail@gmail.com>`,
      to: "danh123098@gmail.com", // bạn sẽ nhận feedback ở đây
      subject: `New Feedback from ${name}`,
      html: `
        <h3>📩 New Feedback</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${feedback}</p>
      `,
    });

    // 2. Gửi mail xác nhận cho người dùng
    await transporter.sendMail({
      from: `"Danh Tran Portfolio" <yourgmail@gmail.com>`,
      to: email, // chính email người dùng nhập
      subject: "Cảm ơn bạn đã gửi phản hồi",
      html: `
        <p>Xin chào <strong>${name}</strong>,</p>
        <p>Cảm ơn bạn đã gửi phản hồi cho mình. Mình sẽ sớm xem xét và phản hồi lại cho bạn nhé.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Danh Tran</strong></p>
      `,
    });

    res.json({ message: "Feedback received & emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send feedback email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
