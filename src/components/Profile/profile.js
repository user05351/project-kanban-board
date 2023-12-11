import React from 'react'
import './profile.css'
import menuArrow from '../../images/menu_arrow.png'

function Profile(props) {
  const { menu } = props
  return (
    <div className={menu ? "profile_hidden" : "profile_active"}>
      <img className={"profile_arrow"} src={menuArrow} alt=""></img>
      <ul className={"profile_ul"}>
        <li>Profile</li>
        <li>Log out</li>
      </ul>
    </div>
  )
}

export default Profile
