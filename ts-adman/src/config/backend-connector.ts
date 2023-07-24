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
    const destinationName: string = process.env.S4_DESTINATION;
    const url: never = process.env.S4_URL as never;
    const username: never = process.env.S4_USERNAME as never;
    const password: never = process.env.S4_PASSWORD as never;

    if (destinationName) {
      //if env configured for S4HANA, return complete Destination
      return {
        destinationName,
        url,
        username,
        password,
      };
    }
    return {
      url, //return only the url, no destination was configured
    };
  }
}
