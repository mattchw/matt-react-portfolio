import React from 'react';
import './Header.css'

import styles from './Header.style'

import Typist from 'react-typist';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { Link } from 'react-scroll';

const useStyles = styles;

function Header(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className="header" id="header">
      <div className="phone-frame">
        <div className="phone-top"/>
        <div className="phone-screen">
          <div className="header-object-container">
            <img src={require('../../static/images/header-object.svg')} className="header-object-img" alt=""/>
          </div>
        </div>
      </div>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Typist className="responsive-headline" avgTypingDelay={150}>
            Hi, I'm <Typist.Delay ms={700} />{props.data.name}.
            </Typist>
        </Grid>
        <hr />
        <Grid item xs={8}>
          <p>
            {props.data.description}
          </p>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.button}>
        <Grid item>
          <Link to="about" spy={true} smooth={true} duration={1000}>
            <IconButton aria-label="find out more" style={{ color: 'white' }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;