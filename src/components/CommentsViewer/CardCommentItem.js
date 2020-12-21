import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import {formatRelative, subDays, format} from 'date-fns'
import { es, } from 'date-fns/locale'


export const CardCommentItem = (props) => {

  const [userInfo, setUserInfo] = useState();
    
  useEffect(() => {    
          fetchResource('data/user', props.userId, 'GET')
          .then(result => { 
              setUserInfo(result);
           });
          }, [])


  const fecha = formatRelative(new Date(props.comm.createdAt), new Date(), { locale: es });
  console.log(fecha);

    return (
      <ul style={{ listStyleType: "none" }}>
        <div className="UserComentario">{userInfo && userInfo.nickname} opinó {fecha}:</div>
        <div className="UserOpinion">{props.comm.comment}
        </div>
      </ul>
    );
  }
