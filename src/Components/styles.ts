import { Typography } from "@mui/material/styles/createTypography";



export const typography: Partial<Typography> = {
    fontFamily: ['Roboto', 'sans-serif'].join(","),
    h1: {
        fontSize: '4rem',
        fontWeight: 700,
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: '1.25rem',
    },
    fontSize: 0,
    htmlFontSize: 0,
};