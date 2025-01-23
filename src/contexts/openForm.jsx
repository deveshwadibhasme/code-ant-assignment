import React, { createContext, useState } from 'react';

export const OpenFormContext = createContext();

function OpenFormProvider ({ children }){
    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    return (
        <OpenFormContext.Provider value={[isOpen, toggleForm ]}>
            {children}
        </OpenFormContext.Provider>
    );
};

export default OpenFormProvider;