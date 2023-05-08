import Person from 'proxycurl-js-linkedin-profile-scraper';
import PersonEndpointResponse from 'proxycurl-js-linkedin-profile-scraper/dist/model/PersonEndpointResponse';

let defaultClient = PersonEndpointResponse.ApiClient.instance;
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = 'LTSm2poHsgDnzud7JYITkg';

module.exports = {
  getProfileData: async (url) => {
    let apiInstance = new PersonEndpointResponse.PeopleAPIApi();
    let fallbackToCache = 'on-error';
    let opts = {
        'useCache': 'if-present', 
        'skills': 'exclude', 
        'inferredSalary': 'exclude',
        'personalEmail': 'exclude', 
        'personalContactNumber': 'exclude',
        'twitterProfileId': 'exclude', 
        'facebookProfileId': 'exclude', 
        'githubProfileId': 'exclude', 
        'extra': 'exclude' 
  };

    apiInstance.personProfileEndpoint(url, fallbackToCache, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            return data;
        }
    });
  }
}
