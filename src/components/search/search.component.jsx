import React from 'react';
import './search.styles.css'

export const Search = ({ placeholder, handleSearch }) => (
  <input className="search" type="search" placeholder={placeholder} onChange={handleSearch} />
)