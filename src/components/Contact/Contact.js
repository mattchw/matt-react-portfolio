import React from 'react';
import './Contact.css'

import styles from './Contact.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';

const useStyles = styles;

function Contact(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = React.useState(null);

  if (props.data) {
    var name = props.data.name;
    var profilepic = require('../../static/images/profilepic/' + props.data.secondaryImg)
    var logo = require('../../static/images/logo/' + props.data.logo)
    var city = props.data.address.city;
    var email = props.data.email;
    var networks = props.data.social.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
  }
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    fetch("https://formspree.io/xwkranjz", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "mattwong.info", ...values })
    })
      .then(() => {
        alert("Success!");
        setStatus("SUCCESS");
      })
      .catch(error => {
        alert(error);
        setStatus("ERROR");
      });

    e.preventDefault();
  };

  return (
    <Container id="contact" maxWidth='xl' className="footer">
      <Grid item xs sm={10} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid container justify="center">
          <Grid item>
            <Link to="header" spy={true} smooth={true} duration={1000}>
              <IconButton aria-label="find out more">
                <KeyboardArrowUpIcon fontSize="large" />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
        <Grid item>
          <h1>Contact</h1>
        </Grid>
        <Fade bottom cascade>
          <Grid item container >
            <div className="card">
              <Grid className="additional" style={{ margin: "auto 0" }}>
                <Grid style={{ margin: "auto", padding: 10 }}>
                  <img src={logo} alt="logo" style={{ width: 30 }} />
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
                <Grid className={classes.smallFont}>
                  <p className="address">
                    <span>
                      <FontAwesomeIcon style={{ margin: "0 5" }} icon={faMapMarkerAlt} />
                      {city}
                    </span><br />
                    <Button size="small" href={"mailto:" + email} className={classes.smallFont}>
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
        <Grid item style={{ paddingTop: 50 }}>
          <form onSubmit={handleSubmit}>
            <p>
              <label>
                Your Name: <input type="text" name="name" value={values.name} onChange={handleChange('name')}/>
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={values.email} onChange={handleChange('email')}/>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={values.message} onChange={handleChange('message')}/>
              </label>
            </p>
            <p>
            <button type="submit">Send</button>
            </p>
          </form>
        </Grid>

        <Grid item style={{ paddingTop: 50 }}>
          <hr />
          <ul className="copyright" style={{ paddingTop: 20 }}>
            <li>Copyright &copy; Matthew Wong {(new Date().getFullYear())}</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;