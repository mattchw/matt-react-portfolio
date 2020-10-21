import React from 'react';
import './About.css'
import 'font-awesome/css/font-awesome.min.css';

import styles from './About.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Icon from '@material-ui/core/Icon';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Slide from 'react-reveal/Slide';

const useStyles = styles;

function About(props) {
  const classes = useStyles();

  const profilepic = require('../../static/images/profilepic/'+ props.data.primaryImg);

  const skills = props.data.skills.map((skill, index) => {
    return <Grid key={index} item xs={4} sm={3} style={{padding: 20}}>
        <Slide bottom cascade>
          <Icon className={skill.icon} fontSize="large" />
          <Typography variant="subtitle2">
            {skill.name}
          </Typography>
          </Slide>
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
        </Grid>
        <Grid item md={7} container direction="column" justify="center" alignItems="center" >
          <Slide bottom cascade>
            <Grid item>
              <h3>
                About me
            </h3>
            </Grid>
          </Slide>
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
            <Grid container direction="row" justify="center" alignItems="center" className={classes.skillItem}>
            {skills}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;