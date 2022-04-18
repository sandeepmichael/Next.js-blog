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
        <p>Hello!i'm Mahadari Sandeep pursuing my fulltime engineering course
          in branch of metallurgical engineering in JNTU hyderabad.

          As a student some technical skills much needed.so i started to learn some
          skills.most of the time i spend lot in code and popular JSlibrary and frameworks which are completely
          guiding me to a developer in future.</p>
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