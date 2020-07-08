import React from 'react';
import './About.css'

import styles from './About.style'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = styles;

function Header(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className="about">
      <Grid item xs sm={8} container direction="row" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item sm={5}>
          <div className="about-img-circle">
            <img className="about-img" src='/images/profilepic1.jpg' alt={props.data.name} />
          </div>
        </Grid>
        <Grid item xs={12} sm={7} container justify="center" alignItems="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                About me
                </Typography>
              <Typography variant="body2" gutterBottom>
                {props.data.bio}
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;