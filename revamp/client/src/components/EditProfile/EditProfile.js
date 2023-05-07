import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, TextField, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { updateUser} from '../../actions/users';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  updateButtonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const EditProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedInUser = JSON.parse(localStorage.getItem('profile'));
  const [userData, setUserData] = useState(loggedInUser.result);
  const [skills, setSkills] = useState(userData.skills[0].split('\n'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSkillsChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleDeleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUserData = { ...userData, skills: [skills.join('\n')] };
    console.log('Before updating:', userData.location);
    console.log('After updating:', updatedUserData.location);
    await dispatch(updateUser(loggedInUser.result._id, updatedUserData));
    localStorage.setItem('profile', JSON.stringify({ ...loggedInUser, result: updatedUserData }));
    history.push({ pathname: `/profile`, state: { user: updatedUserData } });
  };
  

  return (
    <div className={classes.root}>
      <Typography variant="h4">Edit Profile</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={userData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={userData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              name="batch"
              label="Batch"
              variant="outlined"
              fullWidth
              value={userData.batch}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              name="major"
              label="Major"
              variant="outlined"
              fullWidth
              value={userData.major}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              name="location"
              label="Location"
              variant="outlined"
              fullWidth
              value={userData.location}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Skills:</Typography>
            {skills.map((skill, index) => (
              <Box display="flex" alignItems="center" key={index}>
                <TextField
                  className={classes.textField}
                  name={`skill${index}`}
                  label={`Skill ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  value={skill}
                  onChange={(e) => handleSkillsChange(e, index)}
                />
                <IconButton aria-label="delete" onClick={() => handleDeleteSkill(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button variant="outlined" color="primary" onClick={handleAddSkill}>
              Add Skill
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.updateButtonContainer}>
            <Button variant="contained" color="primary" type="submit">
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditProfile;
