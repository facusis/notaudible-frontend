import React, { useState, useEffect } from "react";
import {fetchResource} from "../../api";
import './SelectRequest.css';


const SelectRequest = ({setCategory, request}) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch("http://localhost:3001/data/category", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:
                    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTg4MDM5YTFhYTdmMDMwY2E1ZTczMSIsImlhdCI6MTYwMzgyOTkwNX0.L3OhDIM07ihrCn4mHnndiIS8KivQ2jFzIAYrg7usE4Q",
            },
        }).then((res) => res.json()).then((result) => { setData(result) });
    }, []);

    return (
        <select
        
        className={"input-library"}
            onChange={event => setCategory(event.target.value)}
        >
            <option disabled selected>Selecciona una categoria</option>
            {data && data.map((item) => (
                <option key={item.name} value={item.name}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default SelectRequest;