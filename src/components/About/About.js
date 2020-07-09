import React from 'react';
import './About.css'

import styles from './About.style'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = styles;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

function About(props) {
  const classes = useStyles();

  const skills = props.data.skills.map((skill, index) => {
    return <Grid key={index} item xs className={classes.skillItem}>
      <BorderLinearProgress variant="determinate" value={skill.level} />
    </Grid>
  })

  return (
    <Container maxWidth='xl'>
      <Grid item xs sm={8} container direction="row" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item sm={5}>
          <div className="about-img-circle">
            <img className="about-img" src='' alt={props.data.name} />
          </div>
        </Grid>
        <Grid item xs={12} sm={7} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                About me
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {props.data.bio}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Code Skills
              </Typography>
              {skills}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;