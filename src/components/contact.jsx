import contact from '../style/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,faFacebook,fa} from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react'

export default function Contact() {
    const contactRef=useRef(null)
    return(
        <div className={contact.cdiv} ref={contactRef} id='contact'>
            <h1 className={contact.headertext}>Contacts</h1>
            <div className={contact.container}>
            <div className={contact.contacts}>
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope}/> fahim.sobhnai12@gmail.com</li>
                    <li><FontAwesomeIcon icon={faPhone}/> 01400495443</li>
                    <li><FontAwesomeIcon icon={faLocationDot}/> 47/2,48/1 R.K Mission Road, Dhaka-1203</li>
                </ul>

            </div>
            <div className={contact.socialdiv}>
                <ul>
                    <li><a href="https://www.facebook.com/sobhani.fahim/"><FontAwesomeIcon icon={faFacebook}  className={contact.icons}/></a></li>
                    <li><a href="https://github.com/sobhanifahim"><FontAwesomeIcon icon={faGithub} className={contact.icons}/></a></li>
                    <li><a href="https://www.linkedin.com/in/md-amir-abdal-sobhani-5ba90b207/"><FontAwesomeIcon icon={faLinkedin} className={contact.icons}/></a></li>
                </ul>
            </div>
            </div>
    </div>
    );
};
