
import exp from '../style/experience.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faBuilding,faCode } from '@fortawesome/free-solid-svg-icons'
import expimg from '../media/workexp.png'

export default function Experience() {
    return(
        <div className={exp.container}>
            <h1 className={exp.headertext}>Experience <FontAwesomeIcon icon={faBriefcase} /></h1> 
            <hr className={exp.line}/>
            <div className={exp.expcontainer}>
                <div className={exp.experience}>
                    <div className={exp.exptext}> <h2>Trainee Frontend Developer <FontAwesomeIcon icon={faCode} /></h2>
                         <h4><FontAwesomeIcon icon={faBuilding} /> ADN Diginet Limited</h4>
                         <h5><FontAwesomeIcon icon={faBriefcase} /> {'(March 2023 - August 2023)'}</h5>
                         <p>Technology used : </p>
                         <ul>
                            <li>React js </li>
                            <li>Vue js </li>
                            <li>Reastful Api </li>
                            <li>Django(Basic) </li>
                         </ul>
  
                    </div>
                    <div className={exp.imgdiv}><img src={expimg} alt="" className={exp.expimg}/></div>
                </div>
            </div>
        </div>
    );
};
