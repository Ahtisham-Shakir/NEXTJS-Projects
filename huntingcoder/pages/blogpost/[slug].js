import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <p>{blog && blog.content}</p>
      </main>
    </div>
  );
};

// create page for indivisual slug
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-python" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// function for static site generation
export async function getStaticProps(context) {
  const { slug } = context.params;

  let data = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { blog: JSON.parse(data) },
  };
}

// function for server side rendering
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let blog = await data.json();

//   return {
//     props: { blog },
//   };
// }
export default Slug;
