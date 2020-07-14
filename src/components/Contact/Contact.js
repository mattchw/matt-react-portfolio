import React from 'react';
import './Contact.css'

import styles from './Contact.style'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Fade from 'react-reveal/Fade';

const useStyles = styles;

function Contact(props) {
  const classes = useStyles();

  if(props.data){
    var name = props.data.name;
    var profilepic= "images/"+props.data.image2;
    var city = props.data.address.city;
    var email = props.data.email;
    var networks= props.data.social.map(function(network){
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
  }

  return (
    <Container id="contact" maxWidth='xl' className="footer">
      <Grid item xs sm={10} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <h1>Contact</h1>
        </Grid>
        <Fade top cascade>
        <Grid item container >
          
          <div className="card">
            <Grid className="additional" style={{ margin: "auto 0" }}>
              <Grid style={{ margin: "auto", padding: 10 }}>
                <img src="images/logos/logo4.png" alt="logo" style={{ width: 30 }} />
                <div style={{ margin: "auto" }} className="circle">
                  <img src={profilepic} alt={name} />
                </div>

                <div className="cardName">
                  <FontAwesomeIcon style={{ margin: "0 5" }} icon={faUser} />
                  <span>{name}</span>
                </div>

              </Grid>

            </Grid>
            <Grid className="general">
              <Grid>
                <p className="address">
                  <span>
                    <FontAwesomeIcon style={{ margin: "0 5" }} icon={faMapMarkerAlt} />
                    {city}
                  </span><br />
                  <Button href={"mailto:" + email}>
                    <FontAwesomeIcon style={{ margin: "0 5" }} icon={faEnvelope} />
                    {email}
                  </Button>
                </p>
                <ul className="social-links more">
                  {networks}
                </ul>
              </Grid>
            </Grid>
          </div>
        </Grid>
        </Fade>
        <Grid item style={{paddingTop: 50}}>
          <hr />
          <ul className="copyright">
            <li>Copyright &copy; Matthew Wong {(new Date().getFullYear())}</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;