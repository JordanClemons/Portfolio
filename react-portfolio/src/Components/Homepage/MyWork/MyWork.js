import './MyWork.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'

function MyWork() {

    const [value, setValue] = useState('Projects')

    return (
      <div className="mywork-container">
        <div className="mywork-content">
            <div className="mywork-dropdown">
                <Dropdown value={value} setValue={setValue}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default MyWork;
  