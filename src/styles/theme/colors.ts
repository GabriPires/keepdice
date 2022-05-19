import { theme } from '@chakra-ui/react';

const baseColors = theme.colors;

export const colors = {
  green: {
    ...baseColors.green,
  },
  purple: {
    ...baseColors.purple,
    500: '#3A015C',
    600: '#32004F',
    700: '#220135',
    800: '#190028',
    900: '#11001C',
  },
  red: {
    ...baseColors.red,
  },
  gray: {
    ...baseColors.gray,
  },
  dark: {
    500: '#22242E',
  },
};
