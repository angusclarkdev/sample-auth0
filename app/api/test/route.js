import { getSession } from '@auth0/nextjs-auth0';

// api/test/route.js
export async function GET() {
  const session = await getSession();
  console.log('session', session); // session undefined here
  return NextResponse.json({ foo: 'bar' });
}