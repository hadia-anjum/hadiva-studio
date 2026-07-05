import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Webhook handler for syncing Clerk users to MongoDB
export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const { data, type } = payload;

    // Verify type of Clerk event
    if (type === 'user.created' || type === 'user.updated') {
      const { id, email_addresses, first_name, last_name, image_url } = data;
      const email = email_addresses?.[0]?.email_address;
      const name = [first_name, last_name].filter(Boolean).join(' ') || 'Guest';

      if (!email) {
        return NextResponse.json({ error: 'Missing email' }, { status: 400 });
      }

      // Upsert the user profile in MongoDB
      const user = await prisma.user.upsert({
        where: { id },
        update: {
          email,
          name,
          image: image_url,
        },
        create: {
          id,
          email,
          name,
          image: image_url,
          role: 'CLIENT',
        },
      });

      return NextResponse.json({ message: 'User synced successfully', user });
    }

    if (type === 'user.deleted') {
      const { id } = data;
      await prisma.user.delete({
        where: { id },
      });
      return NextResponse.json({ message: 'User deleted successfully' });
    }

    return NextResponse.json({ message: 'Webhook event type ignored' });
  } catch (error: any) {
    console.error('Clerk webhook sync error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
