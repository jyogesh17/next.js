import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
