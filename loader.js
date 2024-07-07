'use client'
 
export default function myImageLoader({ src, width, quality }) {
  //Please change domain to real domain in production
  return `https://phonix-pad.netlify.app/${src}?w=${width}&q=${quality || 75}`
}