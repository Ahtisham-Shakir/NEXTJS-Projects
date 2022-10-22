import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
  const [blog, setBlog] = useState({});

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;

    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        console.log(data);
      });
  }, [router.isReady]);

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

export default Slug;
