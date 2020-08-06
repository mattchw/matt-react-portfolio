import React, { useState, useEffect } from 'react';
import './Blogs.css'

import styles from './Blogs.style'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';

import Fade from 'react-reveal/Fade';

const useStyles = styles;

function Blogs(props) {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@matthew.chohin')
        .then((res) => res.json())
        .then((data) => {
          // Fillter the array
          const res = data.items //This is an array with the content. No feed, no info about author etc..
          const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
          console.log(posts)
          setData(posts);
        })
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth='xl' className="blog" id="blogs">
      <Grid item xs sm={11} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item>
          <Fade bottom cascade>
            <h1>My Latest Blogs</h1>
          </Fade>
        </Grid>

        <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
          {data && data.slice(0,8).map((item) => (
            <Grid item md={6} lg={3} key={item.title} style={{ padding: 10 }}>
                <a href={item.link} title={item.title}>
                  <img src={item.thumbnail} alt={item.title} className="image" />
                  <h4>{item.title}</h4>
                  <hr/>
                  <p>{item.pubDate.slice(0,10)}</p>
                  {item.categories.slice(0,3).map((category)=>(
                    <Chip key={category} label={category} style={{margin: 3}}/>
                  ))}
                </a>
            </Grid>
          )
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Blogs;