import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>moshebli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mohammad Shebli" />
        <p className="description">
          <code>الموقع قيد التطوير حاليا</code>
        </p>
      </main>

      <Footer جميع الحقوق محفوظة/>
    </div>
  )
}
