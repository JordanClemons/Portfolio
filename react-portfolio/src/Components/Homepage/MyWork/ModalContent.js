import './ModalContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function ModalContent({setOpenModal, focus}) {

    return (
      <div className="modalcontent-container">
          <div className="modalcontent-close">
              <div className="modalcontent-close-button" onClick={() => setOpenModal(false)}>
                  <FontAwesomeIcon icon={faTimes}/>
              </div>
          </div>
          <div className="modalcontent-content-container">
              <div className="modalcontent-content-header-container">
                <img src={process.env.PUBLIC_URL + focus[1]} className={focus[0] !== "Online Tic-Tac-Toe" ? 'test-image' : 'tic-image'} alt="product"/>
                <div className="modalcontent-content-header-title-container">
                    <div className="modalcontent-title">
                        {focus[0]}
                    </div>
                    <div className="modalcontent-links">
                        {focus[2] !== '' ? 
                            <div className="modalcontent-link">
                                <a target="_blank" rel="noreferrer" href={focus[2]}className="tech-link">
                                    <p><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;Try it out!</p>
                                </a>
                            </div>
                            :
                            <div></div>
                        }
                        <div className="modalcontent-link">
                            <a target="_blank" rel="noreferrer" href={focus[3]} className="tech-link">
                                <p><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;Code repository</p>
                            </a>
                        </div>
                    </div>
                    <div className="technologies-container">
                        <p>Created with:</p>
                        <div className="technology-section">
                            {focus[4].map((elem) =>
                                <div className="technology-container">
                                    <img src={process.env.PUBLIC_URL + elem[1]} 
                                    className={elem[0] !== 'React' ? "test-tech-image" : "react-tech-image"} alt="technology logo"/>
                                    <p>{elem[0]}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
              </div>
              <div className="modalcontent-body">
                  <div className="modalcontent-para">
                    <p>{focus[5]}</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default ModalContent;
  