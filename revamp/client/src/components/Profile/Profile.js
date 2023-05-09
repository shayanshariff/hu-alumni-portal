import React, { useState, useEffect } from 'react';
import { Button, TextField, Card, CardContent, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/users';
import { fetchProfileData } from '../../actions/linkedin';
import { useLocation, Link } from 'react-router-dom';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


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
  const [linkedinUrl, setLinkedinUrl] = useState('');


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
const handleLinkedinUrlChange = (e) => {
    setLinkedinUrl(e.target.value);
  };

  const [fetchedData, setFetchedData] = useState(null);

  const handleFetchProfileData = async () => {
    try {
      const action = await dispatch(fetchProfileData(linkedinUrl));
      console.log('Fetched LinkedIn Profile Data:', action.payload);
      setFetchedData(action.payload); // Set fetched data to state variable
    } catch (error) {
      console.error('Error fetching LinkedIn profile data:', error);
    }
  };

  const renderSection = (title, data) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              {title}
            </Typography>
            <Divider />
            {data.map((item, index) => {
              // Define start and end dates
              const start = new Date(item.starts_at.year, item.starts_at.month - 1, item.starts_at.day);
              const end = item.ends_at ? new Date(item.ends_at.year, item.ends_at.month - 1, item.ends_at.day) : 'Present';
              const startDate = `${start.toLocaleString('default', { month: 'long' })} ${start.getFullYear()}`;
              const endDate = end === 'Present' ? end : `${end.toLocaleString('default', { month: 'long' })} ${end.getFullYear()}`;
              
              return (
                <div key={index} style={{marginBottom: "15px"}}>
                  <Typography variant="body1">
                    {title === 'Experiences' && item.title && item.company && `${item.title} at ${item.company}, ${startDate} - ${endDate}`}
                    {title === 'Education' && item.degree_name && item.field_of_study && item.school && `${item.degree_name} in ${item.field_of_study} at ${item.school}, ${startDate} - ${endDate}`}
                  </Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    );
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
    {loggedInUser && loggedInUser.result._id !== profile._id && (
  <>
    <Grid item xs={12}>
      <TextField
        label="LinkedIn URL"
        variant="outlined"
        fullWidth
        value={linkedinUrl}
        onChange={handleLinkedinUrlChange}
      />
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" color="primary" onClick={handleFetchProfileData}>
        Fetch LinkedIn Profile Data
      </Button>
      <Typography variant="body2" color="textSecondary">
        Note: Your LinkedIn profile must be public to fetch your data
      </Typography>
    </Grid>
  </>
)}
{fetchedData && (
          <Grid container spacing={2}>
            {renderSection('Experiences', fetchedData.experiences)}
            {renderSection('Education', fetchedData.education)}
          </Grid>
        )}
  </Grid>
  {loggedInUser && loggedInUser.result._id === profile._id && (
  <>
    <Grid item xs={12}>
      <TextField
        label="LinkedIn URL"
        variant="outlined"
        fullWidth
        value={linkedinUrl}
        onChange={handleLinkedinUrlChange}
      />
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" color="primary" onClick={handleFetchProfileData}>
        Fetch LinkedIn Profile Data
      </Button>
      <Typography variant="body2" color="textSecondary">
        Note: Your LinkedIn profile must be public to fetch your data
      </Typography>
    </Grid>
  </>
)}
{fetchedData && (
          <Grid container spacing={2}>
            {renderSection('Experiences', fetchedData.experiences)}
            {renderSection('Education', fetchedData.education)}
          </Grid>
        )}

  
</div>
);
};
export default Profile;