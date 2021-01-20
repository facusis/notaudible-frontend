import React from 'react';
import { useState, useEffect } from "react";
import {fetchResource} from "../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Biblioteca.css";

const Biblioteca = ({setCategory, request}) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('data/category',"",'GET').then(result => { setData(result) });
    }, []);

    const [datas, setDatas] = useState();

    useEffect(() => {
        fetchResource('data/book',"",'GET').then(results => { setDatas(results) });
    }, []);

    var imagenes=new Array(
        ['img/1.jpg','http://www.lawebdelprogramador.com/cursos/'],
        ['img/2.jpg','http://www.lawebdelprogramador.com/foros/'],
        ['img/3.jpg','http://www.lawebdelprogramador.com/pdf/'],
        ['img/4.jpg','http://www.lawebdelprogramador.com/utilidades/']
    );

    return (
        <div className="boxes">
        <div className="card bg-light mb-4">
            {data && data.map((item) => (
                <div className="card-body">

                    <div class="card-header">
                        <option key={item.name} value={item._id}>
                            {item.name}
                        </option>
                    </div>

                    {datas && datas.map((results) => (
                        <div className="card-text">
                            <div class="row">
                                <div className="col-sm">
                                    <img src="https://definicion.de/wp-content/uploads/2009/03/libro.jpg" className="foto"></img>
                                    <option key={results.title} value={item._id===results.category}>
                                        <a href=" ">{results.title}</a>
                                    </option>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ))}
    </div>
    </div>
    );
};

export default Biblioteca;