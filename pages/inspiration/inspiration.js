import Link from 'next/link'
import Head from 'next/head'

export default function Inspiration() {
    return (
        <>
        <Head>
            <title>Inspiration</title>
        </Head>
    <h1>Inspiration</h1>
    <h2>
        <Link href="/">
        <a>Back to home</a>
        </Link>
    </h2>
    </>
    )
}