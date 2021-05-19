import './MyWork.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import Content from './Content'

import {projects} from './Strings'

function MyWork() {

    const [value, setValue] = useState('Projects')
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
  