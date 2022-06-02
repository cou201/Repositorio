import {createTheme, makeStyles, MuiThemeProvider} from '@material-ui/core';
import About from './components/About';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
//  import Contact from './components/Contact';
import { purple } from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {main: purple[500]},
    secondary: {main: '#333'}
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
      <Navbar />
      <About title='Sobre mi' id='about' dark={true}/>
      <Skills title="Mis habilidades" id='skills' dark={false} />
      <MyWork title='Mis proyectos' id='work' dark={true}/>
       {/* <Contact title='' id='contact' dark={false}/>  */}
    </div>
    </MuiThemeProvider>
    
  );
}
// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    
  }
} ))
export default App;
