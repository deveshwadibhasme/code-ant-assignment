import React, { createContext, useState } from 'react';

export const SearchRepoContext = createContext();

export const SearchRepoProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
  

    const updateSearchTerm = (term) => {
        setSearchTerm(term);
    };

    return (
        <SearchRepoContext.Provider value={{ searchTerm, updateSearchTerm }}>
            {children}
        </SearchRepoContext.Provider>
    );
};