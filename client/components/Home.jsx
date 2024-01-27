import anme from '../src/assets/anme.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          {/* <span className="hello">Hello!</span><br/> */}
          <span className="introText">Hello! I'm <span className="introName">Aleli Macapagal</span> 
          <img className="anme" src={anme} alt="profile"  width="450" height="450" align="left" />
          <br/>Website Designer</span>
          {/* <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p> */}
          <span  align="center"className="worksDesc">"My mission is to reach the goal of my clients, create a web site that is suitable for their needs 
          <br/>and strive for a modern website layout and high organic search engine rankings."</span> 
          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>        
          </div>
          
     </section>
    

     </>
     }
    