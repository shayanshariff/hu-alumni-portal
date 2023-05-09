const PersonEndpointResponse = require('proxycurl-js-linkedin-profile-scraper');
const { Person, ApiClient } = PersonEndpointResponse;

let defaultClient = ApiClient.instance;
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = 'LTSm2poHsgDnzud7JYITkg';

const getProfileData = async (url) => {
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

  return new Promise((resolve, reject) => {
    apiInstance.personProfileEndpoint(url, fallbackToCache, opts, (error, data, response) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { getProfileData };