import { CarsProvider } from '@/context/carContext'
import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
    <CarsProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CarsProvider>
   </>
  )
}
