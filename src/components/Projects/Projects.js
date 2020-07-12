import React from 'react';
import './Projects.css'

import styles from './Projects.style'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = styles;

function Projects(props) {
  const classes = useStyles();

  if(props.data){
    var projects = props.data.projects.map(function(projects){
      var projectImage = 'images/portfolio/'+projects.image;
      return <Grid md={4} key={projects.title}>
      <div className="content">
          <a href={projects.url} title={projects.title} target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" alt={projects.title} src={projectImage}/>
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">{projects.title}</h3>
              <hr/>
              <p className="content-text">{projects.category}</p>
            </div>
          </a>
        </div>
        </Grid>
    })
  }


  return (
    <Container maxWidth='xl' className="project">
      <Grid item xs sm={8} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <h1>Some of My Recent Works</h1>
        </Grid>
        <Grid item container direction="row" justify="center" alignItems="center">
          {projects}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;