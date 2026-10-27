import type {Metadata,Viewport} from 'next'
import {DM_Mono,DM_Sans,Playfair_Display} from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AmbientLightning from '@/components/AmbientLightning'

const sans=DM_Sans({subsets:['latin'],variable:'--font-sans',display:'swap'})
const serif=Playfair_Display({subsets:['latin'],variable:'--font-serif',display:'swap'})
const mono=DM_Mono({subsets:['latin'],weight:['400','500'],variable:'--font-mono',display:'swap'})

export const metadata:Metadata={
  title:{default:'CreatorTax India — Make money. Keep it clear.',template:'%s | CreatorTax India'},
  description:'Practical Indian tax, GST and money guides for freelancers, creators and independent professionals.',
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://creatortax.in'),
  openGraph:{type:'website',siteName:'CreatorTax India',title:'CreatorTax India — Make money. Keep it clear.',description:'Tax and money guides for India’s independent minds.'},
  robots:{index:true,follow:true}
}
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#f6f5f0'}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <AmbientLightning />
        <SmoothScroll>
          <Header/>
          {children}
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  )
}
