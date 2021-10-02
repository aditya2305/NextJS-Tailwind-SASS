import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XxIWNaawgfJKnli5VTPQdRxcpPNijxn4WRmdLg1D"
  );

  const data = res.json();

  return {
    // revalidate: 10, // WILL RERUN GETSTATICPROPS ON SERVER EVERY 10 SECONDS FOR EVERY REQUEST
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
            Say goodbye to your writing problems
          </div>
          <br />
          <div>
            {data.photos.slice(0, 10).map((item) => {
              return (
                <div>
                  <img src={item.img_src} alt="" />
                  {/* <Image
                    loader={() => item.img_src}
                    src={item.img_src}
                    alt="Picture of the author"
                  /> */}
                </div>
              );
            })}
          </div>
        </div>

        <Link href="/admin">Admin Panel</Link>
      </div>
    </Layout>
  );
}
