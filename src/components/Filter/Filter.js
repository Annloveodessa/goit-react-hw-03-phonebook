import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
