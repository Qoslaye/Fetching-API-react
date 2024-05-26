import React, { useState } from 'react';

const FetchApi = () => {
    const [data, setData] = useState([]);
    
    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setData(json);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
    }

    return (
        <div>
            <button onClick={apiGet}>Fetch Api</button> <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default FetchApi;
