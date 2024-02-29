const ProjectSection2 = ()=>{
    return (<div className="project-section-container">

    <video className="video-container" src={"./chat-showcase.mp4"} width="600" height="300" controls autoPlay />
        <div>
            <h4>Real-time chat application sample</h4>
            <p className="project-description">
                This is a chat application similar to Whatsapp or Telegram.
                <br/><br/>
                The Real-Time Chat Application served as a valuable learning journey,
                 providing insights into the complexities of real-time communication and
                the nuances of working with a NoSQL database like MongoDB. 
                <br/><br/>
                 While the project has achieved its intednded purpose, there are plans to
               incorporate new features and improvements in the future.

            </p>
        </div>
   
    </div>)
}

export default ProjectSection2;