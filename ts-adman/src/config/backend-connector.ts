import { HttpDestinationOrFetchOptions } from '@sap-cloud-sdk/connectivity';
import * as dotenv from 'dotenv';
dotenv.config();

export interface Destination {
  destinationName: string;
  url: string;
  username: string;
  password: string;
}

export class BackendConnector {
  public static getAPIKey(): string {
    const API_KEY = process.env.API_KEY;
    if (!API_KEY) {
      throw new Error(`API Key not found in env file!`);
    }
    return API_KEY;
  }

  public static getDestination(): HttpDestinationOrFetchOptions {
    const url: never = process.env.S4_URL as never;

    if (!url) {
      throw new Error(`Sandbox URL is empty env file!`);
    }
    return {
      url,
    };
  }
}
