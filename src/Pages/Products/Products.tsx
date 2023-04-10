import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <Grid container>
            <Grid item>
                <Link to={"/home"}>
                    <Button>Home</Button>
                </Link>
            </Grid>
            <Grid>
                <Typography>Products</Typography>
            </Grid>
        </Grid>
    )
}
