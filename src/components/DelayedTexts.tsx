import { useEffect, useState } from "react";
import './Content.css';


const DelayedTexts = () => {
    const [texts,setTexts] = useState<string[]>([]);
    
    useEffect(()=>{
        const timeouts:NodeJS.Timeout[] = [];
       ['FULL','STACK',"DEVELOPER"].forEach((text,i)=>{
            const timeuoutId = setTimeout(()=>{
                setTexts((prev)=>[...prev,text]);
                
            },i === 0 ? 4000 : 4000 + 900 *i);
            timeouts.push(timeuoutId);
       })
       return ()=>{
        timeouts.forEach((id)=>clearTimeout(id));
       }
    },[])
    return (
        <div className="container">
          {texts.map((text, index) => (
            <div className="word" key={index}>{text}</div>
          ))}
        </div>
      );
    };

export default DelayedTexts;