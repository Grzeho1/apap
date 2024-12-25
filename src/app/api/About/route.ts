import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import db from "../../Services/db";
import { Job } from "../../types/next-auth";
import { FieldPacket, QueryResult } from "mysql2";



export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userEmail = session.user.email;

    const [rows]: [QueryResult, FieldPacket[]] = await db.query("SELECT * FROM userJob join users on users.id = userJob.userID WHERE users.email = ?", [userEmail]);


    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ message: "No mail found" }, { status: 404 });
    }

    
    const jobs: Job[] = rows as Job[];

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Unable to fetch" }, { status: 500 });
  }
}
