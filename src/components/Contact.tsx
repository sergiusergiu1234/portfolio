import { useState } from 'react';
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
        console.log('failed')
      }
    }
    return (<div className=' flex flex-col  text-white w-[90vw]'>
        <h2  className="text-[#02e394] text-2xl font-extrabold self-left ml-[10vw] mt-[2vw]">Contact</h2>
        {isSubmitted ? (<>
        <p className="text-[#02e394] text-xl font-extrabold">Thank you for your message!</p></>) : <></>}
        <form className='w-[90vw]' onSubmit={ handleSubmit}>
             <div className='flex flex-row m-[2vw]'>
                <label className='w-[100px]'>Name</label>
                <input className='  text-black'></input>
             </div>
             <div className='flex flex-row m-[2vw] '>
                <label  className='w-[100px]'>Email</label>
                <input className='  text-black'></input>
             </div>
             <div className='flex flex-row m-[2vw] '>
                <label  className='w-[100px]'>Message</label>
                <textarea className='w-[70vw] text-black'></textarea>
             </div>
            <button className='bg-slate-600 border-amber-900 border-solid border-10' type='submit'>Send message</button>
        </form>
    </div>)
}
export default Contact;