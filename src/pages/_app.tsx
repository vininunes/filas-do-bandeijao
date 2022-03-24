import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import store from '@/store'

import GlobalStyle from '@/styles/global'
import theme from '@/styles/theme'

import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
