
import { testDbConnection } from './db';

export const initializeDatabase = async () => {
  try {
    const connected = await testDbConnection();
    if (connected) {
      console.log('Database connection initialized successfully');
    } else {
      console.error('Failed to initialize database connection');
    }
    return connected;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
};
