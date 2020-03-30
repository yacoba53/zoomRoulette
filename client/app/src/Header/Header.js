import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CasinoIcon from '@material-ui/icons/Casino';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Header() {
  const classes = useStyles();
return(
  <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <CasinoIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Zoom Roulette
        </Typography>
      </Toolbar>
    </AppBar>
  </React.Fragment>
)
};
