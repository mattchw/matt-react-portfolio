import React from 'react';
import './Header.css'

import styles from './Header.style'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = styles;

function Header(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className="header">
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {props.data.name}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {props.data.description}
          </Typography>
        </Grid>

      </Grid>
      <Grid container justify="center" className={classes.button}>
        <Grid item>
          <IconButton aria-label="find out more">
            <KeyboardArrowDownIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;