import { Button } from 'react-bootstrap';
import '../styles/ProjectSection.css'
import CopyComp from './CopyComp';
const ProjectSection = () => {
const handleNavToProject =() =>{
    window.open('https://slope-emporium.vercel.app/');
}
const handleNavToGithub =() =>{
    window.open('https://github.com/sergiusergiu1234?tab=repositories');
}

    return (
    <div className="project-section-container">
        
        <div>
            <h4>Slope Emporium - Online shop sample</h4>
                <p className='project-description'>
                    In this project i used React Typescript for the frontend and Java Spring Boot for backend,
                    while the data was stored in a MySql database. 
                    <br/><br/>
                    This is a online shop sample that has basic shop features, such as product filtering, personal customer accounts,
                    wishlist, shopping carts and order placement functionality. 
                    <br/><br/>
                    The data of the products is controlled through an admin interface.
                    <br/><br/>
                 
                    
                </p>
                <CopyComp/>
                <div className='project-buttons'>
                                <Button   className='btn--primary p-desc' onClick={handleNavToProject}>Live Demo</Button>
                                <Button  className='btn--primary p-desc' onClick={handleNavToGithub}>Github</Button>
                                
                </div>
        </div>
       
       <div className="image-container">
            <img src={'./online-sop3.jpeg'} alt="Profile Picture" className="image-box"/>   
            <img src={'./online-shop.jpeg'} alt="Profile Picture" className="image-box image-overlay"/>    
        </div>
    </div>)
}

export default ProjectSection;