
import skill from '../style/skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import css from '../media/css.png'
import html from '../media/html.png'
import js from '../media/js.png'
import java from '../media/java.png'
import react from '../media/reactport.png'
// import restapi from '../media/restapi.png'
import vue from '../media/vue.png'
// import django from '../media/django.png'
import python from '../media/python.png'
import github from '../media/github.png'
import express from '../media/express.png'
import flask from '../media/flask.png'
import { useRef } from 'react'

export default function Skills() {
    const skillRef=useRef(null)
    return(
        <div className={skill.container} ref={skillRef} id='skill'>
            <h1 className={skill.headertext}>Skills <FontAwesomeIcon icon={faGear} /></h1> 
            <hr className={skill.line}/>
            <div className={skill.skillcontainer}>
                <div className={skill.skills}>
                    <ul>
                        <li><img src={html} alt="" className={skill.simage} /></li>
                        <li><img src={css} alt="" className={skill.simage}/></li>
                        <li><img src={js} alt="" className={skill.simage}/></li>
                        <li><img src={python} alt="" className={skill.simage}/></li>
                        <li><img src={react} alt="" className={skill.simage}/></li>
                        <li><img src={vue} alt="" className={skill.simage}/></li>
                        <li><img src={express} alt="" className={skill.simage}/></li>
                        <li><img src={flask} alt="" className={skill.simage}/></li>
                        <li><img src={java} alt="" className={skill.simage}/></li>
                        <li><img src={github} alt="" className={skill.simage}/></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};
