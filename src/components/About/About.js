import React from 'react';
import './About.css'
import 'font-awesome/css/font-awesome.min.css';

import styles from './About.style'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Icon from '@material-ui/core/Icon';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';

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

  const skills = props.data.skills.map((skill, index) => {
    return <Grid key={index} container direction="row" justify="center" alignItems="center" className={classes.skillItem}>
      <Grid item xs={3}>
        <Typography gutterBottom variant="subtitle2">
          {skill.name}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <BorderLinearProgress variant="determinate" value={skill.level} />
      </Grid>
    </Grid>
  })

  const characteristics6 = props.data.characteristics.map((characteristic, index) => {
    return <Grid key={index} item xs={6} style={{padding: 10}}>
      <Icon className={characteristic.icon} fontSize="large"/>
      <h4>
        {characteristic.name}
      </h4>
    </Grid>
  })

  const characteristics3 = props.data.characteristics.map((characteristic, index) => {
    return <Grid key={index} item xs={6} sm={3} style={{padding: 10}}>
      <Icon className={characteristic.icon} fontSize="default"/>
      <h4>
        {characteristic.name}
      </h4>
    </Grid>
  })

  return (
    <Container maxWidth='xl' className="about">
      <Grid item xs sm={10} container direction="row" justify="center" alignItems="flex-start" className={classes.containerItem}>
        <Grid item md={5}>
          <div className="about-img-circle">
            <img className="about-img" src='./images/profilepic1.jpg' alt={props.data.name} />
          </div>
          <Hidden smDown>
            <Grid container direction="row" justify="center" alignItems="center" style={{paddingTop: 50}}>
              {characteristics6}
            </Grid>
          </Hidden>
        </Grid>
        <Grid item md={7} container direction="column" justify="center" alignItems="center" >
          <Grid item>
            <h3>
              About me
            </h3>
          </Grid>
          <Hidden mdUp>
            <Grid container direction="row" justify="center" alignItems="center" style={{paddingTop: 30}}>
              {characteristics3}
            </Grid>
          </Hidden>
          <Grid item>
            <p>
              {props.data.bio}
            </p>
          </Grid>
          <Grid item container direction="row" justify="center" alignItems="center" xs={8} className="about-skills">
            <h4 className="about-skills-text">
            <span><FontAwesomeIcon style={{marginRight: 10}} icon={faCode} />Code Skills</span>
            </h4>
            {skills}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;