import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core'
import jc from '../images/jc.png'
import TypeWriterEffect from 'react-typewriter-effect'
import pdf from '../images/CV-JC.pdf'

const About = ({title, dark, id}) => {
  const classes = useStyles();  
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={jc} className={classes.media} title='picture' />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text='Hi, I am Julio Mateus'
              textStyle={{fontSize: '2rem', fontWeight: '700px', color: '#1460d5'}}
              startDelay={100}
              cursorColor='black'
              typeSpeed={100}   
            />
            <TypeWriterEffect
              text='And I am an awesome Full Stack Developer'
              textStyle={{fontSize: '1.2rem', fontWeight: '500px'}}
              startDelay={2500}
              cursorColor='black'
              typeSpeed={100}   
            />
            <Typography variant='h6' color='textSecondary'>
            Hard-working, ideal and responsible person, with experience as a Labor Technician in Systems Analysis and Programming, JavaScript, Python, Java, C# and in the area of ​​customer service, teamwork.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' className={classes.pdfbutton}>
              <a href={pdf} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
// Styles
const useStyles = makeStyles((theme) => ({
    section: {
      minHeight: '100vh',
    },
    sectiondark: {
        background: '#333',
        color: '#fff',
    },
    sectioncontent: {
      maxWidth: '80vw',
      margin: '0 auto',
    },
    card: {
      height: '70vh',
      display: 'flex',
      marginTop: theme.spacing(6),
      position: 'relative',
      

    },
    media: {
      width: '300px',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '10px',
      margin: theme.spacing(5)
    },
    cardcontent: {
      marginTop: theme.spacing(2),
      '& h6': {
        marginTop: theme.spacing(16),
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }, 
    },
    pdfbutton: {
      position: 'absolute',
      bottom: '5rem',
      right: '4rem',
      [theme.breakpoints.down('sm')]: {
        bottom: 10,
        right: '1rem',
      },
      backgroundColor: '#1460d5',
      padding: theme.spacing(3),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '& a': {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 900,
      },
      '& a:hover': {
        color: '#1460d5',
      }

    }
  } ))

export default About