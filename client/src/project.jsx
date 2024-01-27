import project1 from '../src/assets/project1.jpg';
import project2 from '../src/assets/project2.jpg';
// import project3 from '../src/assets/project3.jpg';
// import project4 from '../src/assets/project4.jpg';
// import project5 from '../src/assets/project5.jpg';
// import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/ 
          I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> 
          <div className="worksImgs">
                   <img src={project1} alt="project1" className="worksImg" />
                   <img src={project2} alt="project2" className="worksImg" />
                   {/* <img src={project3} alt="project3" className="worksImg" />
                   <img src={project4} alt="project4" className="worksImg" />
                   <img src={project5} alt="project5" className="worksImg" />
                   <img src={project6} alt="project6" className="worksImg" /> */}
                  
               
               </div>

          {/* <button className="workBtn">See More</button> */}
                  
                  
     </section>
    

     </>
    }
    