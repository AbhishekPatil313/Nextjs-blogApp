import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            We create digital ideas that are bigger , bolder , braver and better.
          </h1>
          <p className={styles.description}>
          &nbsp; &nbsp; &nbsp;  Welcome to NextBlog , a diverse online platform dedicated to exploring a
          multitude of topics and interests. 
          Whether you're passionate about technology, culture, lifestyle, travel, or anything in between, we've got you covered. 
          Our team of writers brings a unique blend of expertise and perspective, ensuring that every post offers something valuable and inspiring for our readers.
          From informative guides and in-depth analyses to personal anecdotes and creative musings, there's always something new to discover on 
          NextBlog . 
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src="/about.png" alt='Picture of the author' fill  className={styles.img}/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage