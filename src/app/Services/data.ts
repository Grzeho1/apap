
import db from "../Services/db";


export async function GetUserByID(id:string) {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        
        // Ověření, zda byl nalezen uživatel
        if (!Array.isArray(rows) ||rows.length === 0) {
          return null; 
        }
    
        return rows[0]; 
      } catch (error) {
        console.error('Database error:', error);
        throw new Error('Unable to fetch user from the database');
      }
    
}