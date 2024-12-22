import { NextRequest, NextResponse } from 'next/server';
import db from "../../Services/db";
import { RowDataPacket } from 'mysql2';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {

  const { email, password } = await req.json(); // Získání dat z požadavku

  if (!email || !password) {
    return NextResponse.json({ message: 'Prosím zadejte email a heslo.' }, { status: 400 });
  }

  try {
    // Dotaz na databázi pro získání uživatelských informací
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ message: 'Neplatné přihlašovací údaje.' }, { status: 401 });
    }

    const user = rows[0] as RowDataPacket;

    // Porovnání hesla (je doporučeno používat hashování pro skutečnou produkci)
    if (password !== user.password) {
      return NextResponse.json({ message: 'Neplatné přihlašovací údaje.' }, { status: 401 });
    }

    

    const JWT_SECRET = 'klic';  // Prozatím tady pro učely testu
    const token = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    // Vrácení informací o uživatelském účtu + token
    return NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name, 
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Chyba při přihlašování:', error);
    return NextResponse.json({ message: 'Chyba serveru.' }, { status: 500 });
  }
}
