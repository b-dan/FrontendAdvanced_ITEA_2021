import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
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
                        {cards.map((card, id) => (
                        <Grid item xs={6} key={id}>
                            <Card sx={{ maxWidth: 480, backgroundColor: 'transparent'}} elevation={0}>
                                <CardActionArea>
                                    <img alt="complex" className="pic-sp" src={require(`../../img/${id + 7}.png`)}></img>
                                    <CardContent>
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
