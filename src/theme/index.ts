interface ITheme {
  colors: {
    primary: string;
    background: string;
    text: string;
    white: string;
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
  colors: {
    primary: '#ffffff',
    background: '#000000',
    text: '#000000',
    white: '#ffffff',
    black: '#000000',
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
