import { gray, blue, red, green } from '@radix-ui/colors';

// BREAKPOINTS
const breakpoints = [400, 600, 960, 1280, 1920];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const radixtheme = {
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,

    bgGreen50: 'rgba(10, 121, 0, 0.5)',
    bgGreen: 'rgba(10, 121, 0, 1)',
    bgBlue50: 'rgba(23,85,118,0.5)',
    bgBlue: 'rgba(23,85,118,1)',
    bgGrey: 'rgba(232, 232, 232, 1)',
    bgWhite50: 'rgba(255,255,255,0.5)',
    bgWhite75: 'rgba(255,255,255,0.75)',
    bgWhite: 'rgba(255,255,255,1)',
    bgRed: 'rgba(121, 0, 0, 1)',
    bgRedLight: 'hsl(0,100%,36%)',
    bgRed20: 'hsl(0,100%,20%)',
    bgRedSolid: 'hsl(0,100%,12%)',
    bgRed50: 'rgba(121, 0, 0, 0.5)',
    typoBlack: 'rgba(0,0,0,1)',
    typoGrey: 'rgba(64, 64, 64, 1)',
    typoGreen: 'rgba(10, 121, 0, 1)',
    typoBlue: 'rgba(23,85,118,1)',
    typoRed: 'rgba(121, 0, 0, 1)',
    shadowGrey: 'rgba(122,122,122,1)',
  },
  breakpoints: {
    mq,
  },
};
