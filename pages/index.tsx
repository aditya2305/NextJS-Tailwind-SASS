import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export async function getServerSideProps(context) {
  // const a = fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XxIWNaawgfJKnli5VTPQdRxcpPNijxn4WRmdLg1D")
  const a = [{ aditya: 23 }, { saxena: 53 }];

  return {
    props: {
      a,
    },
  };
}

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Home | Atlas AI</title>
      </Head>
      <div className="flexbox">
        <div>
          <div className="heading">Welcome to Atlas AI</div>
          <div style={{ textAlign: "right" }}>
            Say goodbye to your writing problems
          </div>
          <div>{props.a.saxena}</div>
        </div>

        <Link href="/admin">Admin Panel</Link>
      </div>
    </Layout>
  );
}
