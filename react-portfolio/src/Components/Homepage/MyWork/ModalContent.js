import './ModalContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function ModalContent({setOpenModal}) {

    return (
      <div className="modalcontent-container">
          <div className="modalcontent-close">
              <div className="modalcontent-close-button" onClick={() => setOpenModal(false)}>
                  <FontAwesomeIcon icon={faTimes}/>
              </div>
          </div>
          <div className="modalcontent-content-container">
              <div className="modalcontent-content-header-container">
                <img src={process.env.PUBLIC_URL + 'images/preferify.png'} className="test-image" alt="product"/>
                <div className="modalcontent-content-header-title-container">
                    <div className="modalcontent-title">
                        Preferify
                    </div>
                    <div className="modalcontent-links">
                        <div className="modalcontent-link">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jordan-clemons/" className="tech-link">
                                <p><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;Try it out!</p>
                            </a>
                        </div>
                        <div className="modalcontent-link">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jordan-clemons/" className="tech-link">
                                <p><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;Code repository</p>
                            </a>
                        </div>
                    </div>
                    <div className="technologies-container">
                        <p>Created with:</p>
                        <div className="technology-section">
                            <div className="technology-container">
                                <img src={process.env.PUBLIC_URL + 'images/python.png'} className="test-tech-image" alt="technology logo"/>
                                <p>Python</p>
                            </div>
                            <div className="technology-container">
                                <img src={process.env.PUBLIC_URL + 'images/python.png'} className="test-tech-image" alt="technology logo"/>
                                <p>Python</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="modalcontent-body">
                  <div className="modalcontent-para">
                    <p>Preferify is a web application that connects to your Spotify 
                        account to show you your top songs of any time period. You can 
                        make a playlist out your Preferify list and even share it on twitter. 
                        Preferify was created to work on your desktop as well as mobile device.
                        </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default ModalContent;
  