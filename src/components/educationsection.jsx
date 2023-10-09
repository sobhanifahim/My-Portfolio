
import edu from '../style/education.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate,faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import eduimg from '../media/education.png'
export default function Education() {
    const edudata=[{
        Institution : 'East West University',
        Degree: 'Bsc. Computer Science and Engineering',
        time: '2019 - 2023',
        Cgpa: '3.60'
    },{
        Institution : 'Birshreshtha Munshi Abdur Rouf Public College',
        Degree: 'H.S.C',
        time: '2015 - 2017',
        Cgpa: '5.00'
    },{
        Institution : 'Motijheel Govt. Boys High School',
        Degree: 'S.S.C',
        time: '2013 - 2015',
        Cgpa: '5.00'
    }]
    return(
        <div className={edu.container}>
            <h1 className={edu.headertext}>Education <FontAwesomeIcon icon={faUserGraduate} /></h1> 
            <hr className={edu.line}/>
            <div className={edu.educontainer}>
                <div className={edu.education}>
                    <div className={edu.imgdiv}><img src={eduimg} alt="" className={edu.eduimg}/></div>
                    <div className={edu.edutext}> 
                         { edudata.map((index)=>(
                              <div key={index.Institution} className={edu.edudetail}>
                               <h2>{index.Degree}</h2>
                               <h3>{index.Institution} <FontAwesomeIcon icon={faBuildingColumns} /></h3>
                               <p>{index.time}</p>
                               <p>CGPA: {index.Cgpa}</p>
                              </div>
                         ))

                         }
                    </div>
                </div>
            </div>
        </div>
    );
};
