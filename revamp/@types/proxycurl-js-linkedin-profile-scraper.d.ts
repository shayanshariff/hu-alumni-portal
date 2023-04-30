declare module 'proxycurl-js-linkedin-profile-scraper'{
    export function personProfileEndpoint(url:string, fallbackToCache:string , opts: array): Promise<any>;
  }