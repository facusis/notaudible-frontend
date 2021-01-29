import React, {useEffect, useState} from 'react';
import './UserPanel.css';
import InputUpdate from '../Utils/InputUpdate';
import {fetchResource} from "../../api";
import {FavouriteList} from "../FavouriteList/FavouriteList";


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
        <div className="box1">
        <div className="containerbox1">
        <div className="sectionNote"> Modifica los detalles de la configuración de tu cuenta de <text style={{ fontWeight: 'bolder' }}>NotAudible</text></div>
        <div>
            <h3 className="h3g">Email</h3>
        {!emailInput ? 
            <div> {data && data.email} 
                <a className="atex" id="email" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="email" setInput={setEmailInput}></InputUpdate>
        }
        </div>
        <div>
            <h3 lassName="h3g">Nickname</h3>
        {!nicknameInput ? 
            <div> {data && data.nickname} 
                <a className="atex" id="nickname" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="nickname" setInput={setNicknameInput}></InputUpdate>
        }
        </div>
        <div>
            <h3 lassName="h3g">About</h3>
        {!aboutInput ? 
            <div> {data && data.about} 
                <a className="atex" id="about" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="about" setInput={setAboutInput}></InputUpdate>
        }
        </div>
        
        <div className="underlineDecoration"></div>
    </div>
    <FavouriteList userId={data && data._id}/>
    </div>
    
    );
};


export default UserPanel;

