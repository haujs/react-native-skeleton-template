import { DefaultTheme, Theme } from '@react-navigation/native';

export interface ITheme extends Theme {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    lightGrey: string;
    rouge: string;
    brightOrange: string;
    greyishBrown: string;
    greyish: string;
    white: string;
    whiteTwo: string;
    veryLightPink: string;
    black60: string;
    pinkishGrey50: string;
    black12: string;
    black14: string;
    pinkishGrey: string;
    warmGrey: string;
    greyishTwo: string;
    lightGreyTwo: string;
    slateGrey: string;
    deepSkyBlue: string;
    kellyGreen: string;
    lightGreyGreen: string;
    kellyGreenTwo: string;
    beige: string;
    amber: string;
    pale: string;
    black: string;
  };
  fonts: {
    NotoSansJP: {
      bold: string;
      light: string;
      medium: string;
      regular: string;
    };
  };
}

const theme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    lightGrey: '#f5f4f0',
    rouge: '#c02425',
    brightOrange: '#ff6d04',
    greyishBrown: '#555555',
    greyish: '#aaaaaa',
    white: '#ffffff',
    whiteTwo: '#dddddd',
    veryLightPink: '#ffeae9',
    black60: 'rgba(0,0,0,0.6)',
    pinkishGrey50: 'rgba(201,201,201,0.5)',
    black12: 'rgba(0,0,0,0.12)',
    black14: 'rgba(0,0,0,0.14)',
    pinkishGrey: '#c9c9c9',
    warmGrey: '#999999',
    greyishTwo: '#a6a49c',
    lightGreyTwo: '#f2efe7',
    slateGrey: '#53525a',
    deepSkyBlue: '#0083ff',
    kellyGreen: '#069e2d',
    lightGreyGreen: '#cdecd5',
    kellyGreenTwo: '#079e2c',
    beige: '#f2d3d3',
    amber: '#ffba08',
    pale: '#fff1cc',
    black: '#000',
  },
  fonts: {
    NotoSansJP: {
      bold: 'NotoSansCJKjp-Bold',
      light: 'NotoSansCJKjp-Light',
      medium: 'NotoSansCJKjp-Medium',
      regular: 'NotoSansCJKjp-Regular',
    },
  },
};

export default theme;
