import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Testovací logika pro přihlášení
  if (email === 'test@example.com' && password === 'password123') {
    return NextResponse.json({ token: 'fake-jwt-token' });
  } else {
    return NextResponse.json({ error: 'Neplatné přihlašovací údaje' }, { status: 401 });
  }
}

export async function GET() {
  // Tento endpoint vrací jednoduchou odpověď pro GET požadavky
  return NextResponse.json({ message: 'API endpoint je funkční' });
  
}
