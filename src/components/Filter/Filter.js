import React from 'react';
import styles from './Filter.module.css'; 

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        Filter contacts by name:
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;
