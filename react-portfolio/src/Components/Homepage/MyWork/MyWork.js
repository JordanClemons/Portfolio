import './MyWork.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import Content from './Content'

function MyWork() {

    const [value, setValue] = useState('Projects')
    const projects = ['Preferify', 'Tic-Tac-Toe', 'Calendarify']
    const education = ['Degree', 'Courses']

    return (
      <div className="mywork-container">
        <div className="mywork-content">
            <div className="mywork-dropdown">
                <Dropdown value={value} setValue={setValue}/>
                <Content array = {value === 'Projects' ? projects : education}/>
                <div className="mywork-bottom-arrow"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MyWork;
  