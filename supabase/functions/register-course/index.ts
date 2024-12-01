import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const AIRTABLE_API_KEY = Deno.env.get('AIRTABLE_API_KEY')
const AIRTABLE_BASE_ID = 'appurAABSW6MrSvpN'
const AIRTABLE_TABLE_NAME = 'Course Registrations'

interface RegistrationData {
  full_name: string
  email: string
  phone?: string
  organization?: string
  course_title: string
  course_date: string
  course_price: string
  status?: string
  payment_status?: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { data } = await req.json()

    if (!AIRTABLE_API_KEY) {
      throw new Error('AIRTABLE_API_KEY is required')
    }

    // Create record in Airtable
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [{
          fields: {
            'Full Name': data.full_name,
            'Email': data.email,
            'Phone': data.phone || '',
            'Organization': data.organization || '',
            'Course': data.course_title,
            'Course Date': data.course_date,
            'Price': data.course_price,
            'Registration Status': data.status || 'Pending',
            'Payment Status': data.payment_status || 'Unpaid',
            'Registration Date': new Date().toISOString(),
          },
        }],
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error?.message || 'Failed to create Airtable record')
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})