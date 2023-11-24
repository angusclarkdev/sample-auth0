import { getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

// api/test/route.js
export async function GET(req) {
  const res = new NextResponse
  const session = await getSession();
  console.log('session in route', session); // session undefined here
  
  // console.log(res);
  return Response.json({ session })
}