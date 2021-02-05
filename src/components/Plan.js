import React from 'react'
import '../components/Plan.css'

function Plan({ plan, screensize, subscribed, isBackgroundRed }) {
  return (
    <div className='plan'>
      <div className='plan__title'>
        <p>{plan}</p>
        <span>{screensize}</span>
      </div>

      <button className={isBackgroundRed ? 'plan__button' : 'plan__current'}>
        {!subscribed === true ? 'Subscribe' : 'Current Package'}
      </button>
    </div>
  )
}

export default Plan
