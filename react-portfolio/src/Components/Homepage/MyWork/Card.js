import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function Card({title, desc, img}) {

    return (
      <div className="card-container">
        <div className='card-picture'>
            <img src={process.env.PUBLIC_URL + img} alt="Thumbnail" className={title !== 'Online Tic-Tac-Toe' ? title : 'tic-tac-toe'}/>
        </div>
        <div className="card-text-container">
            <div className="card-title">
                <p>{title}</p>
            </div>
            <div className="card-desc">
                <p>{desc}</p>
            </div>
            <div className="card-learn-more">
                <p><FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;&nbsp;Learn more.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Card;