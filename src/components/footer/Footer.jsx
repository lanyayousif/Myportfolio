import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer>

        <div className="social_icon">
            <div className="all_icon">
                <a className='git_icon' href="#"><i class="fa-brands fa-github"></i></a>
                <a className='twitter_icon' href="#"><i class="fa-brands fa-twitter"></i></a>
                <a className='linkedin_icon' href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span></span>
        </div>

        <div className="gmail_link">
           <a href="#" className="email_link">lanyayusf541@gmail.com</a>
           <span></span>
        </div>
        
        <p className='text_center' style={{margin:"1rem 0px"}}>@2023 devloped by meself</p>
    </footer>
  )
}
