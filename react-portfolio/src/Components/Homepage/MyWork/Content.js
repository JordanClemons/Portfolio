import './Content.css'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import EducationCard from './EducationCard'

function Content({array, type, setOpenModal}) {

    const [curr, setCurr] = useState(0)
    const [dir, setDir] = useState('left')

    useEffect(() => {
        setCurr(0)
      }, [array, type]);

    // const AUTOSCROLL = 5000;
    // useEffect(() => {
    // const interval = setInterval(() => {
    //     goRight();
    // }, AUTOSCROLL );
    
    // return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    // },)

    const goLeft = () =>{
        setDir('left')
        if(curr !== 0){
            setCurr(curr - 1)
        }
        else{
            setCurr(array.length - 1)
        }
    }

    const goRight = () =>{
        setDir('right')
        if(curr !== array.length - 1){
            setCurr(curr + 1)
        }
        else{
            setCurr(0)
        }
    }


    // console.log(array)
    return (
        <div className="main-content">
            <div className="content-container">
                <div className="content-arrow" onClick={() => goLeft()}><FontAwesomeIcon icon={faChevronLeft}/></div>
                    <div key={array[curr]} className={dir === 'left' ? 'moveInLeft' : 'moveInRight'}>
                        {array[0][0] !== 'Degree' ? 
                            <Card title={array[curr][0]} desc={array[curr][1]} img={array[curr][2]} setOpenModal={setOpenModal}/>:
                            <EducationCard data={array[curr]}/>
                        }
                    </div>
                <div className="content-arrow" onClick={() => goRight()}><FontAwesomeIcon icon={faChevronRight}/></div>
            </div>
            <div className="page-dot-container">
                {array.map((elem, index) =>
                    <div className={index === curr ? 'dot-filled': 'dot-empty'}>&nbsp;</div>
                    )}
                </div>
        </div>
    );
  }
  
  export default Content;
  