import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import {formatRelative, subDays, format} from 'date-fns'
import { es, } from 'date-fns/locale'
import {CommentEditor} from './CommentEditor';


export const CardCommentItem = (props) => {

  const [userInfo, setUserInfo] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  const editMode = () => {
    //CONDICIONAL introducir código aqui para validar que el usuario propio es el unico que puede editar su comentario//
    if (props.userId === localStorage.id) {
      setIsUpdate(true);
      console.log('El modo de edición se ha activado');
  }
};

  const cancelMode = () => {
    setIsUpdate(false);
    console.log('El modo de edición se ha desactivado');
  };

  const deleteComment = () => {

  }

  useEffect(() => {    
          fetchResource('data/user', props.userId, 'GET')
          .then(result => { 
              setUserInfo(result);
           });
          }, [])


  const fecha = formatRelative(new Date(props.comm.createdAt), new Date(), { locale: es });

  //console.log(fecha);

    return (
      <ul style={{ listStyleType: "none" }}>
        <div className="UserComentario">{userInfo && userInfo.nickname} opinó {fecha}:</div>
        <div className="UserOpinion">
          {isUpdate ? (<CommentEditor comment={props.comm.comment} cancellation={cancelMode}/>) : <div onClick={editMode}>{props.comm.comment}</div>}
        </div>
      </ul>
    );  
  }

  // <input type="button" onClick={() => isUpdate ? submit() : setIsUpdate(!isUpdate)} value={isUpdate ? submit() : update()} />
