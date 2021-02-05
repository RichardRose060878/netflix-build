import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer '>
      <div className='footer__break' />

      <div className='footer__row'>
        <ul className='footer__column'>
          <li className='footer__link' href='#'>
            FAQ
          </li>
          <li className='footer__link' href='#'>
            Investor Relations
          </li>
          <li className='footer__link' href='#'>
            Ways to Watch
          </li>
          <li className='footer__link' href='#'>
            Corporate Information
          </li>
          <li className='footer__link' href='#'>
            Netflix Originals
          </li>
        </ul>

        <ul className='footer__column'>
          <li className='footer__link' href='#'>
            Help Centre
          </li>
          <li className='footer__link' href='#'>
            Jobs
          </li>
          <li className='footer__link' href='#'>
            Terms of Use
          </li>
          <li className='footer__link' href='#'>
            Contact Us
          </li>
        </ul>

        <ul className='footer__column'>
          <li className='footer__link' href='#'>
            Account
          </li>
          <li className='footer__link' href='#'>
            Redeem gift cards
          </li>
          <li className='footer__link' href='#'>
            Privacy
          </li>
          <li className='footer__link' href='#'>
            Speed Test
          </li>
        </ul>

        <ul className='footer__column'>
          <li className='footer__link' href='#'>
            Media Centre
          </li>
          <li className='footer__link' href='#'>
            Buy gift cards
          </li>
          <li className='footer__link' href='#'>
            Cookie Preferences
          </li>
          <li className='footer__link' href='#'>
            Legal Notices
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
