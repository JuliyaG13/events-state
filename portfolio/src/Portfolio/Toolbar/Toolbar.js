import React from 'react';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div className="toolbar">
    {filters.map((filter, index) => (
      <button
        key={index}
        onClick={() => onSelectFilter(filter)}
        className={selected === filter ? 'active' : ''}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default Toolbar;