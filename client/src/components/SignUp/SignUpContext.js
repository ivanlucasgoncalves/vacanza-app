import React, { useState, createContext } from 'react';
import axios from 'axios';

export const SignUpContext = createContext();

export const SignUpProvider = ( props ) => {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

	const handleChange = ( e ) => {
		e.persist();
		setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
	}

	const handleSubmit = ( e ) => {
        if (e) e.preventDefault();
        const data = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            password: inputs.password
        }
        const headers = {
            "Content-Type": "application/json",
        }
        axios({
            method: 'POST',
            url: '/api/user/register',
            headers,
            data
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return (
        <SignUpContext.Provider value={[inputs, handleChange, handleSubmit]}>
            {props.children}
        </SignUpContext.Provider>
    );
}