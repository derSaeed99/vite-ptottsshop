import { Components } from '@mui/material/styles';
import { red } from '@mui/material/colors'
import { grey } from '@mui/material/colors'

export const ButtonOverrides: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        width: 150,
        borderRadius: '30px',
        fontWeight:"light",
        color: red[700],
        backgroundColor: grey[50],
        '&:hover': {
            backgroundColor: red[700],
            color: grey[50]
        },
      },
      outlined: {
        border: `3px solid ${red[700]}`,
        '&:hover': {
        border: `3px solid ${red[700]}`,
          backgroundColor: red[700],
          color: grey[50],
        },
      },
      text: {
        color: red[700],
        '&:hover': {
          backgroundColor: grey[50],
          color: grey[50]
        },
      },
      sizeLarge: {
        height: 60,
        padding: '0 48px',
      },
      sizeSmall: {
        height: 32,
        padding: '0 16px',
      },
    },
    defaultProps: {
      size:"medium",
      disableElevation: true,
    },
  },
}