import './Header.css'
import {useState} from 'react'
import Logo from '../../../Assets/github-logo.png'
import LinkedInLogo from '../../../Assets/linkedin-logo.png'
import EmailLogo from '../../../Assets/email-logo.png'
import { education } from '../MyWork/Strings'


function Header() {

  const [shadow, setShadow] = useState('noShadow')
  const [focus, setFocus] = useState('home')

  const handleScroll = (scroll) => {
    if(scroll > 80){setShadow('shadow')}
    else{setShadow('noShadow')}
    if(scroll < (document.documentElement.scrollHeight / (3.25 / .75))){
      setFocus('home')
    }
    else if(scroll > (document.documentElement.scrollHeight / (3.25 / .75)) && scroll < 2 * (document.documentElement.scrollHeight / (3.25 / .75))){
      setFocus('work')
    }
    else{
      setFocus('contact')
    }
  }

  const goToScroll = (page) =>{
    if(page === 'home'){
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
    else if(page === 'work'){
      window.scrollTo({top: document.documentElement.scrollHeight / 3.25, behavior: 'smooth'})
    }
    else if(page === 'contact'){
      window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})
    }
  }

  window.onscroll = () => handleScroll(document.documentElement.scrollTop)

    return (
      <div className={`header-container ${shadow}`}>
        <div className="header-title-section">
          <div className={focus === 'home' ? 'focus-home' : 'header-title-home'} onClick={() => goToScroll('home')}>
            <p>Home</p>
          </div>
          <div className={focus === 'work' ? 'focus-work' : 'header-title-work'} onClick={() => goToScroll('work')}>
            <p>My Work</p>
          </div>
          <div className={focus === 'contact' ? 'focus-contact' : 'header-title-contact'} onClick={() => goToScroll('contact')}>
            <p>Contact Me</p>
          </div>
        </div>
        <div className="header-links">
          <a target="_blank" rel="noreferrer" href="https://github.com/JordanClemons">
            <div className={`header-button-${focus}`}>
              <img src={Logo} className="git-logo" alt="github button"></img>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jordan-clemons/">
            <div className={`header-button-${focus}`}>
              <img src={LinkedInLogo} className="linkedin-logo" alt="linkedin button"></img>
            </div>
          </a>
        </div>
        {/* <div className="darkmode-container">
          <div>dddd</div>
        </div> */}
      </div>
    );
  }
  
  export default Header;
  