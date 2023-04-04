import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
// import {Poppins} from 'next/font/google'

export default function Document() {
  // const poppins = Poppins({subsets:['latin']})
  return (
    <Html lang="en">
      <Head />
      {/* <Link as="font" rel="preload" href="/fonts/Poppins-Regular.ttf"></Link>
      <Link as="font" rel="preload" href="/fonts/Poppins-Bold.ttf"></Link>
      <Link as="font" rel="preload" href="/fonts/Poppins-ExtraBold.ttf"></Link> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
