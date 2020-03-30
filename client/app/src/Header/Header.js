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
    flexGrow: 1,
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
      <Link to={'/'} style = {{textDecoration: 'none', color: 'white'}}>
        <CasinoIcon edge="start" className={classes.icon} />
      </Link>
      <Link to={'/'} className = {classes.logoName} style = {{textDecoration: 'none', color: 'white'}} >
        <Typography variant="h5" color="inherit" noWrap className={classes.title}>
          Zoom Roulette
        </Typography>
      </Link>
      <Link to={'/add'} className = {classes.logoName} style = {{textDecoration: 'none', color: 'white', float: 'right'}} >
      <IconButton aria-label="add a new url" color="inherit" style = {{float: 'right'}}>
             <AddCircle />
         </IconButton>
      </Link>
      </Toolbar>
    </AppBar>
    </div>
  </React.Fragment>
)
};
