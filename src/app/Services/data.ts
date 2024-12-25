
import db from "../Services/db";
import { signIn, signOut, useSession } from 'next-auth/react';
import { Job } from "../types/next-auth";
import { FieldPacket,QueryResult  } from "mysql2";



const { data: session } = useSession();

export async function GetJobs(userEmail: string): Promise<Job[] | null> {
  try {
    
    const [rows]: [Job[], FieldPacket[]] = await db.query("SELECT * FROM userJob WHERE userID = ?", [userEmail]) as [Job[], FieldPacket[]];

  
    if (!Array.isArray(rows) || rows.length === 0) {
      return null;
    }

    
    return rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Unable to fetch user jobs from the database");
  }
}