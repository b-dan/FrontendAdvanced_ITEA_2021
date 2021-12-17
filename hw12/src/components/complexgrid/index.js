import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import desktop from '../../img/desktop.png'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <>
    <Paper elevation={0} sx={{ p: 2, margin: 'auto', flexGrow: 1, backgroundColor: 'transparent', maxWidth: '860px', mt: 10, pb: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={14} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <h1>We help you find the best solution </h1>
              </Typography>
              <Typography variant="body2" gutterBottom>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button variant="contained" style={{backgroundColor: '#3C64B1', color: '#FFFFFF', borderRadius: '0', textTransform: 'none'}}>Start free trial</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <ButtonBase sx={{ maxWidth: 490}}>
            <Img alt="complex" src={desktop} />
          </ButtonBase>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}
