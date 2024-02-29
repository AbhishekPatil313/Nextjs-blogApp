import Image from "next/image";
import styles from "./singlePostPage.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const  getData = async (slug)=> {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if(!res.ok){
    throw new Error("Something went wrong !");
  }
  return res.json()
}


export const generateMetadata = async({params})=>{
  const {slug}=params;
  const post = await getData(slug);
  // const post = await getPost(slug);
  return {
    title : post.title,
    description : post.desc,
  }
}


const SinglePostPage = async({params}) => {
  const {slug}=params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
       {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="description" fill/>
        </div>}
       {!post.img &&  <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/20309247/pexels-photo-20309247/free-photo-of-waterfall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="descrition" fill/>
        </div>}
        <div className={styles.textContainer}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.detail}>
              <Suspense fallback={<div>Loading...</div>}>
                   <PostUser userId={post.userId}/>
              </Suspense>
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
              </div>
          </div>
          <div className={styles.content}>
              {post.desc}
          </div>
        </div>
    </div>
  )
}

export default SinglePostPage;