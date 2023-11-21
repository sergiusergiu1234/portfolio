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
    return (<div className="copy-comp-container">
           <label>NOTE: customer account for testing purposes:</label>
        <table>
            <tbody>
                <tr>
                    <td className="h">
                        @ <MdDoubleArrow />
                    </td>   
                    <td><Button className="copy-button" onClick={copyUsername}>
                        user1
                         {lastCopied === 'username' ? <RiCheckDoubleFill /> : <FiClipboard/> } 
                        </Button>
                    </td>
                    <td>
                       
                    </td>
                </tr>
                <tr>
                    <td className="h">pass <MdDoubleArrow /></td>
                    <td>
                    <Button className="copy-button" onClick={copyPassword}>
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