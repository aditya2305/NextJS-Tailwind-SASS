import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Something</title>
      </Head>
      <div>Welcome to Atlas AI</div>
      <div>One Stop Solution for all your writing problems</div>
      <Link href="/admin">Admin Panel</Link>
      <Image src="/images/profile.jpg" height={200} width={150} />
    </div>
  );
}
