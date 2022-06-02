import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/js.gif'
import react from '../images/react.gif'
import node from '../images/node.png'
import redux from '../images/redux.png'
import { Timeline, TimelineConnector, TimelineContent,  TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { Paper, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core';
import StartRating from './StartRating'

const Technologies = () => {
  const classes = useStyles();

  const skills = [
    
      {
        year: '2022/',
        src: html,
        title: 'HTML 5',
        stars: 4,
      },
      {
        year: '2022/',
        src: css,
        title: 'CSS 3',
        stars: 4,
      },
      {
        year: '2022/',
        src: javascript,
        title: 'JavaScript ES6',
        stars: 4,
      },
      {
        year: '2022/',
        src: node,
        title: 'Node js',
        stars: 3,
      },
      {
        year: '2022/',
        src: react,
        title: 'React js',
        stars: 4,
      },
      
      {
        year: '2022/',
        src: redux,
        title: 'React Redux',
        stars: 4,
      },
  ]
  return (
    <Timeline align='alternative'>
        {
            skills.map(({year, src, title, stars}, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant='h6' color='textSecondary'>
                            {year}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <img src={src} alt={title} className={classes.customlogo}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={5} className={classes.paper}>
                            <Typography variant='h6' component='h1'>
                            {title}
                            </Typography>
                            <StartRating stars={stars} />
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))
        }
    </Timeline>
  )
}
// Styles
const useStyles = makeStyles((theme) => ({
    customlogo: {
          width: '25px'
    },
    paper: {
        padding: '6px 16px',
        maxWidth: '200px',
    }
    
  } ))

export default Technologies