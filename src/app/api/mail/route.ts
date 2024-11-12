import { NextRequest, NextResponse } from "next/server";
// import mailService from "./mail.service";

export async function POST(req: NextRequest) {
  console.log(req);
  try {
    // Parse the request body to get the email details
    // const { to, subject, body, templateName, replacements, attachments } =
    //   await req.json();

    // Set up the mail options
    // const mailOptions = {
    //   to,
    //   from: "godspoweraino@gmail.com", // Update with your 'from' email address
    //   subject,
    //   body,
    //   templateName,
    //   replacements,
    //   attachments, // Optional: Add attachments
    // };

    // Send the email
    // await mailService.sendMail(mailOptions);

    // Respond with a success message
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  console.log(req);
  return NextResponse.json(
    { message: "Email Template route" },
    { status: 200 }
  );
}
