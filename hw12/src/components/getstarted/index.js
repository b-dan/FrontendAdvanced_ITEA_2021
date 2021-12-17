import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function GetStarted() {
  return (
    <>
    <Paper elevation={0} sx={{ pt: 4, margin: 'auto', flexGrow: 1, backgroundColor: 'transparent', maxWidth: '860px'}}>
      <Grid container>
        <Grid item sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" textAlign="center">
                <h2>Ready to get started?</h2>
              </Typography>
              <Typography variant="body2" textAlign="center" gutterBottom> 
              Take control of your Business Data. <br></br>Try saas to make your business better
              </Typography>
            </Grid>
            <Grid item sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', m: 'auto', justifyContent: 'center'} }}>
              <Typography sx={{ cursor: 'pointer', p: 5}} variant="body2">
              <Button variant="contained" style={{backgroundColor: '#3C64B1', color: '#FFFFFF', borderRadius: '0', textTransform: 'none', padding: '15px'}}>Get Started</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}
