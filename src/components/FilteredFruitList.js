import React, { Component } from 'react';

const FilteredFruitList = ({fruit, filter}) => {
  // debugger

  const fruitList = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: "",
  fruit: [],
}

export default FilteredFruitList;
