import React from 'react';
import './styles.css';

const Select = ({ options, onChange }) => {
  return (
    <div className="custom-select">
      <select onChange={onChange}>
        <option>selecione</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
