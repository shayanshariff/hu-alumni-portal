import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/users';
import { useLocation } from 'react-router-dom';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import axios from 'axios';


// import ProxycurlApi from 'proxycurl-js-linkedin-profile-scraper';

// let defaultClient = ProxycurlApi.ApiClient.instance;                  // LinkedIN API
// let BearerAuth = defaultClient.authentications['BearerAuth'];
// BearerAuth.accessToken = 'LTSm2poHsgDnzud7JYITkg';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    marginRight: theme.spacing(1),
  },
  followButtonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Profile = ({ user: passedUser }) => {



  // const [profileUrl, setProfileUrl] = useState('');
  // const [profileData, setProfileData] = useState(null);
  // const [error, setError] = useState(null);

  // let apiInstance = new ProxycurlApi.PeopleAPIApi();
  // let url = profileUrl;
  // let fallbackToCache = 'on-error';s
  // let opts = {
  //   'useCache': 'if-present', 
  //   'skills': 'exclude', 
  //   'inferredSalary': 'exclude',                   //LinkedIn API 45-70
  //   'personalEmail': 'exclude', 
  //   'personalContactNumber': 'exclude',
  //   'twitterProfileId': 'exclude', 
  //   'facebookProfileId': 'exclude', 
  //   'githubProfileId': 'exclude', 
  //   'extra': 'exclude' 
  // };

  // apiInstance.personProfileEndpoint(url, fallbackToCache, opts, (error, data, response) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('API called successfully. Returned data: ' + data);
  //   }
  // });

  const classes = useStyles();
  const location = useLocation();
  const profile = location.state?.user;
  console.log("profile", profile);
  const [isFollowing, setIsFollowing] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (loggedInUser && profile) {
      setIsFollowing(loggedInUser.result.following.includes(profile._id));
    }
  }, [loggedInUser, profile]);


  const handleFollow = async () => {
    if (isFollowing) {
      await dispatch(unfollowUser(profile._id));
      loggedInUser.result.following = loggedInUser.result.following.filter(id => id !== profile._id);
    } else {
      await dispatch(followUser(profile._id));
      loggedInUser.result.following.push(profile._id);
    }
  
    localStorage.setItem('profile', JSON.stringify(loggedInUser));
    setIsFollowing(!isFollowing);
  };
  

  if (!profile) {
    return <div>No user to display</div>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Avatar className={classes.avatar}>{profile.name[0]}</Avatar>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Name:
          </Typography>
          <Typography variant="subtitle1">{profile.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Email:
          </Typography>
          <Typography variant="subtitle1">{profile.email}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Batch:
          </Typography>
          <Typography variant="subtitle1">{profile.batch}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Major:
          </Typography>
          <Typography variant="subtitle1">{profile.major}</Typography>
        </Grid>
        {profile.isgradschool && (
          <Grid item xs={12} sm={6}>
            <Typography className={classes.subtitle} variant="subtitle1">
              Grad School:
            </Typography>
            <Typography variant="subtitle1">{profile.gradschool}</Typography>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Location:
          </Typography>
          <Typography variant="subtitle1">{profile.location}</Typography>
        </Grid>
        {profile.isemployed && (
          <Grid item xs={12} sm={6}>
            <Typography className={classes.subtitle} variant="subtitle1">
              Employment:
            </Typography>
            <Typography variant="subtitle1">{profile.employment}</Typography>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            HU ID:
          </Typography>
          <Typography variant="subtitle1">{profile.huID}</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <form onSubmit={handleSubmit}>
            <label>
              LinkedIn Profile URL:
              <input type="text" value={profileUrl} onChange={(event) => setProfileUrl(event.target.value)} />
            </label>
            <button type="submit">Search</button>
          </form>
          {profileData && (
            <div>
              <h2>{data.full_name}</h2> 
              <p>{data.occupation}</p>
              <p></p>
            </div>
          )}
          {error && (
            <p>{error}</p>
          )} */}
        </Grid>
        {loggedInUser && loggedInUser.result._id !== profile._id && (
          <Grid item xs={12} className={classes.followButtonContainer}>
            <Button
              variant="contained"
              color={isFollowing ? 'secondary' : 'primary'}
              onClick={handleFollow}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Profile;