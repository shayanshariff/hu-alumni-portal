import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/users';
import { useLocation, Link } from 'react-router-dom';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import axios from 'axios';
import { getProfileData } from '../../api/linkedin.js'

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

  const [inputValue, setInputValue] = useState('');
  const [jsonResult, setJsonResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = getProfileData(inputValue);
    setJsonResult(result);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

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
        <Grid item xs={12} sm={6}>
        <Typography className={classes.subtitle} variant="subtitle1">
          Skills:
        </Typography>
        {profile.skills[0]
          .split('\n')
          .map((skill, index) => (
            <Typography key={index} variant="subtitle1">
              {skill}
            </Typography>
          ))}
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
    <Grid item xs={12}>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {jsonResult && (
        <div>
          <h2>JSON Result:</h2>
          <pre>{JSON.stringify(jsonResult, null, 2)}</pre>
        </div>
      )}
    </div>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subtitle} variant="subtitle1">
        HU ID:
      </Typography>
      <Typography variant="subtitle1">{profile.huID}</Typography>
    </Grid>
    <Grid item xs={12}>
      {/* Additional Grid items for displaying more data, if needed */}
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
    {loggedInUser && loggedInUser.result._id === profile._id && (
      <Grid item xs={12} className={classes.followButtonContainer}>
        <Link to="/edit-profile">
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </Link>
      </Grid>
    )}
  </Grid>
</div>
);
};
export default Profile;