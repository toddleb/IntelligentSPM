import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  role: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  companySize: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide more detail"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // For now, just log the contact. In production, integrate with Resend
    console.log("Contact form submission:", data);

    // TODO: Uncomment when Resend is configured
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@intelligentspm.com",
    //   to: "hello@intelligentspm.com",
    //   subject: `New inquiry: ${data.inquiryType}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Company:</strong> ${data.company || "N/A"}</p>
    //     <p><strong>Role:</strong> ${data.role || "N/A"}</p>
    //     <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
    //     <p><strong>Company Size:</strong> ${data.companySize || "N/A"}</p>
    //     <p><strong>Timeline:</strong> ${data.timeline || "N/A"}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
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
