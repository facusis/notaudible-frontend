import React from 'react';
import {BookCard} from "./BookCard";
import { Link, useHistory } from "react-router-dom";


export const ResultList = (props) => {


const history = useHistory();
  
return (
    <div className="BoxCategory">
      <h3>Resultados de tu búsqueda</h3>
      <div className="BooksInCategory">
      {props && props.result.map(data => {
            function handleLink() {
              history.push(`/InfoAudioLibro/${data._id}`);
          };
            return <Link onClick={handleLink}>
                      <BookCard
                          title={data.title}
                          author={data.author}
                          urlimage={data.urlimage}/>  
                  </Link>                              
            }
            
    ) }
    </div>
    </div>
  
)}
