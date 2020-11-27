import React, { useRef, useState } from 'react';

const UploadAudio = () => {
    const [titleEl, setTitleEl] = useState('');
    const fileInputEl = useRef(null);

    const onTrackSelected = (files) => {
        const url = `http://localhost:3001/upload`;
        const title = titleEl;
        if (files) {
            const formData = new FormData();

            formData.append('file', files[0]);
            formData.append('name', title);

            const options = {
                method: 'POST',
                body: formData,
                headers: new Headers({}),
                mode: 'cors',
            };

            fetch(url, options)
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
                .then((payload) => {
                    console.log(`Saved song with id: ${payload}`);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div>
            <div className="form_line">
                <p path="title">Title:</p>
                <input
                    type="text"
                    onChange={(e) => setTitleEl(e.target.value)}
                    className="form-control"
                    placeholder="Title"
                />
            </div>
            <label className="upload_button" htmlFor="fileupload">
                Upload
                <input
                    type="file"
                    id="fileupload"
                    accept=".mp3,audio/*"
                    ref={fileInputEl}
                    onChange={() => onTrackSelected(fileInputEl.current.files)}
                />
            </label>
        </div>
    );
};

export default UploadAudio;