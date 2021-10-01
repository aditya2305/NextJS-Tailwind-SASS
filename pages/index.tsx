import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Atlas AI</title>
      </Head>
      <div className="flexbox">
        <div>
          <div className="heading">Welcome to Atlas AI</div>
          <div>One Stop Solution for all your writing problems</div>
        </div>

        <Link href="/admin">Admin Panel</Link>
      </div>
    </Layout>
  );
}
