import * as dotenv from 'dotenv';
dotenv.config();

export function getAPIKey(): string {
  const API_KEY = process.env.API_KEY;
  if (!API_KEY) {
    throw new Error(`API Key not found in env file!`);
  }
  return API_KEY;
}
