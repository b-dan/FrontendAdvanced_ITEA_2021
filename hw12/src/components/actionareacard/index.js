import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './actionareacard.css'

const cards = ['Store Integration', 'Data Protection', 'Invoice Generator', 'Auto Responder', 'Social Plugins', 'Data Backup'];
const text = 'Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea cu. Pro ex integre pertinax. Cu cum harum paulo legendos, mei et quod enim mnesarchum, habeo affert laoreet sea ei.';

export default function ActionAreaCard() {
    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: '860px', margin: 'auto' }}>
                <Grid container spacing={1}>
                    <div className='mid-header'><h2>We offer a complete range of features</h2></div>
                </Grid>
                <Grid container spacing={2}>
                    {cards.map((card, id) => (
                        <Grid item xs={4} key={id}>
                            <Card sx={{ maxWidth: 345, backgroundColor: 'transparent' }} elevation={0}>
                                <CardActionArea>
                                    <img className="pic" src={require(`../../img/${id + 1}.png`)}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                            {card}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign="center">
                                            {text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
