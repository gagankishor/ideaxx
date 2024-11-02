import { NextResponse } from 'next/server';

export function middleware(req) {
  const host = req.headers.get('host');
  const url = req.nextUrl.clone();

  // Redirect HTTP to HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
