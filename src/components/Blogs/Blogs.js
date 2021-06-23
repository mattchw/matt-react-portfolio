import React, { useState, useEffect } from 'react';
import './Blogs.css'

import styles from './Blogs.style'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import Fade from 'react-reveal/Fade';

// redux
import { useSelector } from 'react-redux';
import { getTheme } from '../../reducers/themeReducer';

const useStyles = styles;

function Blogs(props) {
  const theme = useSelector(getTheme);
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(props.data.blog_api)
        .then((res) => res.json())
        .then((data) => {
          // Fillter the array
          const res = data.items //This is an array with the content. No feed, no info about author etc..
          const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
          // console.log(posts)
          setData(posts);
        })
    };

    fetchData();
  }, [props.data.blog_api]);

  if (props.data) {
    var blog = props.data.blog;
  }

  return (
    <Container maxWidth='xl' className="blog" id="blogs">
      <Grid item xs sm={11} container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
        <Grid item className="blog-title">
          <Fade bottom cascade>
            <h1>My Latest Blogs</h1>
            <hr/>
          </Fade>
        </Grid>

        <Grid item container direction="row" justify="flex-start" alignItems="flex-start" style={{paddingBottom: 30}}>
          {data && data.slice(0,8).map((item) => (
            <Grid item md={6} lg={3} key={item.title} style={{ padding: 10 }}>
                <a href={item.link} title={item.title}>
                  <img src={item.thumbnail} alt={item.title} className="image" />
                  <h4>{item.title}</h4>
                  <hr/>
                  <p>{item.pubDate.slice(0,10)}</p>
                  {item.categories.slice(0,3).map((category)=>(
                    <Chip key={category} label={category} style={theme === 'dark' ? 
                    {
                      backgroundColor: '#333',
                      color: 'white', 
                      margin: 3
                    } : {
                      margin: 3
                    }}/>
                  ))}
                </a>
            </Grid>
          )
          )}
        </Grid>
        <Grid item container direction="row" justify="center" alignItems="center">
          <Button size="large" variant="contained" href={blog} className={classes.smallFont} style={theme === 'dark' ? 
          {
            backgroundColor: '#333',
            color: 'white', 
            fontWeight: 'bold'
          } : {
            fontWeight: 'bold'
          }}>
            More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Blogs;