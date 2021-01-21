import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import {formatRelative, subDays, format} from 'date-fns'
import { es, } from 'date-fns/locale'
import {CommentEditor} from './CommentEditor';


export const CardCommentItem = (props) => {

  const [userInfo, setUserInfo] = useState();
  const [isUpdate, setIsUpdate] = useState(false);




  useEffect(() => {    
    fetchResource('data/user', props.userId, 'GET')
    .then(result => { 
        setUserInfo(result);
     });
    }, [])

  const editMode = () => {
    if (props.userId === localStorage.id) {
      setIsUpdate(true);
      console.log('El modo de edición se ha activado');
  };
};

  const cancelMode = () => {
    setIsUpdate(false);
    console.log('El modo de edición se ha desactivado');
  };

  const handleDelete = () => {
    console.log(props.comm._id);
    fetchResource('data/comments',props.comm._id,'DELETE', {})
    setIsUpdate(false);
    props.setRefresh(true);
    console.log('se ha pulsado el botón eliminar');  
  };

  const fecha = formatRelative(new Date(props.comm.createdAt), new Date(), { locale: es });

  //console.log(fecha);

    return (
      <ul style={{ listStyleType: "none"}}>
        <div className="UserComentario">{userInfo && userInfo.nickname} opinó {fecha}:</div>
        <div className="UserOpinion">
          {isUpdate ? (<CommentEditor setIsUpdate={setIsUpdate} setRefresh={props.setRefresh} comment={props.comm.comment} commId={props.comm._id} cancellation={cancelMode} handleDelete={handleDelete}/>) : <div onClick={editMode}>{props.comm.comment}</div>}
        </div>
      </ul>
    );  
  
};
  // <input type="button" onClick={() => isUpdate ? submit() : setIsUpdate(!isUpdate)} value={isUpdate ? submit() : update()} />
