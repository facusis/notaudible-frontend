import React, { useState, useEffect } from "react";
import {fetchResource} from "../../api";

const SelectRequest = ({setCategory, request}) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('data/category',"",'GET').then(result => { setData(result) });
    }, []);

    return (
        <select
            onChange={event => setCategory(event.target.value)}
        >
            {data && data.map((item) => (
                <option key={item.name} value={item._id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default SelectRequest;