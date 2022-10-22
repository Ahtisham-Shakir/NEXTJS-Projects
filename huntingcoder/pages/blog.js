import React from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        <div>
          <Link href={"/blogpost/learn-javaScript"}>
            <h3 className={styles.blogItemh3}>Blog Title</h3>
          </Link>
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
      </main>
    </div>
  );
};

export default Blog;
