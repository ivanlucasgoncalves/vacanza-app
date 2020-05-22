import React, { useState, createContext } from 'react';

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
		if (e) e.preventDefault();
    }
    
    return (
        <SigInContext.Provider value={[inputs, handleChange, handleSubmit]}>
            {props.children}
        </SigInContext.Provider>
    );
}