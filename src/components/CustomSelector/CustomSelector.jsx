import React from 'react';
import './CustomSelector.css';

const CustomSelector = ({ options }) => {
  return (
    <select
      className='custom-selector'
      //onChange={(e) => handleChange(e.target.value)}
    >
      <option defaultValue={'Cualquiera'} className='custom-selector-option'>
        Cualquiera
      </option>
      {options
        ? options.map(({ uid, provinceState }) => (
            <option
              key={uid + 1}
              value={provinceState}
              className='custom-selector-option'
            >
              {provinceState}
            </option>
          ))
        : null}
    </select>
  );
};

export default CustomSelector;
