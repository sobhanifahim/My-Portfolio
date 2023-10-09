import contact from '../style/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import github from '../media/github.png'
import LinkeIn from '../media/linkedin.png'
export default function Contact() {
    return(
        <div className={contact.cdiv}>
            <h1 className={contact.headertext}>Contacts</h1>
            <div className={contact.container}>
            <div className={contact.contacts}>
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope}/> fahim.sobhnai12@gmail.com</li>
                    <li><FontAwesomeIcon icon={faPhone}/> 01400495443</li>
                    <li><FontAwesomeIcon icon={faLocationDot}/> 47/2,48/1 R.K Mission Road, Dhaka-1203</li>
                </ul>

            </div>
            <div className={contact.imgdiv}>
                <ul>
                    <li><img src={LinkeIn} alt=""/></li>
                    <li><img src={github} alt="" /></li>
                </ul>
            </div>
            </div>
    </div>
    );
};
