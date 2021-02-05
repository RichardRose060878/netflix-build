import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import Plan from '../components/Plan'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './ProfileScreen.css'

function ProfileScreen() {
  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
            alt=''
          />

          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans (Current Plan: premium)</h3>
              <div className='profileScreen__plan'>
                <p>Renewal date: 04/03/2021</p>
                <Plan
                  isBackgroundRed={true}
                  subscribed={false}
                  plan='Netflix Standard'
                  screensize='1080p'
                />
                <Plan
                  isBackgroundRed={true}
                  subscribed={false}
                  plan='Netflix Basic'
                  screensize='480p'
                />
                <Plan
                  isBackgroundRed={false}
                  subscribed={true}
                  plan='Netflix Premium'
                  screensize='4K+HDR'
                />
                <button
                  onClick={() => auth.signOut()}
                  className='profileScreen__signOut'
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
