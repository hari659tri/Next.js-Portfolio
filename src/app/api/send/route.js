import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_NtT97w2g_GAAQLaNFa1XWVJRubRZDik2r");
const fromEmail = process.env.FROM_EMAIL;
const recipientEmail = process.env.RECIPIENT_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, recipientEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
