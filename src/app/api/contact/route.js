import { connectDB } from '@/config/mongodb'; 
import Contact from '@/model/Contact';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // 1. Connect to MongoDB
    await connectDB();

    // 2. Save to database
    const savedContact = await Contact.create({ name, email, message });

    // 3. Respond with success
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message saved successfully!',
        data: savedContact
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong.' }),
      { status: 500 }
    );
  }
}
