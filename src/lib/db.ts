
import mysql from 'mysql2/promise';
import { dbConfig } from './data';

// Create a pool of connections
const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection function
export const testDbConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to MySQL database');
    connection.release();
    return true;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    return false;
  }
};

// Execute a query with parameters
export const executeQuery = async (query: string, params: any[] = []) => {
  try {
    const [results] = await pool.execute(query, params);
    return results;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Helper function to get colleges by course ID from the database
export const getCollegesByCourseFromDb = async (courseId: string) => {
  try {
    const query = `
      SELECT c.college_id, c.name, c.location, c.avg_salary, c.fees, c.application_deadline, c.course_id,
             GROUP_CONCAT(cc.company_name) as companies
      FROM colleges c
      LEFT JOIN college_companies cc ON c.college_id = cc.college_id
      WHERE c.course_id = ?
      GROUP BY c.college_id
    `;
    const results = await executeQuery(query, [courseId]);
    
    return Array.isArray(results) ? results.map(row => ({
      id: row.college_id,
      name: row.name,
      location: row.location,
      avgSalary: row.avg_salary,
      fees: row.fees,
      companies: row.companies ? row.companies.split(',') : [],
      applicationDeadline: row.application_deadline,
      courseId: row.course_id
    })) : [];
  } catch (error) {
    console.error('Error fetching colleges by course:', error);
    return [];
  }
};

export default pool;
