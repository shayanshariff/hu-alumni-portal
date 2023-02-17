import {Container, Grow, Grid, Card, Typography, TextField, CardMedia} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";


const Profile = () => {
    const classes = useStyles();
    return(
        <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Card className={classes.card} >
                                <Typography variant="h4" >Details</Typography>
                                <Grid container  alignItems="stretch" spacing={10}>
                                    <Grid item>
                                        <Typography variant="h6" >First Name</Typography>
                                        <TextField variant="outlined" label="Enter your First Name"/>
                                    </Grid>
                                    <Grid item>
                                    <Typography variant="h6" >Last Name</Typography>
                                    <TextField variant="outlined" label="Enter your Last Name"/>
                                    </Grid>
                                </Grid>
                                <Grid container  alignItems="stretch" spacing={10}>
                                    <Grid item>
                                        <Typography variant="h6" >Batch </Typography>
                                        <TextField variant="outlined" label="Enter your Batch"/>
                                    </Grid>
                                    <Grid item>
                                    <Typography variant="h6" >Major</Typography>
                                    <TextField variant="outlined" label="Enter your Major"/>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="stretch" spacing={10}>
                                    <Grid item>
                                        <Typography variant="h6" >Email </Typography>
                                        <TextField variant="outlined" label="Enter your Email"/>
                                    </Grid>
                                    <Grid item>
                                    <Typography variant="h6" >Phone</Typography>
                                    <TextField variant="outlined" label="Enter your Phone Number"/>
                                    </Grid>
                                </Grid>
                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                            <CardMedia component="img" src="https://bikaash.com.np/wp-content/themes/miyazaki/assets/images/default-fallback-image.png" />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Profile;