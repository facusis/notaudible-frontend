import React, { useState, useEffect } from "react";

const SelectRequest = ({setCategory, request}) => {

    const [data, setData] = useState();
    console.log(request);

    useEffect(() => {
        fetch("http://localhost:3001/data/category", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:
                    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmM2OGYyNjZjNWRhYjgxNWExM2I2YyIsImlhdCI6MTYwNjE4MzYzOX0.68JNkWLmClPi5QyH7Kq8zw7SjfoAXx_dG5HOVScGDN0",
            },
        }).then(res => res.json()).then(result => { setData(result) });
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