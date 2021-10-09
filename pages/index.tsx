import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import { GetStaticProps } from "next";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XxIWNaawgfJKnli5VTPQdRxcpPNijxn4WRmdLg1D"
  );

  const data = res.json();

  return {
    revalidate: 10, // WILL GENERATE PAGE ATMOST ONCE EVERY 10 SECONDS BETWEEN USER REQUESTS
    props: { data: await data },
  };
};

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Home | Atlas AI</title>
      </Head>
      <div className="flexbox">
        <div>
          <div className="heading">Welcome to Atlas AI</div>
          <div style={{ textAlign: "right" }}>
            Everything is nothing without within
          </div>
          <br />
        </div>

        <Link href="/admin">Admin Panel</Link>
      </div>
      <div>
        {data.photos.slice(0, 5).map((item) => (
          <div key={item.id}>
            <Image src={item.img_src} alt="" height={1080} width={1920} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
