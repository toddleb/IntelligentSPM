import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Valid email required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    // For now, just log the email. In production, integrate with Resend
    console.log("Newsletter signup:", email);

    // TODO: Uncomment when Resend is configured
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "dispatch@intelligentspm.com",
    //   to: email,
    //   subject: "Welcome to the IntelligentSPM Dispatch",
    //   html: "<p>Thanks for subscribing! You'll hear from us weekly.</p>",
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
