//app/api/login/route.ts 
import { NextRequest, NextResponse } from 'next/server';
import db from "../../Services/db";
import { RowDataPacket } from 'mysql2';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';


export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  console.log("Zadané údaje:", { email, password }); 

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    console.log("Výsledky dotazu:", rows); 

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ message: 'Neplatné přihlašovací údaje.' }, { status: 401 });
    }

    const user = rows[0] as RowDataPacket;

    if (password !== user.password) {
      console.log("Neplatné heslo");
      return NextResponse.json({ message: 'Neplatné přihlašovací údaje.' }, { status: 401 });
    }

    const JWT_SECRET = process.env.JWT_SECRET!;
    const token = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({
      token,
      user: { id: user.id, email: user.email, name: user.name },
    }, { status: 200 });
  } catch (error) {
    console.error("Chyba serveru:", error);
    return NextResponse.json({ message: 'Chyba serveru.' }, { status: 500 });
  }
}
