import React from 'react'

// react icons
import { SiProbot } from "react-icons/si";

// styles
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="title"><SiProbot className='icon'/> Fun With GPT-3</div>
    </div>
  )
}
