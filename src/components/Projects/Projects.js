import React from 'react';
import './Projects.css'

import styles from './Projects.style'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Fade from 'react-reveal/Fade';

const useStyles = styles;

function Projects(props) {
  const classes = useStyles();

  if (props.data) {
    var projects = props.data.projects.map(function (projects) {
      var projectImage = 'images/portfolio/' + projects.image;
      return <Grid item md={4} key={projects.title} style={{padding: 10}}>
        
        <div className="container">
        <a href={projects.url} title={projects.title}>
          <img src={projectImage} alt={projects.title} className="image" />
            <div className="overlay">
              <div className="text"><h3 className="content-title">{projects.title}</h3>
              <hr />
              <p className="content-text">{projects.category}</p></div>
            </div>
            </a>
        </div>
        
      </Grid>
    })
  }


  return (
    <Container maxWidth='xl' className="project">
      <Grid item xs sm={10} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <h1>Some of My Recent Works</h1>
        </Grid>
        <Fade bottom cascade>
        <Grid item container direction="row" justify="center" alignItems="center">
          {projects}
        </Grid>
        </Fade>
      </Grid>
    </Container>
  );
}

export default Projects;