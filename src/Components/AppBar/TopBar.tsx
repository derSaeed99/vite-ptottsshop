import React from 'react'
import { AppBar, Toolbar, Button, Typography, Grid } from '@mui/material';
import { red, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Components } from '@mui/material/styles';

export const AppBarOverrides: Components = {
    MuiAppBar: {
        styleOverrides: {
            root: {
                height: 70,
                color: red[700],
                backgroundColor: grey[50],
                width: "100%"
                //'&:hover': {
                //  backgroundColor: red[700],
                //},
            },
        },
    },
}

export const TopBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <AppBar elevation={0} position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item sm={6} xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <Typography variant="h2" sx={{ flexGrow: 1 }}>
                                Put That On The T-Shirt
                            </Typography>
                        </Grid>
                        <Grid item sm={6} xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <Button
                                variant='outlined'
                                onClick={() => navigate("/products")}
                            >
                                <Typography variant='h3'>Store</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
