import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles} from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
    body {
    background-image: url("https://lh3.googleusercontent.com/aCZIpsSX4Zz5YWeJR2Gl4rE4V9Mnmcd19HfKsd_WBvufRROYD_olFG6bkGaLCScZEoK1bVVRsLRLXUVYsMNIOD4eTD8YuXNMZXKSdMUZcocOs4uMWm_Y3inODDqYLMqJdWx4SjchNEFurfJo747JqyPPbclXNOcsfGr02xUkBpC7-nRXZ8ihvxZenwjtBw9LkkXCtz84vdEdnLM7wOhB6xrARCTOXTPw3MC4MPDb1ZoxvNAJfHwxV0jpofvNHWxHOiGn-a1dQ3yRfVgpDwuXmPvI-05QnACZdN3CH91FGW4SpV_X3MD4gxRAvD4DIUK6plielBee9wC5GpuQLOYa5HLU6SYyH02y7MU_uAJ_08m3vCPFZpFlIZ7qeh2rXy9oYdMIbT1FBgLm9XeEQm-uFdZY6apdtGke9wrbzxS2WRwx5bAbx5A5_YFtoYogsHXQS-FLaGxzol0hC251kgxu5XpM9p5P-k27zWfqT7_ROFx6GUZHN6vE1pM_4phrzoWvI4i6o0Kd9nAXfy97P0lE0V845V9tIhAgpR3a4oxNbw5cRJjFwY8x0x_uwPflGZVOPH_nGGSO3xm1vjfmy6y27gKKBByC1_FdXXSaXGEWi-jUyf4VSWBYeuHibfLGkyqnCXNNWm9n-jEMcrNIgPRftRzhgZgE404fNjE093zT5OhHvT9-9uP8FlcdIslvBu-gSRu99fyeWvcbK8Iwbmp7KGQGHg=w1024-h576-no?authuser=0");
    //background-color: #FFDAB9;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    font-family: sans-serif;
    }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    }

img {
  max-width: 100%;
  height: auto;
  display: block;
  }

${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
