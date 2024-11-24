import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailData {
  type: 'registration' | 'corporate';
  data: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: EmailData = await req.json();
    console.log('Received email request:', { type, data });

    let subject, html;
    if (type === 'registration') {
      subject = `New Course Registration: ${data.course_title}`;
      html = `
        <h2>New Course Registration</h2>
        <p><strong>Course:</strong> ${data.course_title}</p>
        <p><strong>Student Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Organization:</strong> ${data.organization || 'Not provided'}</p>
        <p><strong>Course Date:</strong> ${new Date(data.course_date).toLocaleDateString()}</p>
        <p><strong>Course Price:</strong> ${data.course_price}</p>
      `;
    } else {
      subject = `New Corporate Training Request from ${data.companyName}`;
      html = `
        <h2>New Corporate Training Request</h2>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Course of Interest:</strong> ${data.courseTitle}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    }

    console.log('Sending email with:', { subject });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cihan Digital Academy <cdatraining@cihanmediacomms.com>",
        to: ["cdatraining@cihanmediacomms.com"],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    const data_res = await res.json();
    console.log('Email sent successfully:', data_res);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.error("Error in sendemail function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);