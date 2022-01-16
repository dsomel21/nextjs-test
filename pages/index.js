import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Just a guy who wants to test out Next JS. Most excited to applying
          these learnings on{' '}
          <a href='https://spg.dev/' target='_blank'>
            SPG
          </a>
          . Catch me on{' '}
          <a href='https://twitter.com/dilrajio/' target='_blank'>
            Twitter
          </a>
          !
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
