import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image';
import Link from 'next/link';
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          {post.img && <div className={styles.imgContainer}>
           <Image src={post.img} fill alt='blog img' className={styles.img}/>
           </div>
          }
          {!post.img && <div className={styles.imgContainer}>
           <Image src="https://images.pexels.com/photos/20309247/pexels-photo-20309247/free-photo-of-waterfall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill alt='blog img' className={styles.img}/>
           </div>
          }       
            <span className={styles.date}>{post.createdAt.toString().slice(4,16)}</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}
           </p>
            <Link href={`/blog/${post.slug}`}  className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard;