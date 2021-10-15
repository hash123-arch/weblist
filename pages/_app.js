
import Head from "next/head";
import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // All Our Pages are rendered here that is <Component {...pageProps} /> this is also known as the children of the layout component

  return (
    <>
    <Head>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </Head>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
</>
  )
}

export default MyApp
