import './Header.css'
import {useState} from 'react'
import Logo from '../../../Assets/github-logo.png'
import LinkedInLogo from '../../../Assets/linkedin-logo.png'
import EmailLogo from '../../../Assets/email-logo.png'


function Header() {

  const [shadow, setShadow] = useState('noShadow')

  const handleScroll = (scroll) => {
    if(scroll > 80){setShadow('shadow')}
    else{setShadow('noShadow')}
  }

  window.onscroll = () => handleScroll(document.documentElement.scrollTop)

    return (
      <div className={`header-container ${shadow}`}>
        <div className="header-links">
          <div className="header-button">
            <img src={Logo} className="git-logo" alt="github button"></img>
          </div>
          <div className="header-button">
            <img src={LinkedInLogo} className="linkedin-logo" alt="linkedin button"></img>
          </div>
          <div className="header-button">
            <img src={EmailLogo} className="email-logo" alt="email button"></img>
          </div>
        </div>
        <div className="darkmode-container">
          <div>darkmode</div>
        </div>
      </div>
    );
  }
  
  export default Header;
  