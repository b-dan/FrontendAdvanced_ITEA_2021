import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import desktop from '../../img/desktop.png'
import './screenproducts.css'

const cards = [
    'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.', 
    'At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.', 
    'Vidisse oblique ei has, eos eu atomorum erroribus cotidieque, mazim postea ne vel.', 
    'Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nam eu, liber'];

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ScreenProducts() {
    return (
        <>
            <Paper elevation={0} sx={{ p: 10, margin: 'auto', maxWidth: 860, flexGrow: 1, backgroundColor: 'transparent', mt: 10 }}>
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <ButtonBase sx={{ maxWidth: 480 }}>
                            <Img alt="complex" src={desktop} />
                        </ButtonBase>
                    </Grid>                 
                    <Grid item xs={6} sm container>
                        {/* <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    <h1>Product Statistic</h1>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <Button variant="contained" style={{ backgroundColor: '#3C64B1', color: '#FFFFFF', borderRadius: '0', textTransform: 'none' }}>Learn more</Button>
                                </Typography>
                            </Grid>
                        </Grid> */}
                        {cards.map((card, id) => (
                        <Grid item xs={6} key={id}>
                            <Card sx={{ maxWidth: 480, backgroundColor: 'transparent'}} elevation={0}>
                                <CardActionArea>
                                    {/* <CardMedia
                                        // style={width='50px'}
                                        component="img"
                                        // width='50px'
                                        padding="30px"
                                        image={require(`../../img/${id + 1}.png`)}
                                        alt="img is out"
                                    /> */}
                                    <img className="pic-sp" src={require(`../../img/${id + 7}.png`)}></img>
                                    <CardContent>
                                        {/* <Typography gutterBottom variant="h6" component="div" textAlign="center">
                                            {card}
                                        </Typography> */}
                                        <Typography variant="body2" color="text.secondary" textAlign="center">
                                            {card}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                    
                </Grid>
            </Paper>
        </>
    );
}
