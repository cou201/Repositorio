import {Button, makeStyles, Paper, Radio, TextField, Typography} from '@material-ui/core'
import React, {useState} from 'react'
import emailjs from 'emailjs-com'


const Contact = ({title, dark, id}) => {
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_vb9h3nl', 'template_mx1m4fd', e.target, '9_lPPIS5SYkaDOcWY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  
  const classes = useStyles();
  const [value, setValue] = useState('Say Hi')

  const handleChange = (e) => { 
    setValue(e.target.value)
  }
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
       <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.titleandchoices}>
          <Typography variant='h5'>CONTACT ME</Typography>
          <div className={classes.choices}>
            <span>Say Hello</span>
            <Radio
              value='Say Hi'
              checked={value === 'Say Hi'}
              color='primary'
              onChange={handleChange} 
            />
            <span>Get a Quote</span>
            <Radio
              value='Get a Quote'
              checked={value === 'Get a Quote'}
              color='primary'
              onChange={handleChange} 
            />
          </div>
          </div>
          <form onSubmit={sendEmail} className={classes.form} noValidate autoCOmplete='off'>
            <TextField type='text' name='user_name' label='Your name' />
            <TextField type='email' name='user_email' label='Your e-mail' />
            {
              value === 'Get a Quote' ? (
                <>
                <TextField type='text' label='Needed Services' />
                <TextField type='text' label='Estimated Budget' />
                </>
              ) : null
            }
            <TextField type='text' name='user_message' label='Write a message' />
            <Button type='submit' variant='contained'>Submit</Button>
          </form>
          
        </Paper>
      </div>
    </div>
  )
}
// Styles
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  sectiondark: {
      background: '#333',
      color: '#fff',
  },
  root: {
    marginTop: theme.spacing(4),
    background: '#1460d5',
    color: '#fff',
    fontSize: '1.2rem',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    '& button': {
      backgroundColor: '#fff',
      color: '#1460d5',
      fontWeight: 900,
      fontSize: '1.2rem',
      marginTop: theme.spacing(4),
    },
    '& button:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  },
  sectioncontent: {
    maxWidth: '80vw',
  },
  titleandchoices: {
    '& h5': {
      marginTop: theme.spacing(1),
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      marginBottom: theme.spacing(1),
    }
  },
} ))

export default Contact