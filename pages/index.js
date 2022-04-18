import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3><p>Hello!I'm M Sandeep.I'm Full Stack Developer</p></h3>
          <a href='https://sandeepmichael.github.io'>My Website</a>

        <h3>
          <Link href='/posts/first-post'>
            Next Page
          </Link>
        </h3>
      </section>
    </Layout>
  )
}