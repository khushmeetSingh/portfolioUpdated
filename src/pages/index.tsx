import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import  LandingPage  from './landing-page'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <LandingPage></LandingPage>
    </>
  )
}
