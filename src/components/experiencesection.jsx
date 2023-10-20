
import exp from '../style/experience.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faBuilding,faCode,faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import {faReact,faVuejs,faPython} from '@fortawesome/free-brands-svg-icons'
import expimg from '../media/workexp.png'
import { useRef } from 'react'

export default function Experience() {
    const experienceRef=useRef(null)
    return(
        <div className={exp.container} ref={experienceRef} id='experience'>
            <h1 className={exp.headertext}>Experience <FontAwesomeIcon icon={faBriefcase} /></h1> 
            <hr className={exp.line}/>
            <div className={exp.expcontainer}>
                <div className={exp.experience}>
                    <div className={exp.exptext}> <h2>Trainee Frontend Developer <FontAwesomeIcon icon={faCode} /></h2>
                         <h4><FontAwesomeIcon icon={faBuilding} /> ADN Diginet Limited</h4>
                         <h5><FontAwesomeIcon icon={faBriefcase} /> {'(March 2023 - August 2023)'}</h5>
                         <p>Technology used : </p>
                         <ul>
                            <li>React js <FontAwesomeIcon icon={faReact}  style={{height:"2.5vh",color:"#07D8FE"}}/></li>
                            <li>Vue js <FontAwesomeIcon icon={faVuejs} style={{height:"2.5vh",color:"#1C954A"}}/></li>
                            <li>Reastful Api <FontAwesomeIcon icon={faCodeBranch} /></li>
                            <li>Django(Basic) <FontAwesomeIcon icon={faPython} style={{height:"2.5vh",color:"#1C954A"}}/></li>
                         </ul>
  
                    </div>
                    <div className={exp.imgdiv}><img src={expimg} alt="" className={exp.expimg}/></div>
                </div>
            </div>
        </div>
    );
};
