import './ContactMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function ContactMe() {

    return (
      <div className="contactme-container">
          <div className="contactme-content">
              <div className="contactme-title">
                  <p>Contact me.</p>
              </div>
              <div className="contactme-button-container">
                <a href={"mailto:devbyjordan@gmail.com"} className="contactme-link" rel="noreferrer">
                    <div className="contactme-button">
                      <div className="contactme-icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                      <p>Click here to send me an email</p>
                  </div>
                </a>
              </div>
          </div>
      </div>
    );
  }
  
  export default ContactMe;
  