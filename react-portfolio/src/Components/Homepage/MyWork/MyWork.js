import './MyWork.css'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import Content from './Content'
import ModalContent from './ModalContent'

import {projects, education, depth} from './Strings'

function MyWork() {

    const [value, setValue] = useState('Projects')
    const [array, setArray] = useState(projects)
    const [openModal, setOpenModal] = useState(false)
    const [focus, setFocus] = useState(depth[0])

    useEffect(() => {
      if(value === 'Projects'){
        setArray(projects)
      }
      else{
        setArray(education)
      }
    }, [value]);

    const goToScroll = () =>{
      window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})
    }

    return (
      <div className="mywork-container">
        <div className="mywork-content">
            <div className="mywork-dropdown">
                <Dropdown value={value} setValue={setValue}/>
                <Content array = {array} type={value} setOpenModal={setOpenModal} setFocus={setFocus}/>
                
            </div>
        </div>
        <div className="mywork-bottom-arrow" onClick={() => goToScroll()}><FontAwesomeIcon icon={faChevronDown} /></div>
        <div className={`modal-background modalvisible-${openModal}`}>
                <div className="modal-bubble">
                  <ModalContent setOpenModal={setOpenModal} focus={focus}/>
                </div>
        </div>
      </div>
    );
  }
  
  export default MyWork;
  