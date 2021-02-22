import App from 'next/app';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#008960',
  },
  spacing: [0, 4, 8, 12, 16, 20]
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}