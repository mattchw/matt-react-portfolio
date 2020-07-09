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

  return (
    <Container maxWidth='xl'>
      <Grid item xs sm={8} container direction="row" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item sm={5}>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            About me
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                About me
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                hi
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Code Skills
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;