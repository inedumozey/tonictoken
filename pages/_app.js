import Layout from "../layout/Layout"
import { GlobalStyles } from "../styles/globalStyles"

function MyApp({ Component, pageProps }) {


  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </>
    
  )
}

export default MyApp
