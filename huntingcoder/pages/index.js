import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{`
        h2 {
          font-size: 38px;
        }
        h3 {
          font-size: 28px;
        }
      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>
        <div className={styles.imgContainer}>
          {/* we cannot use next Image component in static site generation */}
          {/* <Image
            src={"/home.jpg"}
            className={styles.myImg}
            width={240}
            height={160}
          /> */}
          <img
            className={styles.myImg}
            src="/home.jpg"
            width={240}
            height={160}
            alt="hunting coder"
          />
        </div>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItems">
            <h3>Blog Title</h3>
            <p>Blog description</p>
          </div>
          <div className="blogItems">
            <h3>Blog Title</h3>
            <p>Blog description</p>
          </div>
          <div className="blogItems">
            <h3>Blog Title</h3>
            <p>Blog description</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>Ahtisham Shakir</span>
        </a>
      </footer>
    </div>
  );
}
