import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Atlas AI</title>
      </Head>
      <div>Welcome to Atlas AI</div>
      <div>One Stop Solution for all your writing problems</div>
      <Link href="/admin">Admin Panel</Link>
      <Image src="/images/profile.jpg" height={200} width={150} />
    </Layout>
  );
}
