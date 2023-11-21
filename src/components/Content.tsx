import * as Scroll from 'react-scroll';
import { useBlurContext } from '../Context/BlurContext';
import { SiScrollreveal } from 'react-icons/si';
import { BiChevronDown } from 'react-icons/bi';
import "./Content.css";
import { IconContext } from "react-icons";
import {FaRegHandPointRight} from 'react-icons/fa';
import {Link} from 'react-scroll';
import Contact from './Contact';
import DelayedTexts from './DelayedTexts';
import {scrollTo} from '../scrolTo';
import ProjectSection from './ProjectSection';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
export const Content = () => {
    const Element = Scroll.Element;
    const { blurred } = useBlurContext();

    const downloadPdf = () =>{
        fetch('Stefan_Sergiu-+Catalin_Resume.pdf').then(response=>{
            response.blob().then(blob=>{
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Stefan_Sergiu-+Catalin_Resume.pdf';
                alink.click();
            })
        })
    }

    
    return (
        
        <div className={`content ${blurred ? 'blurred' : 'not-blurred'}`}>
            <Element className='landing-section' name='landing'>
                <div className='hi-there-text'>Hi, there!</div>
                <p className='my-name-is'>I am <label className='highlighted'> Sergiu</label>,</p>
                
                <DelayedTexts/>
                <div className='scroll-icon'>
                    <IconContext.Provider value={{ size: '40' }}>
                        <SiScrollreveal color='white' />
                        <BiChevronDown className='arrow bounce-animation' color='white' />
                    </IconContext.Provider>
                </div>

            </Element>
            
            <Element name="about"></Element>
                <h2>About me</h2>
                <div className='description'>
                <img src={process.env.PUBLIC_URL + '/pfp.jpeg'}
                    alt="Profile Picture"
                    className='profile-image' />
                <div>
                    <p>I'm a junior web developer based in Targu Mures, Romania.</p>
                    <p>   The reason why I chose a career in web development is because
                        I like learning new things that allow me to take on new challenges.
                        The sense of accomplishment after I conquer an obstacle fuels
                        my enthusiasm for continuous learning and the web development
                        industry is the perfect place for that.
                    </p>

                    <p>  Other than writing code i enjoy playing video games and watching movies.
                        My favorite movie is Interstellar, while my favorite director is Quentin Tarantino.
                    </p>
                </div>
                </div>
            
            <div className='description-buttons'>
                        <Button onClick={downloadPdf} className='btn--primary p-desc'>Résumé</Button>
                        <Button onClick={()=>scrollTo('contact')} className='btn--primary p-desc'>Hire me</Button>
                    </div>
            <h2>I can work with:</h2>
            <section className='skills-section'>
                
                    <div className='skill'>
                        <img src={process.env.PUBLIC_URL + '/react.svg'} />
                        <p>React</p>
                    </div>
                    <div className='skill'>
                        <img src={process.env.PUBLIC_URL + '/typescript.svg'} />
                        <p>Typescript</p>
                    </div>
                    <div className='skill'>
                        <img src={process.env.PUBLIC_URL + '/java.svg'} />
                        <p>Java</p>
                    </div>
                    <div className='skill'>
                        <img src={process.env.PUBLIC_URL + '/spring.svg'} />
                        <p>Spring</p>
                    </div>
                    <div className='skill'>
                        <img src={process.env.PUBLIC_URL + '/mysql.svg'} />
                        <p>MySQL</p>
                    </div>
                    <div className='skill'>
                        <img src={process.env.PUBLIC_URL + '/git.svg'} />
                        <p>Git</p>
                    </div>               
            </section>
        <Element name="projects"></Element>
        <h2>Projects</h2>
        <ProjectSection/>

        <Element name="contact"></Element>
        <Contact/>
        <Footer/>
        </div>)
}