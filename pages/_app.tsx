import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { theme, GlobalStyle } from 'ui-app'

import { Nav } from 'components'
import { useLocaleYup } from 'hooks'
import { store } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import Layout from 'templates/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  useLocaleYup()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />

          <Nav />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
