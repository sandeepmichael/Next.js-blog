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
        <p>Hello,I'm Sandeep.I'm full stack developer.My website {' '}<a href='https://sandeepmichael.github.io'>Click Here</a></p>
        
        <h3>
          <Link href='/posts/first-post'>
          Next Page
          </Link>
        </h3>
      </section>
    </Layout>
  )
}