
import project from '../style/projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faCode,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import money from '../media/money.JPG'
import decision from '../media/dss.jpeg'
import blogpost from '../media/home1.JPG'
import gallery from '../media/gallery.jpeg'


export default function Projects() {
    const projectRef=useRef(null)
    const projects=[{
        title: 'Money Management App',
        tools: 'JSX, CSS3, React, React Spring, JS, React BootStrap',
        link: 'https://github.com/sobhanifahim/React-Money-Management',
        photo: money
    },
    {
        title: 'Blog Post App',
        tools: 'JSX, CSS3, React, React Router, JS, Expressjs, Mysql, Rest API',
        link: 'https://github.com/sobhanifahim/react-and-express-js-blog-backend',
        photo: blogpost
    },
    {
        title: 'Decision Support System for Detecting Mental State ',
        tools: 'Html, CSS, JS, MYSQL, Machine Learning, Pandas, Numpy,Pyplot',
        link: 'https://github.com/sobhanifahim/An-effective-decision-support-system-for-detecting-mental-state',
        photo: decision
    },{
        title: 'Photo Gallery App',
        tools: 'JSX, CSS3, React, JS, React BootStrap',
        link: 'https://github.com/sobhanifahim/Photo-Gallery-with-React',
        photo: gallery
    }]  
    
    return(
        <div className={project.container} ref={projectRef} id='project'>
            <h1 className={project.headertext}>Projects <FontAwesomeIcon icon={faLaptop} /></h1> 
            <hr className={project.line}/>
            <div className={project.projectcontainer}>
                <div className={project.projects}>
                   {projects.map((index)=>(
                    <div key={index.title} className={project.plist}>
                      
                        <img src={index.photo} alt="" className={project.pimg}/>
                        <h3>{index.title}</h3>
                        <h4>Tools: {index.tools}</h4>
                        <div className={project.btndiv}>
                        <a href={index.link} target="_blank" rel="noopener noreferrer">
                           <button className={project.view}><FontAwesomeIcon icon={faCode} /></button>
                        </a>
                        </div>
                    </div>
                   ))

                   }
                   <a href='https://github.com/sobhanifahim' className={project.more}> More Projects <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
            </div>
        </div>
    );
};
