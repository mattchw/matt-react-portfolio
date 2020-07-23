import React from 'react';
import './Projects.css'

import styles from './Projects.style'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Fade from 'react-reveal/Fade';

const useStyles = styles;

function Projects(props) {
  const classes = useStyles();

  if (props.data) {
    var projects = props.data.projects.map(function (projects) {
      var projectImage = require('../../static/images/projects/'+ projects.image);
      return<Grid item sm={6} md={4} key={projects.title} style={{ padding: 10}}>         
          <div className="container">
            <a href={projects.url} title={projects.title}>
              <img src={projectImage} alt={projects.title} className="image" />
              <div className="overlay">
                <div className="text">
                  <h3 className="content-title">{projects.title}</h3>
                  <hr />
                  <p className="content-text">{projects.category}</p></div>
              </div>
            </a>
          </div>         
        </Grid>      
    })
  }


  return (
    <Container maxWidth='xl' className="project" id="projects">
      <Grid item xs sm={11} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Fade bottom cascade>
          <h1>Some of My Recent Works</h1>
          </Fade>
        </Grid>

        <Grid item container direction="row" justify="center" alignItems="center">
          {projects}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;