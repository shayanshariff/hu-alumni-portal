let getProfileData;

import('../../client/src/api/linkedin.js').then((linkedinApi) => {
  getProfileData = linkedinApi.getProfileData;
});

export const fetchProfileData = async (req, res) => {
  const { url } = req.body;
    console.log("hello");
  try {
    const profileData = await getProfileData(url);
    console.log("data", profileData);
    res.status(200).json(profileData);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ message: error.message });
  }
};
