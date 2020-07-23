import React from 'react';
import './About.css'
import 'font-awesome/css/font-awesome.min.css';

import styles from './About.style'
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Icon from '@material-ui/core/Icon';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';

import Slide from 'react-reveal/Slide';

const useStyles = styles;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#11ABB0',
  },
}))(LinearProgress);

function About(props) {
  const classes = useStyles();

  const profilepic = require('../../static/images/profilepic/'+ props.data.primaryImg);

  const skills = props.data.skills.map((skill, index) => {
    return <Grid key={index} container direction="row" justify="center" alignItems="center" className={classes.skillItem}>
        <Grid item xs={3}>
        <Slide bottom cascade>
          <Typography variant="subtitle2">
            {skill.name}
          </Typography>
          </Slide>
        </Grid>
        <Grid item xs={8}>
        <Slide bottom cascade>
          <BorderLinearProgress variant="determinate" value={skill.level} />
          </Slide>
        </Grid>
      
    </Grid>
  })

  const characteristics6 = props.data.characteristics.map((characteristic, index) => {
    return <Grid key={index} item xs={6} style={{ padding: 10 }}>
      <Icon className={characteristic.icon} fontSize="large" />
      <h4>
        {characteristic.name}
      </h4>
    </Grid>
  })

  const characteristics3 = props.data.characteristics.map((characteristic, index) => {
    return <Grid key={index} item xs={6} sm={3} style={{ padding: 10 }}>
      <Icon className={characteristic.icon} fontSize="default" />
      <h4>
        {characteristic.name}
      </h4>
    </Grid>
  })

  return (
    <Container maxWidth='xl' className="about">
      <Grid item xs sm={10} container direction="row" justify="center" alignItems="flex-start" className={classes.containerItem}>
        <Grid item md={5} style={{ margin: 'auto 0' }}>
          <Slide bottom>
            <div className="about-img-circle">
              <img className="about-img" src={profilepic} alt={props.data.name} />
            </div>
          </Slide>
          <Hidden smDown>
            <Slide bottom>
              <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: 50 }}>
                {characteristics6}
              </Grid>
            </Slide>
          </Hidden>
        </Grid>
        <Grid item md={7} container direction="column" justify="center" alignItems="center" >
          <Slide bottom cascade>
            <Grid item>
              <h3>
                About me
            </h3>
            </Grid>
          </Slide>
          <Hidden mdUp>
            <Slide bottom cascade>
              <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: 30 }}>
                {characteristics3}
              </Grid>
            </Slide>
          </Hidden>
          <Slide bottom cascade>
            <Grid item>
              <p>
                {props.data.bio}
              </p>
            </Grid>
          </Slide>
          <Grid item container direction="row" justify="center" alignItems="center" xs={10} className="about-skills">
            <Slide bottom cascade>
              <h4 className="about-skills-text">
                <span><FontAwesomeIcon style={{ marginRight: 10 }} icon={faCode} />Code Skills</span>
              </h4>
            </Slide>
            {skills}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;