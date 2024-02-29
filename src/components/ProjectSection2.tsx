import { Button } from "./Button";

const ProjectSection2 = ()=>{
    return (<div className="project2-section-container">
    
             <h4>Real-time chat application sample</h4>  
        
   
        <div className="project2-container">
            <video className="video-container" src={"./chat-showcase.mp4"} width="600" height="300" controls autoPlay />
            <div className="project2-description"   >
            
            <p className="project-description">
                This is a chat application similar to Whatsapp or Telegram.
                <br/><br/>
                The Real-Time Chat Application served as a valuable learning journey,
                 providing insights into the complexities of real-time communication and
                the nuances of working with a NoSQL database like MongoDB. 
                <br/><br/>
                <button className="project2-button">Visit Github repository</button> 
                <br/><br/>
                 While the project has achieved its intednded purpose, there are plans to
               incorporate new features and improvements in the future.
            </p>
            
            </div>
               
            
        </div>
        
    </div>)
}

export default ProjectSection2;