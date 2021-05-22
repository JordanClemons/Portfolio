import './AboutMe.css'
import ProfilePic from '../../../Assets/profile-pic.png'
import Resume from '../../../Assets/FakeResume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
    return (
      <div className="aboutme-container">
        <div className="bio-container">
            <div className="profilePic-container">
                <img src={ProfilePic} className="profilePic" alt="profile headshot"/>
                <div className="profileText-container">
                  <div className="one-line">
                    <p>email: &nbsp;</p>
                    <p className="red">devbyjordan@gmail.com</p>
                  </div>
                  <div className="one-line">
                    <p>mobile:&nbsp;</p>
                    <p className="red">(716) 535-6776</p>
                  </div>
                </div>
            </div>
            <div className="bioText-container">
                <div className="bio-header">Hey, I'm Jordan.</div>
                <div className="bio-subheader">I'm a software developer from the University at Buffalo who enjoys programming, web development, and solving problems.</div>
                
                <a target="_blank" rel="noreferrer" href={Resume} className="resume-text">
                  <div><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;&nbsp;Check out my resume.</div>
                </a>
            </div>
        </div>
        <div className="bottom-arrow"><FontAwesomeIcon icon={faChevronDown} /></div>
      </div>
    );
  }
  
  export default AboutMe;
  