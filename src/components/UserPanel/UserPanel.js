import React, {useEffect, useState} from 'react';
import './UserPanel.css';
import InputUpdate from '../Utils/InputUpdate';
import {fetchResource} from "../../api";

const UserPanel = () => {

    const [data, setData] = useState();
    const [emailInput, setEmailInput] = useState(false);
    const [nicknameInput, setNicknameInput] = useState(false);
    const [aboutInput, setAboutInput] = useState(false);
    

    
    useEffect(() => {
        fetchResource('data/user', localStorage.getItem('id'), 'GET').then((result) => {setData(result)});
    }, [emailInput, nicknameInput, aboutInput])

    const changeState = (event) => {
        
        if ((event.target.id) === "email") 
            return setEmailInput(true);

        if ((event.target.id) === "nickname")
            return setNicknameInput(true);
        
        if ((event.target.id) === "about")
            return setAboutInput(true);
    }

    return (
    <div className="box">
        <br></br>
        Email:
        {!emailInput ? 
            <div> {data && data.email} 
                <a id="email" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="email" setInput={setEmailInput}></InputUpdate>
        }
        <br></br>
        Nickname:
        {!nicknameInput ? 
            <div> {data && data.nickname} 
                <a id="nickname" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="nickname" setInput={setNicknameInput}></InputUpdate>
        }
        <br></br>
        About:
        {!aboutInput ? 
            <div> {data && data.about} 
                <a id="about" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="about" setInput={setAboutInput}></InputUpdate>
        }
    </div>
    );
};

export default UserPanel;