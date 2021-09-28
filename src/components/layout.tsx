import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  HomeIcon,
  DocumentReportIcon,
  CalculatorIcon,
  MapIcon,
} from '@heroicons/react/solid'
import config from '../config'

const { title: siteTitle, description, image } = config

const url = 'https://ootmarsum.elidon.net'
type Props = {
  children: ReactNode
  title: string
}
const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{`${siteTitle}: ${title}`}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="chalet ootmarsum camping bronnen twente twenthe springendal natuur rust bos"
      />
      <meta name="author" content="janpaul@hey.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@janpaul" />
      <meta name="twitter:author" content="@janpaul" />
      <meta name="og:title" content={`${siteTitle}: ${title}`} />
      <meta name="og:site_name" content={`${siteTitle}: ${title}`} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
      <meta name="og:site_name" content={url} />
      <meta name="og:locale" content="nl_NL" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
    </Head>
    <section className="container antialiased min-w-full min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 px-2 md:px-8">
      <header className="control border-black dark:border-white border-b-2">
        <Link href={`/`}>
          <a className="btn sm:rounded-r-none">
            <HomeIcon className="w-4" />
            Home
          </a>
        </Link>
        <Link href={`/ootmarsum`}>
          <a className="btn sm:rounded-l-none sm:rounded-r-none">
            <MapIcon className="w-4" />
            Ootmarsum
          </a>
        </Link>
        <Link href={`/springendal`}>
          <a className="btn sm:rounded-l-none sm:rounded-r-none">
            <MapIcon className="w-4" />
            Het Springendal
          </a>
        </Link>
        <Link href={`/handleiding`}>
          <a className="btn sm:rounded-l-none sm:rounded-r-none">
            <DocumentReportIcon className="w-4" />
            Handleiding
          </a>
        </Link>
        <Link href={`/rekenhulp`}>
          <a className="btn sm:rounded-l-none">
            <CalculatorIcon className="w-4" />
            Rekenhulp
          </a>
        </Link>
      </header>
      <main
        data-test="main content"
        className="flex flex-col justify-start align-baseline text-left"
      >
        {children}
      </main>
    </section>
  </>
)

export default Layout
