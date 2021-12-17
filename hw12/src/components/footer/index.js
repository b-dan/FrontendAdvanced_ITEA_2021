import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Footer() {
    return (
        <>
            <Paper elevation={0} sx={{ p: 2, margin: 'auto', flexGrow: 1, backgroundColor: 'transparent', maxWidth: '860px', color: '#C3CBCD' }}>
                <Grid container>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" textAlign="center" margin={0}>
                            © BrandName. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}