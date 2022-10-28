import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item) => (
          <div key={item.slug}>
            <Link href={`/blogpost/${item.slug}`}>
              <h3 className={styles.blogItemh3}>{item.title}</h3>
            </Link>
            <p className={styles.blogItemp}>
              {item.metaDesc.substr(0, 120)}...
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

// function for static site
export async function getStaticProps(context) {
  let myFile;
  let allBlogs = [];
  let data = await fs.promises.readdir("blogdata");
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs },
  };
}

// function for server side rendering
// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json();

//   return {
//     props: { allBlogs },
//   };
// }

export default Blog;
