import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { fetchPosts } from '../utils/fetchPosts'

export default function Home({ posts }) {
  return (
    <div className='relative'>
      <Head>
        <title>Medium Bhd</title>
        <meta name="description" content="Medium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Posts posts={posts} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const posts = await fetchPosts();

  return {
    props: {
      posts
    }
  }
}