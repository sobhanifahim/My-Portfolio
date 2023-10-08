import Nav from '../style/navbar.module.css'

export default function Navbar() {
    return(
        <div className={Nav.box}>
            <div className={Nav.options}>
                <ul>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>

                </ul>
            </div>
        </div>
    );
};
