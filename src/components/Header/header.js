import './header.css'
import userAvatar from '../../images/user_avatar.png'
import arrowDown from '../../images/arrow_down.png'
import arrowUp from '../../images/arrow_up.png'
import Profile from '../Profile/profile'
import { useState } from 'react' 

const Header = () => {
  const [menu, setMenu] = useState(true)

  const handleMenu = () => {
    setMenu(!menu)
  }
  
  return (
    <div className="header">
      <h1>Kanban Board</h1>
      <div className="user_menu" onClick={handleMenu}>
        <img
          className="user_menu__avatar"
          src={userAvatar}
          alt="user avatar"
        ></img>
        {menu === true ? (
          <img src={arrowDown} alt="open"></img>
        ) : (
          <img src={arrowUp} alt="close"></img>
        )}

        <Profile menu={menu} />
      </div>
    </div>
  );
}

export default Header
