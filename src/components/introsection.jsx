import { useState,useEffect } from 'react';
import intro from '../style/intro.module.css'
import profile from '../media/AKS00788.JPG'
import { useRef } from 'react'

export default function Intro() {
  const homeRef=useRef(null)
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Frontend Developer', 'Data Analyst'];

  useEffect(() => {
    const changeText = () => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };
    const textChangeInterval = setInterval(changeText, 3000);
    return () => clearInterval(textChangeInterval);
  }, [texts.length]);

  const handleDownloadCV = () => {
    const cvFileName = 'Md.Amir Abdal Sobhani CV.pdf'; // The name of your CV file
    const cvURL = 'http://localhost:3000/Md.AmirAbdalSobhaniCV.pdf'
    
    const link = document.createElement('a');
    link.href = cvURL;
    link.download = cvFileName;
    link.click();
   }

    return(
        <div className={intro.under} ref={homeRef} id='home'>
            <div className={intro.intro}>
                <div>
                    <h1 >Hello, I am Md. Amir Abdal Sobhani</h1><br/>
                    <h2>I am a {texts[textIndex]}</h2>   
                    <div className={intro.texts}>a creative frontend developer with a passion for crafting beautiful, user-centric web experiences. I thrive on the ever-evolving nature of web technologies and love to push the boundaries of what's possible. Also a data scientist enthusiast. Let's connect and create something amazing together!"</div>
                    <button className={intro.CV} onClick={handleDownloadCV}>Download CV</button>
                </div>
            </div>
        <div className={intro.above}>
             <img src={profile} alt="" className={intro.profile}/>
        </div>
        </div>
    );
};
