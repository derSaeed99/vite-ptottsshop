import React from 'react'
import { AppRoutes } from './AppRoutes/AppRoutes'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../Components/theme'
import { TopBar } from '../Components/AppBar/TopBar'
import { Grid } from '@mui/material'

export const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <TopBar />
                <AppRoutes />
            </Grid>
        </ThemeProvider>
    )
}
