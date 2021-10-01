import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

const admin = () => {
  return (
    <Layout>
      <Head>
        <title>Admin Panel | Atlas AI</title>
      </Head>
      <div>Welcome to the Admin Panel</div>
      <Link href="/">Back</Link>
    </Layout>
  );
};

export default admin;
