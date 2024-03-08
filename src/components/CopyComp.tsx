import { Button, Form, InputGroup } from "react-bootstrap";
import {FiClipboard} from 'react-icons/fi';
import { MdDoubleArrow } from "react-icons/md";
import {RiCheckDoubleFill} from 'react-icons/ri';
import "./CopyComp.css";
import { useState } from "react";
const CopyComp = () =>{
    const username = 'user1';
    const password ='PASSW123!a';
    const [lastCopied,setLastCopied] = useState('');
    const copyUsername = () => {
        navigator.clipboard.writeText(username);
        setLastCopied('username');
    }

    const copyPassword = () =>{
        navigator.clipboard.writeText(password);
        setLastCopied('password');
    }
    return (<div className="flex flex-col text-center items-left justify-center text-white w-max  ml-[5vw] mb-[2vw]">
           <label>NOTE: customer account for testing purposes:</label>
        <table>
            <tbody>
                <tr>
                    <td className="flex flex-row items-center  ">
                        @ <MdDoubleArrow />
                    </td>   
                    <td >
                        <Button className="flex flex-row items-center text-white" onClick={copyUsername}>
                        user1
                         {lastCopied === 'username' ? <RiCheckDoubleFill /> : <FiClipboard/> } 
                        </Button>
                    </td>
                    <td>
                       
                    </td>
                </tr>
                <tr>
                    <td className="flex flex-row items-center ">pass <MdDoubleArrow /></td>
                    <td>
                    <Button className="flex flex-row items-center text-white" onClick={copyPassword}>
                        PASSW123!a
                        {lastCopied === 'password' ? <RiCheckDoubleFill /> : <FiClipboard/> } 
                    </Button>
                    </td>
                </tr>
                </tbody>
        </table>
    </div>)
}

export default CopyComp;