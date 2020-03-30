import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CasinoIcon from '@material-ui/icons/Casino';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  logoName: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
return(
  <React.Fragment>
    <CssBaseline />
    <div className={classes.root}>
    <AppBar position="relative">
      <Toolbar>
      <Link to={'/'} className = {classes.title} style = {{textDecoration: 'none', color: 'white', justify: 'right'}} >
        <Typography variant="h5" color="inherit">
          Zoom Roulette
        </Typography>
      </Link>

      <Link to={'/add'} className = {classes.logoName} style = {{textDecoration: 'none', color: 'white'}} >
         <IconButton aria-label="add a new url" color="inherit" >
             <AddCircle />
         </IconButton>
      </Link>
      </Toolbar>
    </AppBar>
    </div>
  </React.Fragment>
)
};
