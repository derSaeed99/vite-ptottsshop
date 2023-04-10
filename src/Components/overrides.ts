import { Components } from '@mui/material/styles';
import { ButtonOverrides } from './Button';
import { AppBarOverrides } from './AppBar/TopBar';

export const overrides: Components = {
  ...ButtonOverrides,
  ...AppBarOverrides,
};
