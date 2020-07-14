import React from 'react';
import './Resume.css'

import styles from './Resume.style'
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faBriefcase, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Fade from 'react-reveal/Fade';

const useStyles = styles;

function Resume(props) {
  const classes = useStyles();
  const theme = useTheme();

  const smMedia = useMediaQuery(theme.breakpoints.up('sm'));

  let educationLen = props.data.education.length;
  var education = props.data.education.map(function (education, index) {
    var eduDescription = education.description.map(function (description, index) {
      return <p className="description" key={index}>• {description}</p>
    })
    return <div key={index} className="item"><h3 className={smMedia ? classes.resumeRightInfo : classes.resumeRightInfoName}>{education.school}</h3>
      <p className="info" className={smMedia ? classes.resumeRightInfo : classes.resumeRightInfoName}>{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      {eduDescription}
      {
        (index !== educationLen - 1) ? <hr /> : null
      }
    </div>
  })

  let workLen = props.data.work.length;
  var work = props.data.work.map(function (work, index) {
    var workDescription = work.description.map(function (description, index) {
      return <p className="description" key={index}>• {description}</p>
    })
    return <div key={work.company} className="item"><h3 className={smMedia ? classes.resumeRightInfo : classes.resumeRightInfoName}>{work.company}</h3>
      <p className="info" className={smMedia ? classes.resumeRightInfo : classes.resumeRightInfoName}>{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      {workDescription}
      {
        (index !== workLen - 1) ? <hr /> : null
      }
    </div>
  })


  return (
    <Container maxWidth='xl'>
      <Grid item xs sm={10} container direction="row" justify="center" alignItems="flex-start" className={classes.containerItem}>
        <Grid item sm={3}>
        <Fade bottom cascade>
          <h3 className={smMedia ? classes.resumeLeftTitle : classes.resumeLeftTitleSM}>
          <span><FontAwesomeIcon style={{marginRight: 10}} icon={faUniversity} />Education</span>
          </h3>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={9} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs className={classes.resumeRightInfo}>
              <Fade bottom cascade>
              {education}
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs sm={10} container direction="row" justify="center" alignItems="flex-start" className={classes.containerItem}>
        <Grid item sm={3}>
        <Fade bottom cascade>
          <h3 className={smMedia ? classes.resumeLeftTitle : classes.resumeLeftTitleSM}>
          <span><FontAwesomeIcon style={{marginRight: 10}} icon={faBriefcase} />Work</span>
          </h3>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={9} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs className={classes.resumeRightInfo}>
            <Fade bottom cascade>
              {work}
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs sm={10} container direction="row" className={classes.containerItem}>
        <Grid item sm={3}>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>

          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Resume;