
import project from '../style/projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faCode,faChevronRight } from '@fortawesome/free-solid-svg-icons'



export default function Projects() {
    const projects=[{
        title: 'Money Management App',
        tools: 'JSX, CSS3, React, React Spring, JS, React BootStrap',
        link: 'https://github.com/sobhanifahim/React-Money-Management',
    },
    {
        title: 'Blog Post App',
        tools: 'JSX, CSS3, React, React Router, JS, Expressjs, Mysql, Rest API',
        link: 'https://github.com/sobhanifahim/react-and-express-js-blog-backend',
    },
    {
        title: 'An Effective Decision Support System for Detecting Mental State Using Brainwave',
        tools: 'Html, CSS, JS, Python, Flask, MYSQL, Machine Learning, Pandas, Numpy,Pyplot',
        link: 'https://github.com/sobhanifahim/An-effective-decision-support-system-for-detecting-mental-state'
    },{
        title: 'Photo Gallery App',
        tools: 'JSX, CSS3, React, JS, React BootStrap',
        link: 'https://github.com/sobhanifahim/Photo-Gallery-with-React'
    }]  
   
    return(
        <div className={project.container}>
            <h1 className={project.headertext}>Projects <FontAwesomeIcon icon={faLaptop} /></h1> 
            <hr className={project.line}/>
            <div className={project.projectcontainer}>
                <div className={project.projects}>
                   {projects.map((index)=>(
                    <div key={index.title} className={project.plist}>
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
