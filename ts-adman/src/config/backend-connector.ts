import { HttpDestinationOrFetchOptions } from '@sap-cloud-sdk/connectivity';

export class BackendConnector {
  private static destination: HttpDestinationOrFetchOptions;
  private static apikey: string;

  public static getDestination(): HttpDestinationOrFetchOptions {
    if (this.destination == null) {
      // Get the environment variables
      const destinationName: string = process.env.S4_DESTINATION;
      const url: string = process.env.S4_URL;
      const username: string = process.env.S4_USERNAME;
      const password: string = process.env.S4_PASSWORD;

      if (destinationName != null) {
        // Get the destination via the Destination service
        // of Cloud Foundry, in the SCP.
        this.destination = {
          destinationName: destinationName,
        };
      } else {
        // Create the destination at run time,
        // using the URI and credentials
        // provided in the environment variables.
        if (username != null && password != null) {
          // BasicAuthentication
          this.destination = {
            url: url,
            username: username,
            password: password,
          };
        } else {
          // NoAuthentication
          this.destination = {
            url: url,
          };
        }
      }
    }
    return this.destination;
  }

  public static getApikey(): string {
    if (this.apikey == null) {
      if (process.env.S4_APIKEY == null) this.apikey = '';
      else this.apikey = process.env.S4_APIKEY;
    }
    return this.apikey;
  }
}
