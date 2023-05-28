import React, { useState } from "react";

function Sort({ value, onClickSort }) {
  const [open, setOpen] = useState(false);
  const list = [ 
    { name: 'RECOMMENDED (down)', sortProperty: 'rating' },
    { name: 'RECOMMENDED (up)', sortProperty: '-rating' },
    { name: 'PRICE (down)', sortProperty: 'price' },
    { name: 'PRICE (up)', sortProperty: '-price' },
    { name: 'ALPHABET (down)', sortProperty: 'title' },
    { name: 'ALPHABET (up)', sortProperty: '-title' },
  ];

  const onClickListItem = (i) => {
    onClickSort(i);
    setOpen(false);
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
         fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d=" M10 SC10 5.16927 9.93815 5.31576 9.81445" fill="#2c2c2c" />
        </svg>
        <b>SORT BY:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li 
                key={i} 
                onClick={() => onClickListItem(obj)} 
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
        )
      }
    </div>
  );
}

export default Sort;