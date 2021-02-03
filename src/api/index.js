const API_URL = window.location.hostname === 'notaudible.netlify.app' ? "https://notaudible.herokuapp.com" : "http://localhost:3001"


export const fetchResource = (resource, id, method, data, options={}, headers={}) => {


    const API_URL = window.location.hostname === 'notaudible.netlify.app' ? "https://notaudible.herokuapp.com" : "http://localhost:3001"

    const defaultOptions = {
        mode: 'cors',
        method: method,
    }

    const defaultHeaders = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${localStorage.getItem('token')}`
    }

    let url = `${API_URL}/${resource}`;

    if (id) {
        url += `/${id}`;
    }

    const finalOptions = {
       ...defaultOptions,
       ...options,
        headers: {
            ...defaultHeaders,
            ...headers,
        },
        body: JSON.stringify(data)
    }

    return fetch(url, finalOptions).then(res => {      
        if(res.statusText !== 'No Content'){
            return res.json();
        }
    });
}