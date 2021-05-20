import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function Card({title, desc, img, setOpenModal}) {

    

    return (
      <div className="card-container">
        <div className='card-picture'>
            <img src={process.env.PUBLIC_URL + img} alt="Thumbnail" className={title !== 'Online Tic-Tac-Toe' && title !== 'Web Server' && title !== 'Functional Interpreter'? 
            title : title !== 'Web Server' && title !== 'Functional Interpreter' ? 'tic-tac-toe' : title !== 'Functional Interpreter' ? 'web-server' : 'interpreter'}/>
        </div>
        <div className="card-text-container">
            <div className="card-title">
                <p>{title}</p>
            </div>
            <div className="card-desc">
                <p>{desc}</p>
            </div>
            <div className="card-learn-more" onClick={() => setOpenModal(true)}>
                <p><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;&nbsp;Learn more.</p>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Card;