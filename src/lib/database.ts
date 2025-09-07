import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
  return open({
    filename: './research.db',
    driver: sqlite3.Database
  });
}

export async function initDb() {
  const db = await openDb();
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS research (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic TEXT NOT NULL,
      report TEXT NOT NULL,
      steps TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  return db;
}

export async function saveResearch(data: any) {
  const db = await initDb();
  
  await db.run(
    'INSERT INTO research (topic, report, steps) VALUES (?, ?, ?)',
    data.topic,
    JSON.stringify(data.report),
    JSON.stringify(data.completedSteps)
  );
  
  await db.close();
}

export async function getResearchHistory() {
  const db = await initDb();
  
  const results = await db.all(
    'SELECT * FROM research ORDER BY created_at DESC LIMIT 10'
  );
  
  await db.close();
  return results;
}
