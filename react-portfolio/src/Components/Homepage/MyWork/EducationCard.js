import './EducationCard.css'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'

function EducationCard({data}) {

    const [degree, setDegree] = useState(true)

    useEffect(() => {
        if(data[0] === 'Degree'){
            setDegree(true)
        }
        else{
            setDegree(false)
        }
      }, [data]);

    return (
      <div className="card-container">
          {degree ? 
            <div className="degree-wrapper">
                <div className="ub-logo-container">
                    <img src={process.env.PUBLIC_URL + '/images/ub-logo.png'} className="ub-logo" alt="ub logo"/>
                </div>
                <div className="degree-container">
                    <div className="degree-school">
                        <p>{data[1]}</p>
                    </div>
                    <div className="degree-degree">
                        <p>{data[2]}</p>
                    </div>
                    <div className="degree-gpa">
                        <p>{data[3]}</p>
                    </div>
                    <div className="degree-deans-list">
                        <p>{data[4]}</p>
                    </div>
                </div>
            </div>
            :
            <div className="courses-wrapper">
                <div className="courses-title-container">
                    <p>Relevant Courses</p>
                </div>
                <div className="courses-courses-container">
                    {data[1].map((course, index) => (
                        <div className="course-course-container">
                            <div className="course-title-container">
                                <div className="grad-icon">
                                    <p><FontAwesomeIcon icon={faGraduationCap}/></p>
                                </div>
                                <p className="course-title">{course[0]}</p>
                            </div>
                            <p className="course-grade">{course[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
          }
        
      </div>
    );
  }
  
  export default EducationCard;