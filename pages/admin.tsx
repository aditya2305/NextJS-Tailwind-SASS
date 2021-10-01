import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

const admin = () => {
  return (
    <Layout>
      <Head>
        <title>Admin | Atlas AI</title>
      </Head>
      <div className="flexbox">
        <div>
          <div className="heading">Admin Panel</div>
        </div>

        <Link href="/">Home</Link>
      </div>
    </Layout>
  );
};

export default admin;
