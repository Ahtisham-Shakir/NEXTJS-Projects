import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

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
            <p className={styles.blogItemp}>{item.content.substr(0, 120)}...</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default Blog;
