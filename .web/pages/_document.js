import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"



export default function Document() {
  return (
    <Html>
  <Head>
  <Script src={`https://www.googletagmanager.com/gtag/js?id=G-Y6GDVB3FJB`} strategy={`afterInteractive`}/>
  <Script strategy={`afterInteractive`}>
  {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Y6GDVB3FJB');
`}
</Script>
</Head>
  <body>
  <Main/>
  <NextScript/>
</body>
</Html>
  )
}
