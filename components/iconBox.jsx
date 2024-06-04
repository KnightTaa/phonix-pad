import Image from 'next/image'
import React from 'react'

const IconBox = ({icon, className}) => {
  return (
    <div>
        <Image src={`/${icon}.png`} width={100} height={100} alt='logo' className={`${className}`}/>
    </div>
  )
}

export default IconBox