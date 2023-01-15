import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Component/Navbar';
import {Slider} from './Component/Slider';


export default function App({ Component, pageProps }: AppProps) {
  return (
<>
<Slider/>

<Navbar/>
<Component {...pageProps}/>
</>
  )}
