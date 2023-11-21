import { useState } from 'react';
import { Button } from './Button';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact = ()=>{
   const [isSubmitted,setIsSubmitted] = useState(false);
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
      try{
         emailjs.sendForm(process.env.REACT_APP_SERVICE_ID || '',
         process.env.REACT_APP_TEMPLATE_ID || '',
         e.currentTarget, 
         process.env.REACT_APP_PUBLIC_KEY);
         setIsSubmitted(true);
      }catch(e){
         window.alert("Error sending the email.");
      }
    }
    return (<div>
        <h2>Contact</h2>
        {isSubmitted ? (<>
        <p>Thank you for your message!</p></>) : <></>}
        <form onSubmit={ handleSubmit}>
             <div className='form-grp'>
                <label>Name</label>
                <input className='smaller-input'></input>
             </div>
             <div className='form-grp'>
                <label>Email</label>
                <input className='smaller-input'></input>
             </div>
             <div className='form-grp'>
                <label>Message</label>
                <textarea className='message-input'></textarea>
             </div>
            <Button className='btn--primary' type='submit'>Send</Button>
        </form>
    </div>)
}
export default Contact;