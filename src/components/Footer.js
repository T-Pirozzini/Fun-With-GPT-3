import React from 'react'

// react icons
import { AiOutlineCopyrightCircle, AiOutlineGithub } from "react-icons/ai";

// styles
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div>Travis Pirozzini <AiOutlineCopyrightCircle /></div>
        <a href="https://github.com/T-Pirozzini/Fun-With-GPT-3"><AiOutlineGithub /> Check out the code</a>
      </div>
    </div>
  )
}
