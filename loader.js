'use client'
 
export default function myImageLoader({ src, width, quality }) {
  //Please change domain to real domain in production
    // return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
    return `https://pad.phoenix.lk/${src}?w=${width}&q=${quality || 75}`
  // return `https://phonix-pad.netlify.app/${src}?w=${width}&q=${quality || 75}`
}