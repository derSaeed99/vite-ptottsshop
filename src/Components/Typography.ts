import { Components } from '@mui/material/styles';
import { red } from '@mui/material/colors'
import { grey } from '@mui/material/colors'

export const TypographyOverrides: Components = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontWeight:"bold",
        color: red[700],
      },
    //   h1: {
    //     fontSize: '4rem',
    //     fontWeight: 'bold',
    //     color: grey[900],
    //   },
    //   h2: {
    //     fontSize: '3rem',
    //     fontWeight: 'bold',
    //     color: grey[900],
    //   },
    //   h3: {
    //     fontSize: '2.25rem',
    //     fontWeight: 'bold',
    //     color: grey[900],
    //   },
    //   h4: {
    //     fontSize: '1.5rem',
    //     fontWeight: 'bold',
    //     color: grey[900],
    //   },
    //   h5: {
    //     fontSize: '1.25rem',
    //     fontWeight: 'bold',
    //     color: grey[900],
    //   },
    //   h6: {
    //     fontSize: '1rem',
    //     fontWeight: 'bold',
    //     color: grey[900],
    //   },
    },
  },
}