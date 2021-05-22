import './Dropdown.css'
import {useState, useRef, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

function Dropdown({value, setValue}) {

    const node = useRef();
    const [open, setOpen] = useState(false)

    const openPopup = () =>{
      console.log('here')
        setOpen(!open)
    }

    // Outside click
    const closeModal = e => {
        if(node.current !== undefined){
          if (node.current.contains(e.target)){
            // inside click
            return;
          }
        }
        // outside click
        setOpen(false)
      };

    const handleOnClick = (value) =>{
        setValue(value)
        setOpen(!open)
    }

    useEffect(() => {
        document.addEventListener("mousedown", closeModal);
    
        return () => {
          document.removeEventListener("mousedown", closeModal);
        };
    }, []);

    return (
      <div className="dropdown-container" ref={node}>
          <div className="dropdown-default" role="button" onClick={() => openPopup()}>
              <div className="dropdown-title">
                  <p>{value}</p>
              </div>
              <div className="dropdown-arrow">
                <p><FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} /></p>
            </div>
          </div>
            <div className={open ? "dropdown-item" : "hide-item"} onClick={() => handleOnClick(value === 'Projects' ? 'Education' : 'Projects')}>
                <div className="dropdown-item-container">
                    <p>{value === 'Projects' ? 'Education' : 'Projects'}</p>
                </div>
            </div>
      </div>
    );
  }
  
  export default Dropdown;
  