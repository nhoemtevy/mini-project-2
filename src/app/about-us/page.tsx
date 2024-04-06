import React from 'react'
import styles from "./AboutUs.module.css"
import { Metadata } from 'next';
import { AboutComponent } from '@/components/cards/AboutComponent';

export const metadata: Metadata = {
  title: "About us",
  description: "This is about us shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
  return (
    <>
    <div className={styles.heading}></div>
      <AboutComponent/>
    </>
  )
}

export default page
