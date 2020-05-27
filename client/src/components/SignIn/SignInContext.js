import React, { useState, createContext } from 'react';
import axios from 'axios';

export const SigInContext = createContext();

export const SigInProvider = ( props ) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

	const handleChange = ( e ) => {
		e.persist();
		setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
	}

	const handleSubmit = ( e ) => {
        // if (e) e.preventDefault();
        // const data = {
        //     username: 'Bia G.',
        //     password: '147852',
        //     email: 'beatris@gmail.com'
        // }
        // const headers = {
        //     "Content-Type": "application/json",
        // }
        // fetch('http://localhost:5000/api/user/register', {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify(data)
        //     })
        //     .then(response => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:5000/api/user/register',
        //     headers,
        //     data
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
    
    return (
        <SigInContext.Provider value={[inputs, handleChange, handleSubmit]}>
            {props.children}
        </SigInContext.Provider>
    );
}