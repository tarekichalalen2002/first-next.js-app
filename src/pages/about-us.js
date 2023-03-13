import Link from "next/link";
import Head from "next/head";

const Page = () => {
    return (
        <>
            <Head>
                <title>about us</title>
            </Head>
            <h1>About us</h1>
            <h1><Link href="/">Home</Link></h1>
        </>
    )
}

export default Page;