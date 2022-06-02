// import {Button, makeStyles, Paper,  TextField, Typography} from '@material-ui/core'
// import React, {useState} from 'react'
// import emailjs from 'emailjs-com'


// const Contact = ({title, dark, id}) => {
  
//   const sendEmail = (e) => {
//     e.preventDefault();
  
//     emailjs.send('service_xfe5hyw', 'template_hhmvohq', e.target, '3vbAhQSC54fKKfKvG')
//       .then((result) => {
//         alert('¡¡Message sent!!');
//       }, (error) => {
//         alert('Error');
//       });
//   };
  
//   const classes = useStyles();
//   const [value] = useState('Say Hi')

//   // const handleChange = (e) => { 
//   //   setValue(e.target.value)
//   // }
//   return (
//     <div className={`${classes.section} ${dark && classes.sectiondark}`}>
//        <div className={classes.sectioncontent} id={id}>
//         <Typography variant='h3'>{title}</Typography>
//         <Paper className={classes.root}>
//           <div className={classes.titleandchoices}>
//           <Typography variant='h5'>Contactame</Typography>
//           <div className={classes.choices}>
//             {/* <span>Saludar</span>
//             <Radio
//               value='Di Hola!'
//               checked={value === 'Di hola!'}
//               color='primary'
//               onChange={handleChange} 
//             />
//             <span>Get a Quote</span>
//             <Radio
//               value='Get a Quote'
//               checked={value === 'Get a Quote'}
//               color='primary'
//               onChange={handleChange} 
//             /> */}
//           </div>
//           </div>
//           <form onSubmit={sendEmail} className={classes.form} noValidate autoCOmplete='off'>
//             <TextField type='text' name='user_name' label="Tu Nombre" />
//             <TextField type='email' name='user_message' label='Tu Email' />
//             {
//               value === 'Get a Quote' ? (
//                 <>
//                 <TextField type='text' label='Needed Services' />
//                 <TextField type='text' label='Estimated Budget' />
//                 </>
//               ) : null
//             }
//             <TextField type='text' name='user_message' label='Escribe un mensaje' />
//             <Button type='submit' variant='contained'>Enviar</Button>
//           </form>
//           <br/>
//         </Paper>
//       </div>
//     </div>
//   )
// }
// // Styles
// const useStyles = makeStyles((theme) => ({
//   section: {
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems:'center',
//   },
//   sectiondark: {
//       background: '#333',
//       color: '#fff',
//   },
//   root: {
//     marginTop: theme.spacing(4),
//     background: '#1460d5',
//     color: '#fff',
//     fontSize: '1.2rem',
//     maxWidth: '500px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     padding: theme.spacing(4),
//     '& button': {
//       backgroundColor: '#fff',
//       color: '#1460d5',
//       fontWeight: 900,
//       fontSize: '1.2rem',
//       marginTop: theme.spacing(4),
//     },
//     '& button:hover': {
//       backgroundColor: "#020201",
//       color: '#fff',
//     },
//   },
//   sectioncontent: {
//     maxWidth: '80vw',
//   },
//   titleandchoices: {
//     '& h5': {
//       marginTop: theme.spacing(1),
//     }
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     '& input': {
//       marginBottom: theme.spacing(1),
//     }
//   },
// } ))

// export default Contact