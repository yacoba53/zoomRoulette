import React, {useMemo, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CasinoIcon from '@material-ui/icons/Casino';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from "axios";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Top[s]Productions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [selectedUrl, setSelectedUrl] = useState(null)
  const [urlsFound, setUrlsFound] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleOnSubmit = () => {
    console.log(selectedUrl)
         axios({
           method: "PUT",
           url: "/api/inactive",
           data: selectedUrl
         })
           .catch(error => {
            console.log('there was an error marking it inactive')
           });
        window.location.reload();
     };

  const selectUrl = useMemo( () => {
          var urlOptions = axios({
             method: "GET",
             url: "/api/records"
           }).then((results)=>{
             console.log("res:", results.data.length)
             if(results.data.length>0){
               setSelectedUrl(results.data[Math.floor(Math.random()*results.data.length)])
               setUrlsFound(true)
             }else{
               setUrlsFound(false)
             }
           }).catch(error => {
               alert("there was ana error accessing the DB");
            });
  },[]);

  return (
    <React.Fragment>
    {console.log(selectedUrl)}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          {!clicked &&
            <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Take A Chance
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" style = {{ marginBottom: 5}} paragraph>
              Click here to join a random Zoom chat.
            </Typography>
            </div>
          }
            <div className={classes.heroButtons}  style = {{ marginTop: 0, marginBottom: 10}}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                {urlsFound && !clicked &&
                <Link href={selectedUrl?.url} target="_blank" style = {{textDecoration: 'none', color: 'white'}}>
                  <Button variant="contained" color="primary" onClick={()=>setClicked(true)}>
                    Zoom
                  </Button>
                </Link>
                }
                {!urlsFound && !clicked &&
                <Typography variant="h5" align="center"  style = {{ marginBottom: 5}} paragraph>
                  No Zoom Urls Available, Consider Adding Yours!
                </Typography>
                }
                </Grid>
              </Grid>
            </div>
            <div className={classes.heroButtons}  style = {{ marginTop: 0, marginBottom: 10}}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                {clicked &&
                  <Button variant="contained" color="primary" onClick={handleOnSubmit}>
                    inactive
                  </Button>
                }
                </Grid>
              </Grid>
            </div>
            {clicked &&
            <Typography variant="h5" align="center"  style = {{ marginBottom: 5}} paragraph>
              we rely on user input to continue running, if this link
              is no longer active please click here to report and reload.<br></br>
              If you just want a new link please just refresh the page.
            </Typography>
          }
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              To add your zoom url,<br></br> please click the + in the nav bar above.
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
