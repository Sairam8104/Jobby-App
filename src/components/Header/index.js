import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-logo"
          />
        </Link>
        <ul className="nav-large-bar-container">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </ul>
        <button type="button" onClick={onClickLogout} className="logOut-button">
          Logout
        </button>
        <div className="nav-container-mobile">
          <ul className="nav-mobile-bar-container">
            <Link to="/" className="nav-link">
              <li>
                <AiFillHome size="28px" />
              </li>
            </Link>
            <Link to="/jobs" className="nav-link">
              <li>
                <BsFillBriefcaseFill size="28px" />
              </li>
            </Link>
          </ul>
          <button type="button" onClick={onClickLogout} className="logout-icon">
            <FiLogOut />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
