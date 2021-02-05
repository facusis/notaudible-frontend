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
            <h3 className="h3g">Modifica los detalles de la configuración de tu cuenta de <text style={{ fontWeight: 'bolder' }}>NotAudible</text></h3>
            <br></br><br></br>
            
        <div className="containerbox1">
        <div>
            <h4 className="h3g">Correo Electronico:</h4>
        {!emailInput ? 
            <div> {data && data.email} 
                <button className="raise" id="email" onClick={changeState}> Actualizar</button>
            </div> : <InputUpdate request="email" setInput={setEmailInput}></InputUpdate>
        }
        </div>
        <div>
            <h4 lassName="h3g">Nombre de usuario:</h4>
        {!nicknameInput ? 
            <div> {data && data.nickname} 
                <button className="raise" id="nickname" onClick={changeState}> Actualizar</button>
            </div> : <InputUpdate request="nickname" setInput={setNicknameInput}></InputUpdate>
        }
        </div>
        <div>
            <h4 lassName="h3g">Observaciones</h4>
        {!aboutInput ? 
            <div> {data && data.about} 
                <button className="raise" id="about" onClick={changeState}> Actualizar</button>
            </div> : <InputUpdate request="about" setInput={setAboutInput}></InputUpdate>
        }
        </div>
        
        
            <div className="containerbox1"> <FavouriteList userId={data && data._id}/> </div>
            
        </div>
        </div>
    
    
    );
};


export default UserPanel;

