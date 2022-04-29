import { AppBar, Toolbar, makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import {React, useState} from 'react'
import logo from '../images/jc.gif'
import {Link, animateScroll as scroll} from 'react-scroll'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import  EmojiObjectsTwoToneIcon  from '@material-ui/icons/EmojiObjectsTwoTone';
import  WorkTwoToneIcon  from '@material-ui/icons/WorkTwoTone';
import  ContactMailTwoToneIcon  from '@material-ui/icons/ContactMailTwoTone';
import WidgetsIcon from '@material-ui/icons/Widgets'
import CancelIcon from '@material-ui/icons/Cancel'



const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 'about',
      text: 'About me',
      icon: <InfoTwoToneIcon fontSize='large' />
    },
    {
      id: 'skills',
      text: 'Skills',
      icon: <EmojiObjectsTwoToneIcon fontSize='large' className={classes.light} />
    },
    {
      id: 'work',
      text: 'My Work',
      icon: <WorkTwoToneIcon fontSize='large' />
    },
    {
      id: 'contact',
      text: 'Get in touch',
      icon: <ContactMailTwoToneIcon fontSize='large' />
    },
  ]

  const scrollToTop = () => {
    scroll.scrollToTop()
  }


  return (
    <>
      <AppBar position='sticky' className={classes.root}>
          <Toolbar className={classes.toolbar}>
              <img
                onClick={scrollToTop} 
                src={logo} 
                className={classes.logo} 
                alt='Logo' 
              />
              <List className={classes.menu}>
                {
                  links.map(({id, text}, index) => (
                    <Link 
                      key={index} 
                      to={id} 
                      spy={true} 
                      activeClass='active' 
                      smooth={true} 
                      duration={500} 
                      offset={-70}
                    >
                      {text}
                    </Link>
                  ))
                }
              </List>
              <IconButton edge='end' 
                className={classes.menubutton}
                onClick={()=>setOpen(!open)}
              >
                <WidgetsIcon fontSize='large' />
              </IconButton>
              
          </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>
      <IconButton  onClick={()=>setOpen(false)} className={classes.cancelicon}>
        <CancelIcon fontSize= 'large' />
      </IconButton>
      <Divider />
      {
        links.map(({id, text, icon }, index) => (
          <Link 
            key={index}
            className={classes.sidebar} 
            to={id} 
            spy={true} 
            activeClass='active' 
            smooth={true} 
            duration={500} 
            offset={-70}
          >
            <ListItem component='h5'>
              <span>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
              </span>{text}
            </ListItem>
          </Link>
        ))
      }  

      </Drawer>
   </>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: ' #68bd75 ',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logo: {
      height: '2.0rem',
      objectFit: 'contain',
      '&:hover': {
          cursor: 'pointer'
      }
    },
    light: {
      color: '#ffcc00',
    },
    menu: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& a': {
        color: '#333',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        marginLeft: theme.spacing(3)
      },
      '& a:hover': {
        cursor: 'pointer',
        color: 'tomato',
        borderBottom: '3px solid tomato'
      }
    },
    menubutton: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        color: ' #1460d5 ',
        position: 'absolute',
        top: 0,
        right: 10,
      }
    },
    cancelicon: {
      color: 'tomato',
      position: 'absolute',
      top: 0,
      right: 10,
    },
    sidebar: {
      width: '40vw',
      [theme.breakpoints.down('sm')]: {
        width: '60vw',
      },
      '& h5': {
        margin: theme.spacing(10, 0, 0, 4),
        fontSize: '1.4rem',
        color: '#333',
        fontWeight: 'bold',
      },
      '& h5:hover': {
        color: '#1460d5',
        cursor: 'pointer'
      }
    }
  } ))

export default Navbar

